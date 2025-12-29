import { Link } from "react-router-dom";

export default function ProjectEcommerce() {
    return (
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <Link to="/" style={{ textDecoration: "none" }}>← Retour aux projets</Link>
        
        <h1>📦 Analyse des ventes e-commerce</h1>
  
        <h2>🎯 Contexte</h2>
        <p>
          Ce projet vise à analyser les performances de ventes d’un site e-commerce
          afin d’aider les équipes business à piloter l’activité commerciale.
        </p>
  
        <h2>📊 Données</h2>
        <ul>
          <li>Données de ventes (commandes, produits, clients)</li>
          <li>Période d’analyse : plusieurs mois</li>
        </ul>
  
        <h2>🛠️ Outils & technologies</h2>
        <ul>
          <li>SQL pour l’extraction et la préparation des données</li>
          <li>Power BI pour la visualisation</li>
          <li>Excel pour les contrôles et analyses complémentaires</li>
        </ul>
  
        <h2>📈 Méthodologie</h2>
        <ul>
          <li>Nettoyage et structuration des données</li>
          <li>Création de KPI (CA, panier moyen, évolution des ventes)</li>
          <li>Analyse temporelle et par catégorie</li>
        </ul>
  
        <h2>💡 Résultats & insights</h2>
        <ul>
          <li>Identification des périodes de forte performance</li>
          <li>Produits les plus rentables</li>
          <li>Recommandations pour optimiser les ventes</li>
        </ul>
      </section>
    );
  }
  