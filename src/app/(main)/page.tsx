import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import TestComponent from "@/components/test-component";

export default async function MainPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Helo</h1>
      <h1>{session?.user?.name}</h1>
      <TestComponent />
    </div>
  );
}
