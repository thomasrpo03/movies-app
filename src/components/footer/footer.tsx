"use client";

import { footerLinks, socialIcons } from "@/libs/constants";
import FooterLink from "./footer-link";
import { link } from "fs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center px-6 md:px-9 lg:px-24 py-4 border-t border-silver-tree-500">
      <div className="flex py-2 gap-6 items-center flex-1">
        {socialIcons.map((icon) => (
          <FooterLink {...icon} key={icon.url} />
        ))}
      </div>
      <div className="text-base font-semibold">
        <p>&copy; MoviesApp, LLC. All Rights Reserved.</p>
        <div className="flex md:justify-end justify-center items-center gap-3">
          {footerLinks.map((link) => (
            <Link href={link.url} key={link.label} className="hover:text-silver-tree-400 transition">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
