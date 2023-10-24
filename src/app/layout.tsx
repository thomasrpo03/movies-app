import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NextAuthSessionProvider } from "@/context/next-auth-session-provider";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies App",
  description: "Movies App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextAuthSessionProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
