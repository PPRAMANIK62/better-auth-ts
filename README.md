# Better Auth TypeScript

A modern authentication system built with Next.js, Prisma, and the Better Auth library. This project demonstrates a complete authentication flow with email/password login, registration, and protected routes.

## 🚧 Project Status

This project is currently in the building stage. Core authentication features are implemented, but additional features and improvements are planned.

## 🔑 Features

- Email and password authentication
- User registration with validation
- Protected routes with middleware
- Session management
- Modern UI with Shadcn components
- Form validation with Zod
- PostgreSQL database with Prisma ORM

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org) - React framework with App Router
- [React 19](https://react.dev) - UI library
- [Better Auth](https://github.com/better-auth/better-auth) - Authentication library
- [Prisma](https://prisma.io) - Database ORM
- [PostgreSQL](https://postgresql.org) - Database
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com) - UI component library
- [React Hook Form](https://react-hook-form.com) - Form management
- [Zod](https://zod.dev) - Schema validation
- [TypeScript](https://typescriptlang.org) - Type safety

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) - JavaScript runtime and package manager
- PostgreSQL database (or use a service like [Neon](https://neon.tech))

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
DATABASE_URL="postgresql://..."
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000/api/auth"
NEXT_PUBLIC_API_URL="http://localhost:3000/api/auth"
```

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/better-auth-ts.git
cd better-auth-ts

# Install dependencies
bun install

# Push database schema
bunx prisma db push

# Start development server
bun dev
```

## 📝 Development Commands

```bash
# Start development server
bun dev

# Build for production
bun build

# Start production server
bun start

# Run type checking
bun typecheck

# Run linting
bun lint

# Format code
bun format:write

# Prisma commands
bun db:push     # Push schema changes to database
bun db:generate # Generate Prisma client
bun db:studio   # Open Prisma Studio
```

## 📂 Project Structure

```
better-auth-ts/
├── src/
│   ├── actions/       # Server actions
│   ├── app/           # Next.js App Router
│   ├── components/    # React components
│   ├── lib/           # Utility functions and configurations
│   └── styles/        # Global styles
├── prisma/            # Prisma schema and migrations
└── public/            # Static assets
```

## 🔒 Authentication Flow

1. User registers with email, password, and name
2. User logs in with email and password
3. Session is created and stored in cookies
4. Protected routes check for valid session
5. User can access protected content when authenticated
