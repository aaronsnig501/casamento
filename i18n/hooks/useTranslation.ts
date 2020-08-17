import { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";
import translations from "../strings";
import { defaultLocale } from "../config";

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function t(key: string) {
    if (!translations[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale} not found`);
    }
    return translations[locale][key] || translations[defaultLocale][key] || "";
  }

  return {
    t,
    locale,
  };
}
