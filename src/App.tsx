import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import FuturisticBackground from "./components/FuturisticBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
  }, []);

  // Apply theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // If loading show Loader only
  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return loading ? (
  <Loader onFinish={() => setLoading(false)} />
) : (
  <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
    <div className="bg-white/50 dark:bg-gray-900/95 text-gray-900 dark:text-white">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Toaster position="top-right" />
      <CustomCursor />
      <FuturisticBackground />

      <div className="pt-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  </div>
);

}

export default App;
