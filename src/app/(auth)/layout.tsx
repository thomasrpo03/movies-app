import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movies App - Authentication",
    description: "Movies App - Authentication",
  };

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col md:h-[calc(100vh-9.2rem)] h-[calc(100vh-12rem)] justify-center overflow-y-scroll">{children}</div>;
}
