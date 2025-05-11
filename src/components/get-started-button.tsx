"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const GetStartedButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/auth/register")}
      className="cursor-pointer"
    >
      Get Started
    </Button>
  );
};

export default GetStartedButton;
