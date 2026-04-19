# Portfolio Recovery Guide 🔄

## Issue
Portfolios were previously added but have now disappeared from the database.

## Possible Causes

### 1. Wrong Database Connected
MongoDB URI might be pointing to a different database or cluster.

**Check:**
```bash
# Run the database check script
cd solvix-c-main
node scripts/check-mongodb.js
```

This will show:
- Current database name
- All collections
- Number of portfolios
- Sample portfolio data (if any exists)

### 2. Database Name Missing in URI
Your current URI: `mongodb+srv://solvix:solvix1122@cluster0.ktomozy.mongodb.net/?appName=Cluster0`

**Problem**: No database name specified! This might connect to a default database.

**Fix**: Add database name to URI:
```env
# Before (wrong - no database name)
MONGODB_URI=mongodb+srv://solvix:solvix1122@cluster0.ktomozy.mongodb.net/?appName=Cluster0

# After (correct - with database name)
MONGODB_URI=mongodb+srv://solvix:solvix1122@cluster0.ktomozy.mongodb.net/solvixcore?retryWrites=true&w=majority&appName=Cluster0
```

### 3. Multiple Databases
You might have created portfolios in one database but are now connected to another.

**Solution**: Check MongoDB Atlas to see all databases and find where your data is.

---

## Recovery Steps

### Step 1: Check MongoDB Atlas
1. Go to https://cloud.mongodb.com/
2. Login with your credentials
3. Click on your cluster (Cluster0)
4. Click "Browse Collections"
5. Look for databases:
   - Check if there's a database with your portfolios
   - Note the database name
   - Check the `portfolios` collection

### Step 2: Update Connection String
If you find your data in a specific database:

```env
# Update .env.local with correct database name
MONGODB_URI=mongodb+srv://solvix:solvix1122@cluster0.ktomozy.mongodb.net/YOUR_DATABASE_NAME?retryWrites=true&w=majority&appName=Cluster0
```

Replace `YOUR_DATABASE_NAME` with the actual database name where your portfolios exist.

### Step 3: Verify Connection
```bash
# Run check script
node scripts/check-mongodb.js

# Should show:
# ✅ Connected to MongoDB successfully!
# 📊 Database Name: solvixcore (or your database name)
# 🎨 Checking Portfolio collection...
#   Total portfolios: X (should be > 0)
```

### Step 4: Restart Application
```bash
# Stop server (Ctrl+C)
# Start again
npm run dev
```

---

## If Data is Truly Lost

If portfolios are genuinely deleted and no backup exists:

### Option 1: Check MongoDB Atlas Backups
1. Go to MongoDB Atlas
2. Click on your cluster
3. Go to "Backup" tab
4. Check if there are any snapshots from before the data was lost
5. Restore from snapshot if available

### Option 2: Re-add Portfolios
You'll need to manually re-add all portfolio items:

1. Go to `/admin/login`
2. Login with credentials
3. Navigate to `/admin/portfolio`
4. Click "Add New Portfolio"
5. Add each portfolio with:
   - Title
   - Description
   - Image URL
   - Live Link
   - Category
   - Technologies
   - Featured status

---

## Prevent Future Data Loss

### 1. Correct Database Name in URI
Always specify the database name:
```
mongodb+srv://user:pass@cluster.mongodb.net/DATABASE_NAME?options
                                                    ^^^^^^^^^^^^
                                                    Important!
```

### 2. Enable MongoDB Atlas Backups
1. Go to cluster settings
2. Enable continuous backups
3. Set backup schedule

### 3. Regular Exports
Create a backup script:
```bash
# Export portfolios to JSON
mongoexport --uri="your-mongodb-uri" --collection=portfolios --out=portfolios-backup.json
```

### 4. Version Control for Data
Keep a JSON file with sample/important portfolios in your repo:
```json
// data/portfolios-backup.json
[
  {
    "title": "E-commerce Platform",
    "description": "Full-stack e-commerce solution",
    "imageUrl": "/portfolio/ecommerce.jpg",
    "liveLink": "https://example.com",
    "category": "Web Development",
    "technologies": ["Next.js", "MongoDB", "Stripe"],
    "featured": true
  }
]
```

---

## Quick Diagnostic Commands

```bash
# 1. Check if MongoDB is accessible
node scripts/check-mongodb.js

# 2. Check environment variables
cat .env.local | grep MONGODB_URI

# 3. Test connection in Node
node -e "const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected')).catch(e => console.error(e))"

# 4. Check production environment variables
# (On Vercel/Netlify dashboard)
```

---

## MongoDB Atlas Investigation

### Find Your Data:
1. **Login**: https://cloud.mongodb.com/
2. **Select Cluster**: Cluster0
3. **Browse Collections**: Click "Browse Collections" button
4. **Check Databases**: Look through all databases
5. **Find Portfolios**: Look for `portfolios` collection
6. **Check Documents**: See if your portfolio documents exist

### Common Database Names:
- `test` (default if no name specified)
- `solvixcore`
- `solvix`
- `admin`
- Your custom database name

---

## Contact Support

If you still can't find your data:

**MongoDB Atlas Support:**
- Email: support@mongodb.com
- Chat: Available in MongoDB Atlas dashboard
- Docs: https://docs.mongodb.com/

**What to ask:**
- "I can't find my data in my cluster"
- "Which database was I connected to?"
- "Can I restore from a backup?"
- "How do I see all databases in my cluster?"

---

## Summary

**Most Likely Issue**: Database name not specified in connection URI

**Quick Fix**:
1. Check MongoDB Atlas for your data
2. Find the correct database name
3. Update MONGODB_URI with database name
4. Restart application

**Run This Now**:
```bash
node scripts/check-mongodb.js
```

This will tell you exactly what's in your current database!
