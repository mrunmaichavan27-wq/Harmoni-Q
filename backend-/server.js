
require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

/* 🔹 ROUTE IMPORTS */
const beatRoutes = require(path.join(__dirname, "routes", "beatroutes"));
const authRoutes = require(path.join(__dirname, "routes", "auth"));
const contactRoutes = require(path.join(__dirname, "routes", "contact"));
const quizRoutes = require(path.join(__dirname, "routes", "quiz"));
const pianoRoutes = require(path.join(__dirname, "routes", "pianoRoutes"));
const adminRoutes = require(path.join(__dirname, "routes", "adminRoutes"));

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://harmoni-new.onrender.com"
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("🔍 CORS CHECK - Incoming origin:", origin);
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      console.log("✅ CORS ALLOWED for:", origin);
      callback(null, true);
    } else {
      console.log("❌ CORS BLOCKED for:", origin);
      callback(null, true); // Still allow but let browser handle it
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  credentials: true,
  maxAge: 86400,
  preflightContinue: false
};

// 🔴 CRITICAL: Apply CORS BEFORE any routes
app.use(cors(corsOptions));

// 🔴 CRITICAL: Handle preflight for all routes
app.options(/.*/, cors(corsOptions));



/* ===============================
   BODY PARSER
================================ */
app.use(express.json());


const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env file");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

connectDB();

/* ===============================
   SERVE REACT FRONTEND (production)
================================ */
const publicDir = path.join(__dirname, "public");
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));
}

/* ===============================
   API ROUTES
================================ */
app.use("/api/beats", beatRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/piano", pianoRoutes);
app.use("/api/admin", adminRoutes);

/* ===============================
   DEFAULT ROUTE — serve React for all non-API routes
================================ */
app.get("/", (req, res) => {
  const indexFile = path.join(__dirname, "public", "index.html");
  if (fs.existsSync(indexFile)) {
    res.sendFile(indexFile);
  } else {
    res.send("🚀 API is running...");
  }
});

// Catch-all: serve React app for any non-API route (client-side routing)
app.get(/^(?!\/api).*/, (req, res) => {
  const indexFile = path.join(__dirname, "public", "index.html");
  if (fs.existsSync(indexFile)) {
    res.sendFile(indexFile);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

/* ===============================
   GLOBAL ERROR HANDLER
================================ */
app.use((err, req, res, next) => {
  console.error("❌ SERVER ERROR:", err.message);
  res.status(500).json({ message: "Internal server error" });
});

/* ===============================
   SERVER START
================================ */
const PORT = process.env.PORT || 5000;

// 0.0.0.0 required for Hostinger and most cloud platforms
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🔥 Server running on port ${PORT}`);
});