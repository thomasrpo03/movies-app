"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

export default function DashboardHeader() {
  const { data: session } = useSession();

  return (
    <div className="flex w-full items-center justify-between px-6 md:px-9 lg:px-24 py-4">
      <p className="text-3xl font-bold text-white">
        Hello {session?.user?.name}
      </p>
      <div className="flex gap-4">
        <Link
          href={"/watchlist"}
          className="flex md:px-4 px-2 py-2 gap-2 justify-center items-center text-lg bg-white text-black rounded-md hover:bg-silver-tree-500 hover:text-white font-semibold active:scale-95 transition"
        >
          <span className="hidden md:block">Watchlist</span>
          <AiOutlineHeart size={20} />
        </Link>
        <p>SearchBar</p>
      </div>
    </div>
  );
}
