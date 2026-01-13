import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang] ?? translations.fr;

  // 🛡️ Fallback solide
  const footer = t.footer ?? translations.fr.footer;

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

  return (
    <footer className="footer" id="footer">
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
  <li>
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {footer.nav.home}
    </a>
  </li>

  <li>
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("about");
      }}
    >
      {footer.nav.about}
    </a>
  </li>

  <li>
    <a
      href="#skills"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("skills");
      }}
    >
      {footer.nav.skills}
    </a>
  </li>

  <li>
    <a
      href="#projects"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("projects");
      }}
    >
      {footer.nav.projects}
    </a>
  </li>

  <li>
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection("contact");
      }}
    >
      {footer.nav.contact}
    </a>
  </li>
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
