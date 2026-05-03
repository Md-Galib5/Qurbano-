"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href = "", children }) => {
  const pathname = usePathname() || "";

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded-md transition ${
        isActive
          ? "bg-green-500 text-white font-semibold"
          : "hover:bg-green-100"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;