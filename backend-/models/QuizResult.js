const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true
  },

  basicScore: {
    type: Number,
    default: 0
  },

  advancedScore: {
    type: Number,
    default: 0
  },

  audioScore: {
    type: Number,
    default: 0
  },

  // 🔢 Auto calculated
  totalScore: {
    type: Number,
    default: 0
  },

  // ✅ Auto pass/fail
  passed: {
    type: Boolean,
    default: false
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

/* =====================================
   🔥 AUTO CALCULATE SCORE + PASS STATUS
===================================== */
quizResultSchema.pre("save", function () {
  this.totalScore =
    (this.basicScore || 0) +
    (this.advancedScore || 0) +
    (this.audioScore || 0);

  this.passed = this.totalScore >= 15;

  this.updatedAt = Date.now();
});

module.exports = mongoose.model("QuizResult", quizResultSchema);
