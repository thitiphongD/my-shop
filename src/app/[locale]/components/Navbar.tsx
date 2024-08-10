"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoPerson } from "react-icons/go";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import PublicNavigationLocaleSwitcher from "./PublicNavigationLocaleSwitcher";
import "../css/navbar.css";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const currentPath = usePathname();
  const t = useTranslations("Translate");

  const links = [
    { label: `${t("all_products")}`, href: "/products" },
    { label: `${t("helmet")}`, href: "/helmet" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/" || currentPath.split("/").length === 2;
    }
    return currentPath.includes(href);
  };

  return (
    <nav className="navbar-container">
      <GiFullMotorcycleHelmet />
      <ul className="flex space-x-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              isActive(link.href) ? "activePath" : "nav-menu"
            } transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <GoPerson />
        <PublicNavigationLocaleSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
