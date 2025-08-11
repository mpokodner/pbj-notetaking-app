# Note Taking App

A modern note-taking application built with Next.js, TypeScript, and Prisma.

## Features

- User authentication and management
- Create, edit, and archive notes
- Clean and modern UI with Tailwind CSS
- PostgreSQL database with Prisma ORM

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Database Setup

1. Create a PostgreSQL database
2. Copy `.env.example` to `.env` and update the `DATABASE_URL`:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/notetaking_app?schema=public"
   ```
3. Run database migrations:
   ```bash
   npm run db:generate
   npm run db:push
   ```

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Database Commands

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and run migrations
- `npm run db:studio` - Open Prisma Studio for database management

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Inter](https://fonts.google.com/specimen/Inter), a modern font family.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Environment Variables

Make sure to set up the following environment variables in your Vercel project:

- `DATABASE_URL` - Your PostgreSQL database connection string
- `NEXTAUTH_URL` - Your production URL (e.g., https://your-app.vercel.app)
- `NEXTAUTH_SECRET` - A secure random string for NextAuth
- `EMAIL_SERVER_HOST` - SMTP server host (e.g., smtp.gmail.com)
- `EMAIL_SERVER_PORT` - SMTP server port (e.g., 587)
- `EMAIL_SERVER_USER` - Your email address
- `EMAIL_SERVER_PASSWORD` - Your email app password
- `EMAIL_FROM` - The email address that sends magic links

### Database Setup

1. Set up a PostgreSQL database (you can use Vercel Postgres, Supabase, or any other provider)
2. Update the `DATABASE_URL` environment variable in Vercel
3. The database schema will be automatically created on first deployment

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
