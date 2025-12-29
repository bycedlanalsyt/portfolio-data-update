import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
      <div className="about-photo">
  <img src="/photo1.jpg" alt="Cédric Boimin" />
</div>

        <div className="about-text">
          <h2>{t.about.title}</h2>

          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

      </div>
    </section>
  );
}
