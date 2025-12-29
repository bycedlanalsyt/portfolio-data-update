import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang] ?? translations.fr;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">

        {/* HEADER */}
        <div className="contact-header">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </div>

        {/* CTA */}
        <div className="contact-cta">
          <a href="mailto:boimincedric@gmail.com" className="btn-primary">
            <FiMail /> {t.contact.ctaEmail}
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/bycedlanalsyt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        {/* INFOS */}
        <div className="contact-info-grid">
          <InfoCard
            icon={<FiMail />}
            title={t.contact.emailLabel}
            value="boimincedric@gmail.com"
          />
          <InfoCard
            icon={<FiPhone />}
            title={t.contact.phoneLabel}
            value="07 58 41 88 56"
          />
          <InfoCard
            icon={<FiMapPin />}
            title={t.contact.locationLabel}
            value={t.contact.locationValue}
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0b1220, #020617)",
        padding: "28px",
        borderRadius: "16px",
        boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: "1.6rem",
          color: "#60a5fa",
          marginBottom: "12px",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h4
        style={{
          margin: 0,
          marginBottom: "8px",
          fontWeight: 600,
        }}
      >
        {title}
      </h4>

      {/* Value */}
      <p
        style={{
          margin: 0,
          opacity: 0.85,
          fontSize: "0.95rem",
        }}
      >
        {value}
      </p>
    </div>
  );
}

