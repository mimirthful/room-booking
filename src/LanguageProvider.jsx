import {useState} from "react"
import fi from "./locales/fi.json"
import en from "./locales/en.json"
import { LanguageContext } from "./LanguageContext";

export function LanguageProvider({ children }) {
  const [Language, setLanguage] = useState(fi);

  const languages = { fi, en };

  return (
    <LanguageContext.Provider value={{ Language, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}
