"use server";

import { auth } from "@/lib/auth";

export const signUpAction = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return { error: null };
  } catch (err) {
    if (err instanceof Error) {
      return { error: "Oops! Something went wrong while registering" };
    }
    return { error: "Internal Server Error" };
  }
};
