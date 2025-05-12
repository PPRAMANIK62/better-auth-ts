"use server";

import { auth } from "@/lib/auth";

export const signInAction = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { error: null };
  } catch (err) {
    if (err instanceof Error) {
      return { error: "Oops! Something went wrong while logging in" };
    }
    return { error: "Internal Server Error" };
  }
};
