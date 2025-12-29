import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills"; // ✅ casse corrigée
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ProjectEcommerce from "./pages/ProjectEcommerce";
import ProjectWarehouse from "./pages/ProjectWarehouse";
import ProjectChurn from "./pages/ProjectChurn";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

/**
 * Layout commun
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}

/**
 * Page d’accueil
 */
function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            {/* PAGE PRINCIPALE */}
            <Route path="/" element={<HomePage />} />

            {/* PAGES PROJETS */}
            <Route
              path="/projet-ecommerce"
              element={
                <Layout>
                  <ProjectEcommerce />
                </Layout>
              }
            />

            <Route
              path="/projet-warehouse"
              element={
                <Layout>
                  <ProjectWarehouse />
                </Layout>
              }
            />

            <Route
              path="/projet-churn"
              element={
                <Layout>
                  <ProjectChurn />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
