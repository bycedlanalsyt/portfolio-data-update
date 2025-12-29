# Portfolio Data - Cédric Boimin

Portfolio professionnel moderne et interactif présentant mes compétences en Data Analysis, Big Data & IA. Développé avec React et Vite, ce site met en avant mes projets data, mes compétences techniques et mes soft skills.

## 🚀 Fonctionnalités

- **Interface moderne** : Design épuré avec thème sombre et animations fluides
- **Multilingue** : Support français et anglais avec basculement dynamique
- **Thème clair/sombre** : Basculement entre les modes d'affichage
- **Navigation fluide** : Scroll smooth et navigation par ancres
- **Effets 3D interactifs** : Cartes de projets avec effets de survol 3D premium
- **Responsive** : Design adaptatif pour tous les appareils
- **Pages dédiées** : Routes individuelles pour chaque projet data

## 🛠️ Technologies utilisées

- **React 19** - Bibliothèque UI moderne
- **Vite** - Build tool ultra-rapide
- **React Router DOM** - Navigation et routing
- **React Icons** - Bibliothèque d'icônes
- **Context API** - Gestion d'état pour thème et langue
- **CSS3** - Animations et effets visuels

## 📁 Structure du projet

```
portfolio-data/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Hero.jsx         # Section d'accueil
│   │   ├── About.jsx        # Section à propos
│   │   ├── Skills.jsx       # Section compétences
│   │   ├── Projects.jsx     # Section projets
│   │   ├── Contact.jsx      # Section contact
│   │   ├── Navbar.jsx       # Barre de navigation
│   │   ├── Footer.jsx       # Pied de page
│   │   └── ScrollToTop.jsx  # Bouton retour en haut
│   ├── pages/               # Pages dédiées aux projets
│   │   ├── ProjectEcommerce.jsx
│   │   ├── ProjectWarehouse.jsx
│   │   └── ProjectChurn.jsx
│   ├── context/             # Contextes React
│   │   ├── ThemeContext.jsx
│   │   ├── LanguageContext.jsx
│   │   └── translations.jsx
│   ├── App.jsx              # Composant principal
│   └── main.jsx             # Point d'entrée
├── public/                  # Assets statiques
├── captures/                # Captures d'écran du portfolio
└── package.json
```

## 🎨 Sections du portfolio

### 1. Section Hero (Accueil)

Section d'accueil avec présentation personnelle, statut de disponibilité et call-to-action.

![Section Hero](/captures/hero-section.png)

**Caractéristiques :**
- Badge de disponibilité pour alternance
- Présentation du profil : "Data Analyst • Big Data & IA"
- Description professionnelle
- Boutons d'action vers projets et contact
- Liens vers réseaux sociaux (YouTube, LinkedIn, Email)
- Indicateur de défilement

### 2. Section À propos

Présentation personnelle avec photo de profil et description du parcours.

![Section À propos](/captures/a-propos-section.png)

**Contenu :**
- Photo de profil avec effet de lueur
- Description du parcours en Big Data & IA
- Présentation des motivations et objectifs professionnels
- Recherche active d'alternance

### 3. Section Compétences

Affichage des compétences techniques et soft skills.

![Section Compétences](/captures/competences-section.png)

**Compétences techniques :**
- **Data & Analytics** : Excel, Power BI, SQL, Python
- **Développement Web** : HTML, CSS, JavaScript
- **Outils** : Git / GitHub

**Soft Skills :**
- Rigueur analytique
- Esprit de synthèse & vulgarisation
- Autonomie & discipline
- Curiosité data & apprentissage continu
- Orientation business & décisionnelle
- Travail en équipe & collaboration

### 4. Section Projets

Grille interactive de projets data avec effets 3D au survol.

![Section Projets](/captures/projects-section.png)

**Projets présentés :**

1. **Analyse des ventes e-commerce**
   - Technologies : SQL, Power BI, Excel
   - Description : Analyse des ventes e-commerce avec KPI et dashboards pour piloter la performance

2. **Data Warehouse & Reporting**
   - Technologies : SQL Server, ETL, Modélisation
   - Description : Conception d'un data warehouse et structuration des données pour fiabiliser le reporting

3. **Analyse du churn client**
   - Technologies : Python, Pandas, Data Viz
   - Description : Analyse du comportement client pour identifier les facteurs de churn

4. **Insurance Risk & Claims Insights**
   - Technologies : Power BI, Data Modeling
   - Description : Analyse des risques et sinistres pour améliorer la gestion et la prise de décision

5. **Ligue 1 - Prédictions de résultats**
   - Technologies : Python, Machine Learning, Streamlit
   - Description : Projet de machine learning pour prédire les résultats de matchs de Ligue 1

6. **Voice Training & Recognition**
   - Technologies : Python, Jupyter, Audio Data
   - Description : Analyse et entraînement de modèles liés à la reconnaissance vocale

**Effets interactifs :**
- Rotation 3D au survol de la souris
- Effets de profondeur et d'élévation
- Parallax sur les éléments de contenu
- Transitions fluides avec easing

### 5. Section Contact

Formulaire de contact et informations de contact détaillées.

![Section Contact](/captures/Screenshot%202025-12-29%20011240.png)

**Informations de contact :**
- **Email** : boimincedric@gmail.com
- **Téléphone** : 07 58 41 88 56
- **Localisation** : Poissy / Les Yvelines, France

**Actions disponibles :**
- Bouton "Me contacter" (email)
- Liens vers LinkedIn et GitHub
- Cartes d'information avec icônes

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone <url-du-repo>
cd portfolio-data
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Build pour la production**
```bash
npm run build
```

5. **Prévisualiser le build**
```bash
npm run preview
```

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement Vite
- `npm run build` - Crée un build de production optimisé
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎯 Fonctionnalités techniques

### Gestion du thème
- Context API pour la gestion du thème clair/sombre
- Persistance des préférences utilisateur
- Basculement dynamique via le bouton dans la navbar

### Internationalisation
- Support français et anglais
- Traductions centralisées dans `translations.jsx`
- Basculement de langue en temps réel

### Navigation
- React Router pour le routing
- Navigation par ancres pour les sections
- Scroll smooth automatique
- Bouton "retour en haut" avec animation

### Animations
- Effets 3D sur les cartes de projets
- Transitions CSS fluides
- Animations au scroll
- Effets de parallax

## 📧 Contact

**Cédric Boimin**  
Data Analyst - Big Data & IA

- 📧 Email : boimincedric@gmail.com
- 📱 Téléphone : 07 58 41 88 56
- 📍 Localisation : Poissy, Les Yvelines, France
- 💼 LinkedIn : [linkedin.com/in/cedric-boimin](https://www.linkedin.com/in/cedric-boimin/)
- 🐙 GitHub : [github.com/bycedlanalsyt](https://github.com/bycedlanalsyt)
- ▶️ YouTube : [@CedLanalyst](https://www.youtube.com/@CedLanalyst)

## 📄 Licence

© 2025 Cédric Boimin - Tous droits réservés

---

**Disponible pour une alternance** en Data / BI 🚀
