import { createContext, useState, useEffect, FC } from "react";
import { useRouter } from "next/dist/client/router";
import { Locale, isLocale } from "../types";

interface ContextProps {
  readonly locale: Locale;
  readonly setLocale: (locale, Locale) => void;
}

export const LocaleContext = createContext<ContextProps>({
  locale: "en",
  setLocale: () => null,
});

export const LocaleProvider: FC<{ lang: Locale }> = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang);
  const { query } = useRouter();

  useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      locale !== query.lang
    ) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
