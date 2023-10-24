import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RegisterForm from "@/components/forms/register-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  return <RegisterForm />;
}
