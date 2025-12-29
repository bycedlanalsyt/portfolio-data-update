import { Link } from "react-router-dom";

export default function ProjectChurn() {
  return (
    <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <Link to="/" style={{ textDecoration: "none" }}>← Retour aux projets</Link>

      <h1>📉 Analyse du churn client</h1>

      <h2>🎯 Objectif</h2>
      <p>
        Identifier les facteurs expliquant la perte de clients afin de
        proposer des actions de rétention.
      </p>

      <h2>🛠️ Outils</h2>
      <ul>
        <li>Python (pandas, numpy)</li>
        <li>Analyse exploratoire</li>
        <li>Data visualisation</li>
      </ul>

      <h2>💡 Insights</h2>
      <ul>
        <li>Clients à risque identifiés</li>
        <li>Variables clés du churn</li>
        <li>Recommandations business</li>
      </ul>
    </section>
  );
}
