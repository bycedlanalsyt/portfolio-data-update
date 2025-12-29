import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";
export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang] ?? translations.fr;
  const projects = t.projects.list;

  // Fonction pour gérer l'effet 3D premium
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Position de la souris relative à la carte (normalisée entre -1 et 1)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calcul normalisé pour une rotation fluide et naturelle
    const rotateXValue = ((y - centerY) / centerY) * -10; // -10° à +10°
    const rotateYValue = ((x - centerX) / centerX) * 10;   // -10° à +10°
    
    // Variables CSS pour Specular Highlight (position en pourcentage)
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${percentX}%`);
    card.style.setProperty("--mouse-y", `${percentY}%`);
    
    // 1️⃣ 3D Tilt Effect - Transformation principale avec perspective
    card.style.transform = `perspective(1200px) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg) translateZ(10px) scale3d(1.03, 1.03, 1.03)`;
    
    // 2️⃣ Depth / Elevation Shadow - Ombre dynamique qui s'intensifie
    const tiltIntensity = Math.abs(rotateXValue) + Math.abs(rotateYValue);
    const shadowBlur = 40 + tiltIntensity * 1.5;
    const shadowY = 20 + tiltIntensity * 0.8;
    const shadowOpacity = Math.min(0.5 + tiltIntensity * 0.015, 0.7);
    card.style.boxShadow = `
      0 ${shadowY}px ${shadowBlur}px -12px rgba(0, 0, 0, ${shadowOpacity}),
      0 0 0 1px rgba(255, 255, 255, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `;
    
    // Effet 3D sur les textes avec parallax inverse
    const content = card.querySelector('.project-content');
    const actions = card.querySelector('.project-actions');
    
  // 🔹 TEXTE — couche 3D intermédiaire
if (content) {
  const contentRotateX = -rotateXValue * 0.6;
  const contentRotateY = -rotateYValue * 0.6;

  content.style.transform = `
    translateZ(120px)
    rotateX(${contentRotateX}deg)
    rotateY(${contentRotateY}deg)
  `;
}

// 🔹 BOUTON — couche 3D la plus proche
if (actions) {
  const actionsRotateX = -rotateXValue * 0.8;
  const actionsRotateY = -rotateYValue * 0.8;

  actions.style.transform = `
    translateZ(160px)
    rotateX(${actionsRotateX}deg)
    rotateY(${actionsRotateY}deg)
  `;
}

  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    const content = card.querySelector('.project-content');
    const actions = card.querySelector('.project-actions');
    
    // Élévation initiale des textes
    if (content) {
      content.style.transform = "translateZ(60px) rotateX(0deg) rotateY(0deg)";
    }
    if (actions) {
      actions.style.transform = "translateZ(40px) rotateX(0deg) rotateY(0deg)";
    }
    
    // Ombre initiale au survol
    card.style.boxShadow = `
      0 20px 40px -12px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    
    // Réinitialisation avec easing naturel
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)";
    card.style.boxShadow = `
      0 10px 25px -5px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.05)
    `;
    
    // Réinitialisation des variables CSS pour Specular Highlight
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
    
    // Réinitialisation des textes
    const content = card.querySelector('.project-content');
    const actions = card.querySelector('.project-actions');
    
    if (content) {
      content.style.transform = "translateZ(0px) rotateX(0deg) rotateY(0deg)";
    }
    if (actions) {
      actions.style.transform = "translateZ(0px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section id="projects" style={{ padding: "90px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
  {t.projects.title}
</h2>


      <div 
        className="projects-grid"
        style={{ perspective: "1200px" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
              position: "relative",
              "--mouse-x": "50%",
              "--mouse-y": "50%",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="project-bar"
              style={{
                background: `linear-gradient(90deg, ${project.color}, #ffffff55, ${project.color})`,
              }}
            />

            <div 
              className="project-content"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <h3 style={{ transformStyle: "preserve-3d" }}>{project.title}</h3>
              <p 
                className="project-description"
                style={{ transformStyle: "preserve-3d" }}
              >
                {project.description}
              </p>

              <div 
                className="project-tags"
                style={{ transformStyle: "preserve-3d" }}
              >
                {project.tools.map((tool, i) => (
                  <span key={i} style={{ transformStyle: "preserve-3d" }}>{tool}</span>
                ))}
              </div>
            </div>

            <div 
              className="project-actions"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="project-github-btn"
>
  {t.projects.cta}
</a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 