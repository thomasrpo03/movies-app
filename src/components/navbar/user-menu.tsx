"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./menu-item";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div className="relative dropdown" ref={dropdownRef}>
      <button onClick={toggleOpen}>
        <AiOutlineMenu size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 md:w-28 w-24 border rounded-md border-white/40 bg-black">
          {session?.user ? (
            <>
              <MenuItem label="Profile" onClick={closeMenu} />
              <MenuItem label="Log out" onClick={() => signOut()} />
            </>
          ) : (
            <>
              <MenuItem label="Log in" onClick={() => router.push("/login")} />
              <MenuItem
                label="Register"
                onClick={() => router.push("/register")}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
