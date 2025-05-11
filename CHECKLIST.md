### SETUP

- [x] remove files from `public/*`
- [x] clear `globals.css`
- [x] clear `page.tsx`
- [x] install shadcn `bunx --bun shadcn@latest init`
- [x] install components `bunx --bun add shadcn@latest add button label input sonner`
- [x] show button and test `dev` server

### PART 1

- [x] install Better Auth `bun add better-auth`
- [x] create `.env.local` and set Environment Variables
- [x] create `lib/auth.ts`
- [x] setup `postgres` database with `neon.tech`
- [x] install prisma `bun add prisma --save-dev`
- [x] initialize prisma `bunx prisma init`
- [x] create **Post** Model
- [x] push database changes `bunx prisma db push`
- [x] adjust **scripts** in `package.json`

- [x] create single Prisma Client in `lib/prisma.ts`
- [x] setup prisma adapter with better-auth
- [x] generate auth tables `bunx @better-auth/cli generate --output=auth.schema.prisma`
- [x] make tweaks to `schema.prisma`
- [x] quick walkthrough the models:
  - [x] `User`
  - [x] `Session`
  - [x] `Account`
  - [x] `Verification`
- [x] push database changes `bunx prisma db push`
- [x] create Mount Handler in `app/api/auth/[...all]/route.ts`
- [x] create Client instance in `lib/auth-client.ts`

- [x] Enable Email & Password Authentication
- [x] Create Sign Up Page PT1
  - [x] Create Form `components/register-form.tsx`
  - [x] Log Form Values
- [x] Setup Sonner
- [x] Create Sign Up Page PT2
  - [x] Add Form Validation
  - [x] Destructure SignUp Function
  - [x] Showcase `onError`
- [x] OPTIONS - **minPasswordLength**
- [x] Create Sign Up Page PT3
  - [x] Sign Up _default automatically signs in the user_
- [x] Show Session on Profile Page
- [x] Show Data in Neon Dashboard
- [ ] Sign Out User
  - [ ] Destructure SignOut Function
  - [ ] Show Removed Cookies
- [ ] Create Sign In Page PT1
  - [ ] Create Form `components/login-form.tsx`
  - [ ] Log Form Values
  - [ ] Destructure SignIn Function
- [ ] Show Unauthorized on Profile Page
- [ ] Create Sign In Page PT2
  - [ ] Showcase `onError`
  - [ ] Sign In User
- [ ] FINISH PART 1
