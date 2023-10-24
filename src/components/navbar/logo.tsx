"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <Image
      src="/images/logo-movies.svg"
      className="cursor-pointer w-20 h-8"
      alt="Movies Logo"
      width={80}
      height={30}
      onClick={() => router.push("/")}
    />
  );
}
