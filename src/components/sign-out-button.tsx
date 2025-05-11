"use client";

import { signOut } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const SignOutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await signOut({
        fetchOptions: {
          onRequest: () => {
            setIsLoading(true);
          },
          onResponse: () => {
            setIsLoading(false);
          },
          onError: (ctx) => {
            setIsLoading(false);
            toast.error(ctx.error.message);
          },
          onSuccess: () => {
            setIsLoading(false);
            router.push("/auth/login");
            toast.success("Logged out successfully");
          },
        },
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("An unexpected error occurred");
      console.error(error);
    }
  };

  return (
    <Button
      onClick={handleClick}
      size="sm"
      variant="destructive"
      className="cursor-pointer"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing out...
        </>
      ) : (
        "Sign Out"
      )}
    </Button>
  );
};

export default SignOutButton;
