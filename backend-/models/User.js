const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    // ✅ FIXED: Phone required only on NEW user creation
    phone: {
      type: String,
      required: function () {
        return this.isNew;   // 👈 KEY LINE
      }
      // unique: true
    },

    password: {
      type: String,
      required: true
    },

    // 🔐 Forgot Password
    resetOtp: {
      type: String,
      default: null
    },

    resetOtpExpiry: {
      type: Date,
      default: null
    },

    /* ================== ACCESS CONTROL ================== */

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },

    isBlocked: {
      type: Boolean,
      default: false
    },

    status: {
      type: String,
      enum: ["active", "blocked", "deleted"],
      default: "active"
    },

    /* ================== ACTIVITY TRACKING ================== */

    progress: {
      lessonsCompleted: {
        type: Number,
        default: 0
      },
      quizzesCompleted: {
        type: Number,
        default: 0
      },
      lastActive: {
        type: Date,
        default: Date.now
      }
    },

    lastLogin: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
