import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/components/forms/login-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return <LoginForm />;
}
