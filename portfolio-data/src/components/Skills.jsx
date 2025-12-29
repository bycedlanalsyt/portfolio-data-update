/* ===== SVG ICONS INLINE (SAFE) ===== */
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../context/translations";
function renderIcon(type) {
  switch (type) {
    case "excel":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#16a34a" />
          <path
            d="M9 8l2.5 4L9 16h2l1.5-2.5L14 16h2l-2.5-4L16 8h-2l-1.5 2.5L11 8z"
            fill="white"
          />
        </svg>
      );
    case "powerbi":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="4" y="10" width="3" height="10" rx="1" fill="#facc15" />
          <rect x="10" y="6" width="3" height="14" rx="1" fill="#facc15" />
          <rect x="16" y="3" width="3" height="17" rx="1" fill="#facc15" />
        </svg>
      );
      case "sql":
        return (
          <svg viewBox="0 0 24 24">
            <ellipse cx="12" cy="5" rx="7" ry="3" fill="#3b82f6" />
            <path
              d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
              fill="#2563eb"
            />
          </svg>
        );
      
        case "python":
          return (
            <svg viewBox="0 0 256 255">
              <path
                fill="#3776AB"
                d="M126.916 0c-64.096 0-59.999 27.776-59.999 27.776l.071 28.778h60.999v8.63H42.637S0 61.408 0 128.333c0 66.926 37.184 64.557 37.184 64.557h22.19v-31.111s-1.193-37.185 36.63-37.185h60.859s34.199.553 34.199-33.227V33.227S195.65 0 126.916 0z"
              />
              <path
                fill="#FFD43B"
                d="M129.084 255c64.096 0 59.999-27.776 59.999-27.776l-.071-28.778h-60.999v-8.63h85.35s42.637 3.776 42.637-63.149c0-66.926-37.184-64.557-37.184-64.557h-22.19v31.111s1.193 37.185-36.63 37.185h-60.859s-34.199-.553-34.199 33.227v58.14S60.35 255 129.084 255z"
              />
            </svg>
          );
        

        
          case "html":
            return (
              <svg viewBox="0 0 24 24">
                <path
                  d="M4 3h16l-1.5 17L12 21l-6.5-1z"
                  fill="#f97316"
                />
                <path
                  d="M8 7h8l-.3 3H8.3z"
                  fill="#fff"
                />
              </svg>
            );
            case "css":
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M4 3h16l-1.5 17L12 21l-6.5-1z"
        fill="#3b82f6"
      />
      <path
        d="M8 7h8l-.3 3H8.3z"
        fill="#fff"
      />
    </svg>
  );
          
    case "js":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#facc15" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#000"
          >
            JS
          </text>
        </svg>
      );
      case "git":
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M12 2l10 10-10 10L2 12z"
        fill="#F05032"
      />
      <circle cx="12" cy="12" r="1.6" fill="#fff" />
      <circle cx="9" cy="9" r="1.2" fill="#fff" />
      <circle cx="15" cy="15" r="1.2" fill="#fff" />
      <path
        d="M12 12V7M12 12l4 4"
        stroke="#fff"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
    default:
      return null;
  }
}

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  console.log("LANG DANS SKILLS =", lang);
  const tools = [
    { name: "Excel", icon: "excel", highlight: true },
    { name: "Power BI", icon: "powerbi", highlight: true },
    { name: "SQL", icon: "sql", highlight: true },
    { name: "Python", icon: "python", highlight: true },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "Git / GitHub", icon: "git" },
  ];  
  
  

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">{t.skills.title}</h2>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div
          key={index}
          className={`tool-card ${tool.highlight ? "tool-highlight" : ""}`}
        >        
            <div className="tool-icon">{renderIcon(tool.icon)}</div>
            <span className="tool-name">{tool.name}</span>
          </div>
        ))}
      </div>
      <div className="soft-skills-container">
  <h3 className="skills-subtitle">{t.skills.softTitle}</h3>

  <div className="soft-skills-list">
  {t.skills.softList.map((skill, index) => (
  <span key={index} className="soft-skill-pill">
    {skill}
  </span>
))}
  </div>
</div>
    </section>
  );
}
