# Deployment Guide

## Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Deploy:**

   ```bash
   cd pbj-notetaking-app
   vercel
   ```

3. **Follow the prompts** - Vercel will automatically detect it's a Next.js app and configure everything.

4. **Your app will be live** at a URL like: `https://your-app-name.vercel.app`

## Option 2: Deploy to GitHub Pages

### Prerequisites:

- Your code must be pushed to a GitHub repository
- GitHub Pages must be enabled in your repository settings

### Steps:

1. **Push your code to GitHub:**

   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **Enable GitHub Pages:**

   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main

3. **Your app will be live** at: `https://your-username.github.io/your-repo-name`

## Option 3: Deploy to Netlify

1. **Build the app:**

   ```bash
   npm run build
   ```

2. **Drag and drop** the `out` folder to [Netlify Drop](https://app.netlify.com/drop)

3. **Your app will be live** at a Netlify URL

## Environment Variables

For production deployment, you'll need to set up these environment variables:

- `DATABASE_URL` - Your production database URL
- `NEXTAUTH_SECRET` - A secure random string
- `NEXTAUTH_URL` - Your production URL
- `GITHUB_ID` - GitHub OAuth app ID (if using GitHub auth)
- `GITHUB_SECRET` - GitHub OAuth app secret

## Database Setup

For production, you'll need a hosted database. Options include:

- [PlanetScale](https://planetscale.com/) (Free tier available)
- [Railway](https://railway.app/) (Free tier available)
- [Supabase](https://supabase.com/) (Free tier available)

## Troubleshooting

- If you get build errors, check that all dependencies are installed
- For GitHub Pages, ensure the repository is public or you have GitHub Pro
- For authentication issues, verify your environment variables are set correctly
