const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  message: {
    type: String,
    required: true
  },

  // ✅ NEW: message status (pending / replied)
  status: {
    type: String,
    enum: ["pending", "replied"],
    default: "pending"
  },

  // ✅ NEW: admin reply content
  reply: {
    type: String,
    default: null
  },

  // ✅ NEW: reply time
  repliedAt: {
    type: Date,
    default: null
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Contact", contactSchema);
