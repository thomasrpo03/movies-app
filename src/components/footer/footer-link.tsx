"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface FooterLinkProps {
  icon: IconType;
  url: string;
}

export default function FooterLink({ icon: Icon, url }: FooterLinkProps) {
  return (
    <Link href={url} className="hover:text-silver-tree-400 transition" target="_blank">
      <Icon className="w-6 h-6" />
    </Link>
  );
}
