"use client"

import { signOut } from "next-auth/react";

export default function TestComponent() {
  return (
    <button onClick={() => signOut()}>Sign out</button>
  )
}