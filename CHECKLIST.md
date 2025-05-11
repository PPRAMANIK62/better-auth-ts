### SETUP

- remove files from `public/*`
- clear `globals.css`
- clear `page.tsx`
- install shadcn `bunx --bun shadcn@latest init`
- install components `bunx --bun add shadcn@latest add button label input sonner`
- show button and test `dev` server

### PART 1

- install Better Auth `bun add better-auth`
- create `.env` and set Environment Variables
- create `lib/auth.ts`
- setup `postgres` database with `neon.tech`
- install prisma `bun add prisma --save-dev`
- initialize prisma `bunx prisma init`
- create **Post** Model
- push database changes `bunx prisma db push`
- add `generated` to `.gitignore`
- adjust **scripts** in `package.json`
