import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const DEFAULT_LANG = "fr";
const SUPPORTED_LANGS = ["fr", "en"];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);

  const toggleLang = (newLang) => {
    if (SUPPORTED_LANGS.includes(newLang)) {
      setLang(newLang);
    } else {
      setLang(DEFAULT_LANG);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
