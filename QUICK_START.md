# 🚀 Quick Start Guide - How to Run

## Step-by-Step Instructions

### 1. Install Dependencies (First Time Only)

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (React, Framer Motion, Three.js, etc.)

**Note:** Make sure you have Node.js installed. If not, download it from [nodejs.org](https://nodejs.org/)

### 2. Start the Development Server

Once dependencies are installed, run:

```bash
npm run dev
```

### 3. Open in Browser

After running `npm run dev`, you should see something like:

```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

The website will automatically open at **http://localhost:3000/**

If it doesn't open automatically, manually navigate to that URL in your browser.

### 4. Stop the Server

To stop the development server, press `Ctrl + C` in the terminal.

---

## 🛠️ Other Useful Commands

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally.

---

## ⚠️ Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Make sure Node.js is added to your system PATH

### "Cannot find module" errors
- Delete `node_modules` folder (if it exists)
- Run `npm install` again

### Port 3000 already in use
- The server will automatically try a different port
- Or close the other application using port 3000

### Dependencies installation fails
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

---

## 📝 What You'll See

Once running, you'll see:
- ✅ Hero section with 3D animations
- ✅ Particle system in the background
- ✅ Smooth page transitions
- ✅ Navigation bar at the top
- ✅ All 8 sections accessible via navigation

---

**Happy coding! 🎉**

