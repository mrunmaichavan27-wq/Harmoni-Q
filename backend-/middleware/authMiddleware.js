const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* ================= USER AUTH ================= */
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // ❌ No Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 🔑 Extract token
    const token = authHeader.split(" ")[1];

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    /*
      ✅ Support both JWT payload formats:
      1) { id: userId }
      2) { user: { id: userId, role } }
    */
    const userData = decoded.user ? decoded.user : { id: decoded.id };

    if (!userData || !userData.id) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    // 🔍 FETCH USER FROM DB
    const user = await User.findById(userData.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 🚫 BLOCK CHECK (IMPORTANT)
    if (user.isBlocked || user.status === "blocked") {
      return res.status(403).json({
        message: "Your account is blocked. Please contact admin."
      });
    }

    // 🕒 UPDATE REAL-TIME ACTIVITY
    user.lastLogin = new Date();
    user.progress.lastActive = new Date();
    await user.save();

    // ✅ Attach full user info
    req.user = {
      id: user._id,
      role: user.role
    };

    next();
  } catch (error) {
    console.error("JWT ERROR:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

/* ================= ADMIN AUTH ================= */
const adminMiddleware = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin access only" });
    }

    next();
  } catch (err) {
    return res.status(403).json({ message: "Admin authorization failed" });
  }
};

module.exports = {
  authMiddleware,
  adminMiddleware
};
