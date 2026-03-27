const express = require("express");
const Beat = require("../models/Beat");
const auth = require("../middleware/authMiddleware"); // 👈 original line kept

// ✅ ADDED — extract actual middleware function
const authMiddleware = auth.authMiddleware;

const router = express.Router();

/* ===============================
   SAVE BEAT TO USER PROFILE
================================ */
router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { name, notes } = req.body;

    if (!name || !notes || notes.length === 0) {
      return res.status(400).json({ message: "Invalid beat data" });
    }

    const beat = new Beat({
      user: req.user.id,
      name,
      notes
    });

    await beat.save();

    res.json({ message: "Beat saved to profile" });
  } catch (err) {
    console.error("SAVE BEAT ERROR:", err.message);
    res.status(500).json({ message: "Failed to save beat" });
  }
});

/* ===============================
   GET USER BEATS
================================ */
router.get("/", authMiddleware, async (req, res) => {
  try {
    const beats = await Beat.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json(beats);
  } catch (err) {
    console.error("FETCH BEATS ERROR:", err.message);
    res.status(500).json({ message: "Failed to fetch beats" });
  }
});

/* ===============================
   DELETE USER BEAT
================================ */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const beat = await Beat.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!beat) {
      return res.status(404).json({ message: "Beat not found" });
    }

    res.json({ message: "Beat deleted successfully" });
  } catch (err) {
    console.error("DELETE BEAT ERROR:", err.message);
    res.status(500).json({ message: "Failed to delete beat" });
  }
});

module.exports = router;
