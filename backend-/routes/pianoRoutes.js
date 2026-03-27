const express = require("express");
const PianoRecording = require("../models/PianoRecording");
const { authMiddleware } = require("../middleware/authMiddleware");


const router = express.Router();

/* SAVE PIANO RECORDING */
router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { name, notes } = req.body;

    if (!name || !notes || !notes.length) {
      return res.status(400).json({ message: "Invalid piano data" });
    }

    const rec = new PianoRecording({
      userId: req.user.id,
      name,
      notes
    });

    await rec.save();
    res.json({ message: "Piano recording saved" });
  } catch (err) {
    res.status(500).json({ message: "Failed to save piano recording" });
  }
});

/* GET USER PIANO RECORDINGS */
router.get("/", authMiddleware, async (req, res) => {
  const recs = await PianoRecording.find({ userId: req.user.id })
    .sort({ createdAt: -1 });

  res.json(recs);
});

/* DELETE */
router.delete("/:id", authMiddleware, async (req, res) => {
  await PianoRecording.deleteOne({
    _id: req.params.id,
    userId: req.user.id
  });
  res.json({ message: "Piano recording deleted" });
});

/* ===============================
   DELETE PIANO RECORDING
================================ */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const rec = await PianoRecording.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!rec) {
      return res.status(404).json({ message: "Recording not found" });
    }

    res.json({ message: "Piano recording deleted" });
  } catch (err) {
    console.error("DELETE PIANO ERROR:", err.message);
    res.status(500).json({ message: "Failed to delete piano recording" });
  }
});

module.exports = router;