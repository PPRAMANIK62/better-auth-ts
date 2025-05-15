import { env } from "@/env.js";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export const { signIn, signUp, signOut, useSession } = authClient;
