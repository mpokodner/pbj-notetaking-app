# Quick Start Guide - Authentication Setup

## 🚀 Get Started in 5 Minutes

### 1. Create Environment File

Create `.env.local` in the root directory:

```env
# Database (update with your PostgreSQL connection)
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"

# NextAuth.js (use the generated secret below)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="XNjUPT2Y76T26NdT0S32mGBLrUQV2edH8RPH4D1o890="

# Gmail SMTP (update with your Gmail credentials)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-gmail-app-password"
EMAIL_FROM="your-email@gmail.com"
```

### 2. Set Up Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification if not already enabled
3. Go to "App passwords"
4. Select "Mail" → "Other (Custom name)"
5. Name it "NextAuth App"
6. Copy the 16-character password
7. Use it as `EMAIL_SERVER_PASSWORD`

### 3. Set Up Database

```bash
# Push schema to database
npm run db:push

# (Optional) View data in Prisma Studio
npm run db:studio
```

### 4. Start the Application

```bash
npm run dev
```

### 5. Test Authentication

1. Visit http://localhost:3000
2. Click "Sign up" in the navbar
3. Enter your name and email
4. Check your email for the magic link
5. Click the link to complete registration
6. You'll be redirected to the dashboard

## 📁 What's Been Created

- ✅ NextAuth.js v4 with JWT strategy
- ✅ Email magic link authentication
- ✅ Protected `/dashboard` route
- ✅ Sign in/Sign up pages with shadcn/ui
- ✅ SessionProvider wrapper
- ✅ Middleware for route protection
- ✅ TypeScript type extensions
- ✅ Updated Prisma schema with NextAuth tables
- ✅ Responsive navbar with auth state

## 🔧 Key Features

- **Email Magic Links**: No passwords needed
- **JWT Sessions**: Stateless authentication
- **Protected Routes**: Middleware-based protection
- **TypeScript**: Full type safety
- **Responsive UI**: Works on all devices
- **Error Handling**: Proper loading states and error messages

## 🛠️ Troubleshooting

If magic links aren't working:

1. **Check Gmail setup**: Ensure app password is correct
2. **Verify environment variables**: All required vars must be set
3. **Check database**: Run `npm run db:push` to ensure schema is updated
4. **Restart dev server**: After changing environment variables

## 📚 Full Documentation

See `AUTHENTICATION_SETUP.md` for detailed setup instructions and troubleshooting.
