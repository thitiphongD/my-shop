"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImBug } from "react-icons/im";
import PublicNavigationLocaleSwitcher from "./PublicNavigationLocaleSwitcher";
import "../css/navbar.css";

const NavBar = () => {
  const currentPath = usePathname();
  const newLocale = useLocale();

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
    { label: "Sign In", href: "/auth/sign-in" },
  ];

  return (
    <nav className="navbar-container">
      <Link href={"/"}>
        <ImBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
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
