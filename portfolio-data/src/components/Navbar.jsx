import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang] ?? translations.fr;
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <a href="#top" className="navbar-logo">
          Cédric Boimin
        </a>

        {/* NAVIGATION */}
        <div className="navbar-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        {/* ACTIONS */}
        <div className="navbar-actions">
          {/* LANG SWITCH */}
          <div className="navbar-lang">
            <button
              onClick={() => toggleLang("fr")}
              className={lang === "fr" ? "lang-active" : ""}
            >
              FR
            </button>
            <button
              onClick={() => toggleLang("en")}
              className={lang === "en" ? "lang-active" : ""}
            >
              EN
            </button>
          </div>

          {/* THEME SWITCH */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
