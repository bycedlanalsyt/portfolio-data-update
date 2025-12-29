import { Link } from "react-router-dom";

export default function ProjectWarehouse() {
  return (
    <section
      style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: 1.7,
      }}
    >
      {/* NAVIGATION */}
      <Link to="/" style={{ textDecoration: "none", color: "#2563eb" }}>
        ← Retour aux projets
      </Link>

      {/* TITRE */}
      <h1 style={{ fontSize: "2.4rem", marginTop: "1.5rem" }}>
        📊 Data Warehouse & Reporting
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "2.5rem" }}>
        Étude de cas — Data Architecture & Business Intelligence
      </p>

      {/* CONTEXTE */}
      <h2>🎯 Contexte & problématique</h2>
      <p>
        Les données étaient dispersées dans plusieurs sources, rendant
        l’analyse complexe et peu fiable pour les équipes métiers.
        L’objectif était de centraliser et structurer ces données afin
        d’améliorer le pilotage de la performance.
      </p>

      {/* OBJECTIFS */}
      <h2>🎯 Objectifs du projet</h2>
      <ul>
        <li>Centraliser les données dans un modèle unique</li>
        <li>Garantir la cohérence et la qualité des données</li>
        <li>Faciliter le reporting et l’analyse décisionnelle</li>
      </ul>

      {/* DONNÉES */}
      <h2>📊 Données utilisées</h2>
      <ul>
        <li>Données commerciales</li>
        <li>Données clients</li>
        <li>Données produits</li>
      </ul>

      {/* MÉTHODOLOGIE */}
      <h2>🛠️ Méthodologie</h2>
      <ul>
        <li>Analyse des sources de données existantes</li>
        <li>Conception d’un schéma en étoile</li>
        <li>Mise en place des flux ETL</li>
        <li>Création des tables de faits et dimensions</li>
      </ul>

      {/* OUTILS */}
      <h2>🧰 Outils & technologies</h2>
      <ul>
        <li>SQL Server</li>
        <li>Modélisation dimensionnelle</li>
        <li>ETL & requêtes SQL</li>
      </ul>

      {/* RÉSULTATS */}
      <h2>📈 Résultats</h2>
      <ul>
        <li>Données centralisées et fiables</li>
        <li>Temps d’analyse réduit</li>
        <li>Base solide pour le reporting Power BI</li>
      </ul>

      {/* INSIGHTS */}
      <h2>💡 Bénéfices business</h2>
      <ul>
        <li>Meilleure visibilité sur la performance globale</li>
        <li>Décisions plus rapides et plus fiables</li>
        <li>Scalabilité pour de futurs besoins data</li>
      </ul>

      {/* GITHUB */}
      <h2>🧑‍💻 Code source</h2>
      <p>
        👉{" "}
        <a
          href="https://github.com/TON_GITHUB/projet-data-warehouse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le repository GitHub du projet
        </a>
      </p>
    </section>
  );
}
