"use server";

import { signUp } from "@/lib/auth-client";

export const signUpAction = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    await signUp.email({
      name,
      email,
      password,
    });
    return { error: null };
  } catch (err) {
    if (err instanceof Error) {
      return { error: "Oops! Something went wrong while registering" };
    }
    return { error: "Internal Server Error" };
  }
};
