const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const {
  authMiddleware,
  adminMiddleware
} = require("../middleware/authMiddleware");

/* ================= EMAIL SETUP ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ================= SIGNUP ================= */
router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword
    });

    await user.save(); // full validation ON

    const token = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Signup successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    // ✅ UPDATED CHECK (BLOCKED + DELETED USERS)
    if (
      user.isBlocked ||
      user.status === "blocked" ||
      user.status === "deleted"
    ) {
      return res.status(403).json({
        message: "Your account is not active. Please contact admin."
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });

    const token = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status
      }
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* =====================================================
   🔐 FORGOT PASSWORD – SEND OTP
===================================================== */
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Email not registered" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetOtp = otp;
    user.resetOtpExpiry = Date.now() + 10 * 60 * 1000;

    await user.save({ validateBeforeSave: false });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Harmoniq Password Reset OTP",
      html: `<h2>Your OTP is</h2><h1>${otp}</h1><p>Valid for 10 minutes</p>`
    });

    res.json({ message: "OTP sent to email" });
  } catch (err) {
    console.error("FORGOT PASSWORD ERROR:", err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

/* =====================================================
   🔐 RESET PASSWORD
===================================================== */
router.post("/reset-password", async (req, res) => {
  const { email, otp, password } = req.body;

  try {
    const user = await User.findOne({
      email,
      resetOtp: otp,
      resetOtpExpiry: { $gt: Date.now() }
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired OTP" });

    user.password = await bcrypt.hash(password, 10);
    user.resetOtp = null;
    user.resetOtpExpiry = null;

    await user.save({ validateBeforeSave: false });

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("RESET PASSWORD ERROR:", err);
    res.status(500).json({ message: "Password reset failed" });
  }
});

/* =====================================================
   👥 ADMIN USERS
===================================================== */
router.get("/admin/users", authMiddleware, adminMiddleware, async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json(users);
});

module.exports = router;
