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

- [ ] create single Prisma Client in `lib/prisma.ts`
- [ ] setup prisma adapter with better-auth
- [ ] generate auth tables `bunx @better-auth/cli generate --output=auth.schema.prisma`
- [ ] make tweaks to `schema.prisma`
- [ ] quick walkthrough the models:
  - [ ] `User`
  - [ ] `Session`
  - [ ] `Account`
  - [ ] `Verification`
- [ ] push database changes `bunx prisma db push`
- [ ] create Mount Handler in `app/api/auth/[...all]/route.ts`
- [ ] adjust `eslint.config.mjs` to ignore `/src/generated/**/*`
- [ ] create Client instance in `lib/auth-client.ts`

- [ ] Enable Email & Password Authentication
- [ ] Create Sign Up Page PT1
  - [ ] Create Form `components/register-form.tsx`
  - [ ] Log Form Values
- [ ] Setup Sonner
- [ ] Create Sign Up Page PT2
  - [ ] Add Form Validation
  - [ ] Destructure SignUp Function
  - [ ] Showcase `onError`
- [ ] OPTIONS - **minPasswordLength**
- [ ] Create Sign Up Page PT3
  - [ ] Sign Up _default automatically signs in the user_
- [ ] Show Session on Profile Page
- [ ] Show Data in Neon Dashboard
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
