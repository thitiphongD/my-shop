"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImBug } from "react-icons/im";
import PublicNavigationLocaleSwitcher from "./PublicNavigationLocaleSwitcher";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/" || currentPath.split("/").length === 2;
    }
    return currentPath.includes(href);
  };

  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
      <Link href={"/"}>
        <ImBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              isActive(link.href) ? "text-red-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <PublicNavigationLocaleSwitcher />
    </nav>
  );
};

export default NavBar;
