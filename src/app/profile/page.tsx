import SignOutButton from "@/components/sign-out-button";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { ArrowLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="container mx-auto max-w-screen-lg space-y-8 px-8 py-16">
        <div className="space-y-4">
          <Button size="icon" asChild>
            <Link href="/">
              <ArrowLeft />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-destructive">Unauthorized</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-screen-lg space-y-8 px-8 py-16">
      <div className="space-y-4">
        <Button size="icon" asChild>
          <Link href="/">
            <ArrowLeft />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Profile</h1>

        <SignOutButton />

        <pre className="overflow-clip text-sm">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ProfilePage;
