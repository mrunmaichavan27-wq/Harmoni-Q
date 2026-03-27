# CORS Fix Guide

## ✅ Changes Made

Your backend CORS configuration has been enhanced in `backend-/server.js`:

### Key Improvements:
1. **Triple-layer CORS protection**: 
   - `app.use(cors(corsOptions))` - Global middleware
   - `app.options("*", cors(corsOptions))` - Preflight handler
   - Backup per-route handler - Fallback for edge cases

2. **Enhanced headers**:
   - Added `X-Requested-With` header support
   - Added exposed headers for file downloads
   - Increased preflight cache time (86400 seconds = 24 hours)

3. **Debug logging**:
   - Server now logs all CORS checks to console
   - Helps identify origin mismatches

4. **Allowed Origins**:
   - `http://localhost:5173` (Vite dev)
   - `http://localhost:3000` (React dev)
   - `https://frontend-khaki-zeta-75.vercel.app` (Production)

## 🚀 Deployment Steps

### Step 1: Test Locally
```powershell
cd c:\harmoni\backend-
npm install  # If not already done
npm run dev
```

### Step 2: Verify Login Request Works
1. Open frontend at `http://localhost:5173`
2. Try login - should work without CORS errors
3. Check terminal for CORS debug logs

### Step 3: Deploy to Railway
1. Commit changes to your Git repository:
```bash
git add backend-/server.js
git commit -m "Fix: Enhanced CORS configuration with triple-layer protection"
git push origin main  # or your branch name
```

2. Railway should auto-deploy from your Git repository
3. Monitor logs in Railway dashboard for any errors

### Step 4: Test Production
1. Open `https://frontend-khaki-zeta-75.vercel.app`
2. Try login - CORS error should be resolved
3. Check Railway logs if issues persist

## 🔍 If CORS Still Fails

### Check 1: Verify Frontend Origin
Look for CORS logs in Railway backend console - they show the exact origin being sent.

**If origin doesn't match `https://frontend-khaki-zeta-75.vercel.app`:**
- Add the actual origin to `allowedOrigins` array in `backend-/server.js`

### Check 2: Verify Backend Deployment
- Confirm your latest code is deployed in Railway
- Check the `server.js` file in Railway environment

### Check 3: Browser Cache
- Hard refresh frontend (Ctrl+Shift+R)
- Clear browser cache
- Try in incognito/private window

### Check 4: Environment Variables
- Ensure `JWT_SECRET` and `MONGO_URI` are set in Railway
- These shouldn't affect CORS but might cause other errors

## 📝 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "No 'Access-Control-Allow-Origin' header" | Backend not deployed; clear cache; verify origin |
| Preflight request fails | Ensure `OPTIONS` method is allowed |
| CORS works locally but not production | Origin mismatch; check actual frontend URL |
| Credentials not sent | Verify `credentials: true` is set on both sides |

## 🔧 Additional Frontend Optimization

If issues persist, add this to your frontend API calls:

```javascript
axios.defaults.baseURL = "https://backend-production-f743.up.railway.app";
axios.defaults.withCredentials = true;
```

Or per-request:
```javascript
const res = await axios.post(
  "https://backend-production-f743.up.railway.app/api/auth/login",
  form,
  { withCredentials: true }
);
```

## 📊 Debug Checklist

- [ ] Backend code deployed to Railway
- [ ] Railway logs show CORS debug messages
- [ ] Frontend origin matches `allowedOrigins` array
- [ ] Browser cache cleared
- [ ] Testing in incognito window
- [ ] Network tab shows CORS headers in response
- [ ] `Access-Control-Allow-Origin` header present in response
