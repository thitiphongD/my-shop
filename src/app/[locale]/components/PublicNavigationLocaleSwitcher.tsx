"use client";

import { useLocale } from "next-intl";
import { Locale } from "../../../config";
import { Link, usePathname } from "../../../navigation.public";

const LocaleLink: React.FC<{ locale: Locale }> = ({ locale }) => {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const isActive = currentLocale === locale;

  return (
    <Link
      className={isActive ? "underline" : undefined}
      href={pathname}
      locale={locale}
    >
      {locale.toUpperCase()}
    </Link>
  );
};

const PublicNavigationLocaleSwitcher = () => {
  return (
    <div className="flex gap-3 py-5">
      <LocaleLink locale="en" />
      <LocaleLink locale="th" />
    </div>
  );
};

export default PublicNavigationLocaleSwitcher;
