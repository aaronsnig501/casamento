import { locales } from "./config";

export type Locale = typeof locales[number];

export type Translations = {
  [key in Locale]: {
    [key: string]: string;
  };
};

export function isLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested);
}
