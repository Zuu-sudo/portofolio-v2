import React, { useState, useEffect } from "react";
import { translations } from "./data/translations";
import { contactLinks } from "./data/contactLinks";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [language, setLanguage] = useState("id");
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "id" ? "en" : "id"));

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      <Navbar
        t={t}
        language={language}
        theme={theme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
      <Hero t={t} contactLinks={contactLinks} />
      <About t={t} />
      <Tools t={t} />
      <Projects t={t} />
      <Experience t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
