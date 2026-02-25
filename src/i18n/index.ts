import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptCommon from "./resources/pt/common.json";
import enCommon from "./resources/en/common.json";
import esCommon from "./resources/es/common.json";

const i18nDebugEnabled = import.meta.env.VITE_I18N_DEBUG === "true";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt-BR",
    debug: i18nDebugEnabled,
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en", "pt", "es"],
    nonExplicitSupportedLngs: true,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: {
        common: enCommon,
      },
      pt: {
        common: ptCommon,
      },
      es: {
        common: esCommon,
      },
    },
  })
  .catch((error: unknown) => {
    console.error("i18n init failed:", error);
  });

export default i18n;