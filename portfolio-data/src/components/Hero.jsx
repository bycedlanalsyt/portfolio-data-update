import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="hero">
      <div className="hero-content">

        {/* Badge */}
        <div className="hero-badge">
          <span className="status-dot"></span>
          {t.hero.available}
        </div>

        {/* Intro */}
        <p className="hero-intro">{t.hero.hello}</p>

        {/* Nom (on ne touche PAS encore) */}
        <h1 className="hero-name">
          Cédric <span>Boimin</span>
        </h1>

        {/* Titre */}
        <h2 className="hero-title">
          {t.hero.title}
        </h2>

        {/* Description */}
        <p className="hero-description">
          {t.hero.description}
        </p>

        {/* CTA */}
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            {t.hero.ctaProjects} →
          </a>
          <a href="#contact" className="btn-secondary">
            {t.hero.ctaContact}
          </a>
        </div>

        {/* Réseaux */}
        <div className="hero-socials">
          <a
            href="https://www.youtube.com/@CedLanalyst"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-btn youtube"
          >
            ▶
          </a>

          <a
            href="https://www.linkedin.com/in/cedric-boimin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-btn"
          >
            in
          </a>

          <a
            href="boimincedric@gmail.com"
            aria-label="Email"
            className="social-btn"
          >
            @
          </a>
        </div>

        {/* Scroll */}
        <div className="hero-scroll">
          <span className="scroll-text">Scroll</span>

          <svg
            className="scroll-arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 4v14M6 12l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}
