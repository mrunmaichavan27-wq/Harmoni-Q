const express = require("express");
const router = express.Router();

const User = require("../models/User");
const QuizResult = require("../models/QuizResult");

const {
  authMiddleware,
  adminMiddleware
} = require("../middleware/authMiddleware");

/* ===============================
   📊 ADMIN DASHBOARD STATS
================================ */
router.get("/stats", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ status: { $ne: "deleted" } });

    const totalQuizzes = await QuizResult.countDocuments();

    const topResult = await QuizResult.findOne().sort({ totalScore: -1 });

    res.json({
      totalUsers,
      totalQuizzes,
      topScore: topResult?.totalScore || 0
    });
  } catch (err) {
    console.error("ADMIN STATS ERROR:", err);
    res.status(500).json({ message: "Failed to load admin stats" });
  }
});

/* ===============================
   👥 GET ALL ACTIVE USERS
================================ */
router.get("/users", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find(
      { status: { $ne: "deleted" } },
      { password: 0, resetOtp: 0, resetOtpExpiry: 0 }
    ).sort({ createdAt: -1 });

    res.json(users);
  } catch (err) {
    console.error("FETCH USERS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

/* ===============================
   🚫 BLOCK USER
================================ */
router.put("/block-user/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        isBlocked: true,
        status: "blocked"
      },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User blocked successfully", user });
  } catch (err) {
    console.error("BLOCK USER ERROR:", err);
    res.status(500).json({ message: "Failed to block user" });
  }
});

/* ===============================
   🟢 UNBLOCK USER
================================ */
router.put("/unblock-user/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        isBlocked: false,
        status: "active"
      },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User unblocked successfully", user });
  } catch (err) {
    console.error("UNBLOCK USER ERROR:", err);
    res.status(500).json({ message: "Failed to unblock user" });
  }
});

/* ===============================
   🚫 BLOCKED USERS LIST
================================ */
router.get("/blocked-users", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find(
      { status: "blocked" },
      { password: 0 }
    ).sort({ updatedAt: -1 });

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blocked users" });
  }
});

/* ===============================
   ❌ SOFT DELETE USER
================================ */
router.put("/delete-user/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        status: "deleted",
        isBlocked: true
      },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User moved to deleted list", user });
  } catch (err) {
    console.error("DELETE USER ERROR:", err);
    res.status(500).json({ message: "Failed to delete user" });
  }
});

/* ===============================
   🗑️ DELETED USERS LIST
================================ */
router.get("/deleted-users", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find(
      { status: "deleted" },
      { password: 0 }
    ).sort({ updatedAt: -1 });

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch deleted users" });
  }
});

/* ===============================
   🧠 QUIZ RESULTS
================================ */
router.get("/quizzes", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const results = await QuizResult.find()
      .populate("userId", "name email")
      .sort({ updatedAt: -1 })
      .lean();

    const safeResults = results.map(q => ({
      ...q,
      userId: q.userId || { name: "Deleted User", email: "-" }
    }));

    res.json(safeResults);
  } catch (err) {
    console.error("FETCH QUIZZES ERROR:", err);
    res.status(500).json({ message: "Failed to fetch quiz results" });
  }
});

/* ===============================
   📊 QUIZ ANALYTICS (ADMIN)
================================ */
router.get("/quiz-analytics", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const quizzes = await QuizResult.find()
      .populate("userId", "name email")
      .lean();

    const results = quizzes.map(q => {
      const totalScore =
        (q.basicScore || 0) +
        (q.advancedScore || 0) +
        (q.audioScore || 0);

      return {
        ...q,
        totalScore,
        passed: totalScore >= 15,
        userId: q.userId || { name: "Deleted User", email: "-" }
      };
    });

    const highest = {
      basic: quizzes.sort((a, b) => (b.basicScore || 0) - (a.basicScore || 0))[0],
      advanced: quizzes.sort((a, b) => (b.advancedScore || 0) - (a.advancedScore || 0))[0],
      audio: quizzes.sort((a, b) => (b.audioScore || 0) - (a.audioScore || 0))[0]
    };

    res.json({
      results,
      highest
    });

  } catch (err) {
    console.error("QUIZ ANALYTICS ERROR:", err);
    res.status(500).json({ message: "Failed to load analytics" });
  }
});
/* ===============================
   ✏️ UPDATE USER (NEW FEATURE)
================================ */
router.put("/update-user/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone
      },
      { new: true, runValidators: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      message: "User updated successfully",
      user
    });

  } catch (err) {
    console.error("UPDATE USER ERROR:", err);
    res.status(500).json({ message: "Failed to update user" });
  }
});

module.exports = router;