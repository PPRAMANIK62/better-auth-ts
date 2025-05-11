"use client";

import { redirect } from "next/navigation";
import { Button } from "./ui/button";

const GetStartedButton = () => {
  return (
    <Button
      onClick={() => redirect("/auth/register")}
      className="cursor-pointer"
    >
      Get Started
    </Button>
  );
};

export default GetStartedButton;
