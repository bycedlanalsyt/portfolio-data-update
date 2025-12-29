import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang] ?? translations.fr;

  // 🛡️ Fallback solide
  const footer = t.footer ?? translations.fr.footer;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COL 1 — IDENTITÉ */}
        <div className="footer-col">
          <h3>{footer.name}</h3>
          <p className="footer-role">{footer.role}</p>
          <p className="footer-desc">{footer.description}</p>
        </div>

        {/* COL 2 — NAVIGATION */}
        <div className="footer-col">
          <h4>{footer.navigation}</h4>
          <ul>
            <li><a href="#top">{footer.nav.home}</a></li>
            <li><a href="#about">{footer.nav.about}</a></li>
            <li><a href="#skills">{footer.nav.skills}</a></li>
            <li><a href="#projects">{footer.nav.projects}</a></li>
            <li><a href="#contact">{footer.nav.contact}</a></li>
          </ul>
        </div>

        {/* COL 3 — CONTACT */}
        <div className="footer-col">
          <h4>{footer.contact}</h4>
          <p>boimincedric@gmail.com</p>
          <p>07 58 41 88 56</p>
          <p>{footer.location}</p>

          <div className="footer-links">
            <a href= "https://github.com/bycedlanalsyt" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/cedric-boimin/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {footer.copyright}
      </div>
    </footer>
  );
}
