import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./config";

export const localePrefix = "always";
// Should only be used on public routes in the `[locale]` segment
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
