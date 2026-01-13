import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";
import { useTheme } from "../context/ThemeContext";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const navbarHeight = 80;
  const offsetTop =
    element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
};

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang] ?? translations.fr;
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <button
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Cédric Boimin
        </button>

        {/* NAVIGATION */}
    <div className="navbar-links">
    <button className="nav-link" onClick={() => scrollToSection("hero")}>
  {t.nav.home}
</button>

        <button className="nav-link" onClick={() => scrollToSection("about")}>
          {t.nav.about}
        </button>
        <button className="nav-link" onClick={() => scrollToSection("skills")}>
        {t.nav.skills}
        </button>
        <button className="nav-link" onClick={() => scrollToSection("projects")}>
        {t.nav.projects}
        </button>
        <button className="nav-link" onClick={() => scrollToSection("contact")}>
        {t.nav.contact}
        </button>
        <button className="nav-link" onClick={() => scrollToSection("footer")}>
        Footer
        </button>

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
