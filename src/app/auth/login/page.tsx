import LoginForm from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="container mx-auto max-w-screen-lg space-y-8 px-8 py-16">
      <div className="space-y-4">
        <Button size="icon" asChild>
          <Link href="/">
            <ArrowLeft />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Login</h1>
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
