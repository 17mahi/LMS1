# Lumina LMS (Ultra-Premium Demo)

Lumina LMS is a colorful, modern Learning Management System demo inspired by platforms like Udemy and Coursera. It includes:

- Landing page with hero + highlighted courses
- Course catalog and course detail view
- Login/Signup screen (front-end only demo)
- Cart with order summary
- Checkout/payment simulation screen (no real payments)

This project is a pure front-end React + Vite + Tailwind app. There is **no backend** and no real authentication or payments.

## Tech Stack

- React 18 (TypeScript)
- Vite
- React Router
- Tailwind CSS

## Local Development (optional)

If you ever choose to run it locally:

```bash
npm install
npm run dev
```

## How to Push to GitHub

You already have an empty GitHub repo at `https://github.com/MaheshMalipatil/LMS.git`.

In `c:\Users\MAHESH\Documents\LMS1` run these commands once:

```bash
git init
git remote add origin https://github.com/MaheshMalipatil/LMS.git
git add .
git commit -m "Initial Lumina LMS front-end"
git branch -M main
git push -u origin main
```

After this, your GitHub repository will contain the full Lumina LMS codebase.

## How to Deploy on Vercel

1. Go to Vercel and sign in.
2. Click **New Project** and import the `LMS` GitHub repo.
3. Vercel will auto-detect it as a Vite (React) app.
4. Use the default build settings:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.

After deploy finishes, Vercel will give you a URL like:

```text
https://lms-yourname.vercel.app
```

You can share that link and anyone can access the LMS.

