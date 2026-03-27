const mongoose = require("mongoose");

const beatSchema = new mongoose.Schema({
  user: {                         // ✅ CHANGED
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  notes: {
    type: Array,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Beat", beatSchema);