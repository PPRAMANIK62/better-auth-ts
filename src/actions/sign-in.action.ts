"use server";

import { signIn } from "@/lib/auth-client";

export const signInAction = async (email: string, password: string) => {
  try {
    await signIn.email({
      email,
      password,
    });
    return { error: null };
  } catch (err) {
    if (err instanceof Error) {
      return { error: "Oops! Something went wrong while logging in" };
    }
    return { error: "Internal Server Error" };
  }
};
