# Authentication Setup Guide

This guide will help you set up email-based magic link authentication using NextAuth.js v4.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- Gmail account (for SMTP)

## 1. Install Dependencies

The required dependencies have already been installed:

- `next-auth@4`
- `@next-auth/prisma-adapter`
- `nodemailer`
- `@types/nodemailer`

## 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# Email Configuration (Gmail SMTP)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"
```

### Generating NEXTAUTH_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use this online generator: https://generate-secret.vercel.app/32

## 3. Gmail App Password Setup

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable if not already)
3. Go to "Security" → "App passwords"
4. Select "Mail" and "Other (Custom name)"
5. Name it "NextAuth App"
6. Copy the generated 16-character password
7. Use this password as your `EMAIL_SERVER_PASSWORD`

## 4. Database Setup

Run these commands to set up your database:

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio to view data
npm run db:studio
```

## 5. Running the Application

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 6. Testing the Authentication

1. Visit `http://localhost:3000`
2. Click "Sign up" in the navbar
3. Enter your name and email
4. Check your email for the magic link
5. Click the link to complete registration
6. You'll be redirected to the dashboard

## 7. File Structure

```
pbj-notetaking-app/
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # NextAuth API route
│   ├── auth/
│   │   ├── signin/page.tsx              # Sign in page
│   │   └── signup/page.tsx              # Sign up page
│   ├── dashboard/page.tsx               # Protected dashboard
│   └── layout.tsx                       # Root layout with SessionProvider
├── components/
│   ├── providers/
│   │   └── SessionProvider.tsx          # NextAuth session provider
│   └── ui/                              # shadcn/ui components
├── lib/
│   └── auth.ts                          # NextAuth configuration
├── types/
│   └── next-auth.d.ts                   # TypeScript extensions
├── middleware.ts                        # Route protection
└── prisma/
    └── schema.prisma                    # Database schema
```

## 8. Troubleshooting

### Magic Link Not Working

1. **Check email configuration:**

   - Verify Gmail app password is correct
   - Ensure 2FA is enabled on Gmail
   - Check `EMAIL_FROM` matches your Gmail address

2. **Check environment variables:**

   - Ensure `NEXTAUTH_URL` matches your development URL
   - Verify `NEXTAUTH_SECRET` is set and secure

3. **Check database:**

   - Ensure database is running and accessible
   - Verify schema has been pushed: `npm run db:push`

4. **Check logs:**
   - Look for errors in the terminal
   - Check browser console for client-side errors

### Common Issues

1. **"Invalid email" error:**

   - Ensure email format is valid
   - Check if user already exists

2. **"Database connection failed":**

   - Verify `DATABASE_URL` is correct
   - Ensure PostgreSQL is running

3. **"NextAuth secret not set":**

   - Generate and set `NEXTAUTH_SECRET`
   - Restart the development server

4. **Magic link redirects to error page:**
   - Check `NEXTAUTH_URL` matches your actual URL
   - Ensure the token hasn't expired (default: 24 hours)

## 9. Production Deployment

For production deployment:

1. Update `NEXTAUTH_URL` to your production domain
2. Use a production database
3. Set up proper email service (Gmail, SendGrid, etc.)
4. Generate a new `NEXTAUTH_SECRET` for production
5. Set up proper environment variables in your hosting platform

## 10. Security Considerations

- Never commit `.env.local` to version control
- Use strong, unique secrets for production
- Regularly rotate app passwords
- Monitor authentication logs
- Consider rate limiting for email sending
- Use HTTPS in production

## 11. Customization

### Email Templates

You can customize email templates by modifying the NextAuth configuration in `lib/auth.ts`:

```typescript
EmailProvider({
  server: {
    /* ... */
  },
  from: process.env.EMAIL_FROM,
  sendVerificationRequest: async ({ identifier, url, provider }) => {
    // Custom email sending logic
  },
});
```

### Session Duration

Modify session duration in `lib/auth.ts`:

```typescript
export const authOptions: NextAuthOptions = {
  // ... other config
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};
```

### Protected Routes

Add more protected routes in `middleware.ts`:

```typescript
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
```
