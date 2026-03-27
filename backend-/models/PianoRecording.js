const mongoose = require("mongoose");

const pianoRecordingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  notes: [
    {
      note: String,
      octave: Number,
      time: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("PianoRecording", pianoRecordingSchema);