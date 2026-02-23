import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to my portfolio!",
        }
      },
      "pt": {
        translation: {
          "welcome": "Bem-vindo ao meu portfólio!",
        }
      },
      es: {
        translation: {
          "welcome": "¡Bienvenido a mi portafolio!",
        }
      }
    },
    supportedLngs: ["en", "pt", "es"],
    nonExplicitSupportedLngs: true,
  })
  .catch((error: unknown) => {
    console.error("i18n init failed:", error);
  });

export default i18n;