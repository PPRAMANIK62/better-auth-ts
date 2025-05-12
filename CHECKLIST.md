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
- [x] Sign Out User
  - [x] Destructure SignOut Function
  - [x] Show Removed Cookies
- [x] Create Sign In Page PT1
  - [x] Create Form `components/login-form.tsx`
  - [x] Log Form Values
  - [x] Destructure SignIn Function
- [x] Show Unauthorized on Profile Page
- [x] Create Sign In Page PT2
  - [x] Showcase `onError`
  - [x] Sign In User
- [x] FINISH PART 1

### PART 2

- [x] Showcase `onRequest` and `onResponse`
- [x] Showcase Full Cycle Again
- [x] Add Convenience Links for Auth Pages
- [x] OPTIONS - **autoSignIn**
  - [x] Showcase
- [x] OPTIONS - **advanced.database.generateId**
  - [x] Table IDs (change `schema.prisma` and push)
  - [x] Showcase
  - [x] Truncate Tables
- [ ] OPTIONS - **emailAndPassword.password**
  - [ ] Create User
  - [ ] Argon2 `npm install @node-rs/argon2`
  - [ ] Add to `next.config.ts`
  - [ ] Create Utilities `lib/argon2.ts`
  - [ ] Add to `lib/auth.ts`
  - [ ] Showcase
  - [ ] Truncate Tables
- [ ] Create User
- [ ] Sign Up User via SERVER ACTIONS
  - [ ] Create Action
  - [ ] Log Form Values
  - [ ] Sign Up User on Server
- [ ] Sign In User via SERVER ACTIONS PT1 **HERE HERE HERE**
  - [ ] Create Action
  - [ ] Log Form Values
  - [ ] Sign In User on Server
  - [ ] Showcase - No Cookies
  - [ ] Manually Set Cookies
  - [ ] Showcase - Cookies
- [ ] Get Additional Session Properties
- [ ] PLUGINS - **nextCookies()**
- [ ] FINISH PART 2
