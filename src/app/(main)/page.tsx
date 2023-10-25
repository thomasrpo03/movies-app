import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardHeader from "@/components/dashboard-header";
import SlidesBanner from "@/components/slides-banner";

export default async function MainPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen">
      <DashboardHeader />
      <SlidesBanner />
    </main>
  );
}
