"use client";

import { usePathname } from "next/navigation";
import NavBar from "./Navbar";

export default function NavBarWrapper({ locale }: { locale: string }) {
  const pathname = usePathname();
  const authPaths = [`/${locale}/auth`, `/${locale}/auth/sign-up`];
  const shouldShowNavBar = !authPaths.includes(pathname);

  if (!shouldShowNavBar) return null;

  return <NavBar />;
}
