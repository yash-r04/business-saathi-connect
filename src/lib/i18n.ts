import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      search: "Search contacts, deals...",
      contacts: "Contacts",
      messages: "Messages",
    },
  },
  hi: {
    translation: {
      search: "संपर्क और डील खोजें...",
      contacts: "संपर्क",
      messages: "संदेश",
    },
  },
  kn: {
    translation: {
      search: "ಸಂಪರ್ಕಗಳು ಮತ್ತು ವ್ಯವಹಾರಗಳನ್ನು ಹುಡುಕಿ",
      contacts: "ಸಂಪರ್ಕಗಳು",
      messages: "ಸಂದೇಶಗಳು",
    },
  },
};

i18n
  .use(LanguageDetector) // 🔥 auto detect browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;