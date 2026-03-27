console.log("✅ quiz.js loaded");

const express = require("express");
const router = express.Router();
const QuizResult = require("../models/QuizResult");
const { authMiddleware } = require("../middleware/authMiddleware");

/* =====================================
   SAVE / UPDATE QUIZ RESULT
===================================== */
router.post("/submit", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    // ✅ fallback values (IMPORTANT FIX)
    const basicScore = req.body.basicScore ?? 0;
    const advancedScore = req.body.advancedScore ?? 0;
    const audioScore = req.body.audioScore ?? 0;

    let result = await QuizResult.findOne({ userId });

    if (!result) {
      // ✅ create new
      result = new QuizResult({
        userId,
        basicScore,
        advancedScore,
        audioScore
      });
    } else {
      // ✅ update existing (IMPORTANT FIX)
      result.basicScore = basicScore;
      result.advancedScore = advancedScore;
      result.audioScore = audioScore;
    }

    await result.save();

    res.json({
      success: true,
      message: "Quiz result saved successfully",
      result
    });

  } catch (error) {
    console.error("❌ Quiz submit error:", error);
    res.status(500).json({ message: "Failed to save quiz result" });
  }
});


/* =====================================
   SAVE ONLY BASIC MCQ (OPTIONAL)
===================================== */
router.post("/save-mcq", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const basicScore = req.body.basicScore ?? 0;

    let result = await QuizResult.findOne({ userId });

    if (!result) {
      result = new QuizResult({
        userId,
        basicScore,
        advancedScore: 0,
        audioScore: 0
      });
    } else {
      result.basicScore = basicScore;
    }

    await result.save();

    res.json({
      success: true,
      message: "MCQ saved",
      result
    });

  } catch (err) {
    console.error("❌ MCQ save error:", err);
    res.status(500).json({ message: "Error saving MCQ" });
  }
});


/* =====================================
   GET PROFILE DATA
===================================== */
router.get("/my-profile", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await QuizResult.findOne({ userId });

    if (!result) {
      return res.json({
        basicScore: 0,
        advancedScore: 0,
        audioScore: 0,
        totalScore: 0,
        passed: false
      });
    }

    res.json({
      basicScore: result.basicScore || 0,
      advancedScore: result.advancedScore || 0,
      audioScore: result.audioScore || 0,
      totalScore: result.totalScore || 0,
      passed: result.passed || false
    });

  } catch (error) {
    console.error("❌ Profile fetch error:", error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
});

module.exports = router;