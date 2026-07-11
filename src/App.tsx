import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechBackground from "./components/TechBackground";

export default function App() {
  // Let's configure custom title and tracking if desired
  useEffect(() => {
    document.title = "Saathwik R | AI, ML & Software Engineer Portfolio";
  }, []);

  return (
    <div className="relative min-h-screen text-[#111827] antialiased">
      {/* Premium Corporate Technology Background */}
      <TechBackground />
      
      {/* Modern Premium Navbar */}
      <Navbar />

      {/* Master Content Stream */}
      <main className="w-full">
        {/* Section 1: Fullscreen Hero with abstract AI illustration & blurs */}
        <Hero />

        {/* Section 2: WHO I AM (Scannable profile cards and timeline) */}
        <About />

        {/* Section 3: TECHNICAL SKILLS (Animated glassmorphic category cards) */}
        <TechnicalSkills />

        {/* Section 4: FEATURED PROJECTS (Apple-showcase 2-column grid of browser mockups) */}
        <Projects />

        {/* Section 5: CERTIFICATIONS (Premium certificates sitting on a visual floating shelf) */}
        <Certifications />

        {/* Section 6: CONTACT (Split-screen info panel and floating secure form) */}
        <Contact />
      </main>

      {/* Footer & Waves */}
      <Footer />
    </div>
  );
}
