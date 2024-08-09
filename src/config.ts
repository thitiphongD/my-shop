export const locales = ["en", "th"] as const;

export const defaultLocale: Locale = "en";

export type Locale = (typeof locales)[number];
