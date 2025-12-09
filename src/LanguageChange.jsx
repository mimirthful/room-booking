import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export default function LanguageChange() {
    const { setLanguage, languages } = useContext(LanguageContext);

    return (
      <div id="languageArea">
        <button onClick={() => setLanguage(languages.fi)}>Suomeksi</button>
        |
        <button onClick={() => setLanguage(languages.en)}>In English</button>
      </div>
    );
}
