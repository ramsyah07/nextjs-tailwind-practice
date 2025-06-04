"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SimpleNavbar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `px-4 py-2 rounded ${
      pathname === path ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white border-b p-4 flex gap-4 shadow-sm">
      <Link href="/navigation" className={linkStyle("/navigation-demo")}>
        Home
      </Link>
      <Link href="/navigation/about" className={linkStyle("/navigation-demo/about")}>
        About
      </Link>
      <Link href="/navigation/contact" className={linkStyle("/navigation-demo/contact")}>
        Contact
      </Link>
    </nav>
  );
}
