const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");

/* ===============================
   📩 USER SEND MESSAGE (ORIGINAL)
================================ */
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newMessage = new Contact({
      name,
      email,
      message,
      status: "pending" // ✅ ADDED
    });
    await newMessage.save();

    // Send Email to Admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Harmoniq Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    res.json({ success: true });

  } catch (error) {
    console.log("CONTACT ERROR:", error);
    res.status(500).json({ success: false });
  }
});

/* ===============================
   📥 ADMIN – GET ALL MESSAGES
================================ */
router.get(
  "/admin",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 });
      res.json(messages);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  }
);

/* ===============================
   ✉️ ADMIN – REPLY TO MESSAGE
================================ */
router.post(
  "/admin/reply/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const { reply } = req.body;

      const message = await Contact.findById(req.params.id);
      if (!message) {
        return res.status(404).json({ message: "Message not found" });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Send reply email to user
      await transporter.sendMail({
        from: `"Harmoniq Support" <${process.env.EMAIL_USER}>`,
        to: message.email,
        subject: "Reply to your enquiry",
        html: `
          <p>Hello ${message.name},</p>
          <p>${reply}</p>
          <br/>
          <p>Regards,<br/>Harmoniq Team</p>
        `
      });

      // Update status
      message.status = "replied";
      message.reply = reply;
      message.repliedAt = new Date();
      await message.save();

      res.json({ success: true });

    } catch (err) {
      console.error("REPLY ERROR:", err);
      res.status(500).json({ success: false });
    }
  }
);

module.exports = router;
