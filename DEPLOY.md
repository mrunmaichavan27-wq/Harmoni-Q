# HarmoniQ — Deployment Guide

This project has two parts:

- **Backend** (`backend-/`) → Node.js + Express + MongoDB → Deploy to **Railway**
- **Frontend** (`frontend/`) → React + Vite → Deploy to **Vercel**

---

## Architecture Overview

```
GitHub Repository
├── backend-/     → Railway (Node.js API on port 5000)
└── frontend/     → Vercel (React static site)
```

---

## PART 1 — Deploy Backend to Railway

### Prerequisites

- GitHub account
- Railway account → sign up at https://railway.app (free tier available)
- Your code pushed to GitHub (see Step 0 below)

---

### Step 0 — Push Code to GitHub

If you haven't pushed your project to GitHub yet:

**A. Create a new repository on GitHub**

1. Go to https://github.com/new
2. Repository name: `harmoni` (or any name)
3. Set to **Public** or **Private**
4. Do NOT add README or .gitignore (you already have them)
5. Click **Create repository**

**B. Push your code from VS Code terminal**

```bash
# Navigate to the root of the project
cd "c:\Nobita\Project\harmoni\harmoni"

# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit"

# Link to GitHub (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git branch -M main
git push -u origin main
```

> ⚠️ The `.gitignore` files exclude `node_modules` and `.env` — your secrets are safe.

---

### Step 1 — Create a Railway Project

1. Go to https://railway.app and log in
2. Click **"New Project"**
3. Click **"Deploy from GitHub repo"**
4. Connect your GitHub account if prompted
5. Select your repository (`harmoni`)
6. Railway will detect it — click **"Add service"**

---

### Step 2 — Set the Root Directory

Because your backend is inside a subfolder (`backend-/`), you must tell Railway where it is:

1. Click on your service in Railway dashboard
2. Go to **Settings** tab
3. Find **"Root Directory"**
4. Set it to: `backend-`
5. Click **Save**

---

### Step 3 — Add Environment Variables in Railway

Railway does NOT read your `.env` file (it's gitignored for security). You must add variables manually:

1. In your Railway service → click **"Variables"** tab
2. Click **"Add Variable"** for each:

| Variable     | Value                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `PORT`       | `5000`                                                                                                                                     |
| `MONGO_URI`  | `mongodb+srv://hemangimanjrekar2006_db_user:Harmoni2026@cluster0.ixfmnt3.mongodb.net/harmoni?retryWrites=true&w=majority&appName=Cluster0` |
| `JWT_SECRET` | `devsecret` (use a strong random string in production)                                                                                     |
| `EMAIL_USER` | `hemangimanjrekar2006@gmail.com`                                                                                                           |
| `EMAIL_PASS` | Your Gmail App Password                                                                                                                    |

> 💡 Tip: In Railway you can also click **"RAW Editor"** and paste all variables at once.

---

### Step 4 — Deploy

1. Railway auto-deploys when you push to GitHub
2. Go to the **"Deployments"** tab to watch the build logs
3. Wait for: `✅ MongoDB connected successfully` and `🔥 Server running on port 5000`
4. Go to **"Settings"** → **"Networking"** → **"Generate Domain"**
5. You'll get a URL like: `https://harmoni-backend-xxxx.up.railway.app`

> Save this URL — you'll need it for the frontend.

---

### Step 5 — Update MongoDB Atlas Network Access

Your Railway server has a dynamic IP. Allow all IPs in Atlas:

1. Go to https://cloud.mongodb.com
2. Left sidebar → **Security → Network Access**
3. Click **"Add IP Address"**
4. Click **"Allow Access from Anywhere"** → `0.0.0.0/0`
5. Click **Confirm**

---

## PART 2 — Deploy Frontend to Vercel

### Step 1 — Update the API URL

Before deploying, update [frontend/src/utils/api.js](frontend/src/utils/api.js):

```js
export const API_BASE =
  import.meta.env.VITE_API_URL || "https://YOUR-RAILWAY-URL.up.railway.app";
```

Replace `YOUR-RAILWAY-URL` with your actual Railway backend URL from Part 1 Step 4.

Commit and push this change:

```bash
git add .
git commit -m "Set production API URL"
git push
```

---

### Step 2 — Deploy to Vercel

1. Go to https://vercel.com and log in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Vite — configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Environment Variables"** → Add:

| Variable       | Value                                             |
| -------------- | ------------------------------------------------- |
| `VITE_API_URL` | `https://YOUR-RAILWAY-BACKEND-URL.up.railway.app` |

6. Click **"Deploy"**
7. You'll get a live URL like: `https://harmoniq.vercel.app`

---

### Step 3 — Update CORS in Backend

Add your Vercel URL to the allowed origins in [backend-/server.js](backend-/server.js):

```js
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://YOUR-APP.vercel.app", // ← Add your Vercel URL here
];
```

Commit and push → Railway will auto-redeploy.

---

## Auto-Deploy (After Initial Setup)

Once connected, every `git push` to `main`:

- **Railway** auto-rebuilds and redeploys your backend
- **Vercel** auto-rebuilds and redeploys your frontend

No manual steps needed after setup.

---

## Summary

| Service               | Platform      | URL Pattern                    |
| --------------------- | ------------- | ------------------------------ |
| Backend (Node.js API) | Railway       | `https://xxx.up.railway.app`   |
| Frontend (React)      | Vercel        | `https://xxx.vercel.app`       |
| Database (MongoDB)    | MongoDB Atlas | `cluster0.ixfmnt3.mongodb.net` |

---

## Local Development

```bash
# Terminal 1 — Backend
cd backend-
npm run dev
# Runs on http://localhost:5000

# Terminal 2 — Frontend
cd frontend
npm run dev
# Runs on http://localhost:5173
```

Ensure `frontend/.env` has:

```
VITE_API_URL=http://localhost:5000
```
