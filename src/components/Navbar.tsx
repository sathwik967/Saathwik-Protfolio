import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavLinkItem {
  name: string;
  targetId: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks: NavLinkItem[] = [
    { name: "Home", targetId: "hero" },
    { name: "About", targetId: "who-i-am" },
    { name: "Skills", targetId: "technical-skills" },
    { name: "Projects", targetId: "featured-projects" },
    { name: "Certifications", targetId: "certifications" },
    { name: "Contact", targetId: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Shadow and background opacity on scroll
      setIsScrolled(window.scrollY > 20);

      // 2. Active section tracking based on scroll position
      const scrollPosition = window.scrollY + 120; // offset of navbar height + safe padding

      // If we are at the very bottom, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("contact");
        return;
      }

      for (const link of navLinks) {
        const el = document.getElementById(link.targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 84; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className="fixed top-4 left-0 right-0 w-full z-50 flex justify-center px-4 pointer-events-none"
      id="main-navbar"
    >
      <div 
        className={`w-full max-w-5xl pointer-events-auto rounded-2xl border transition-all duration-300 flex items-center justify-between px-6 backdrop-blur-md ${
          isScrolled
            ? "bg-white/75 border-[#E5E7EB] shadow-[0_10px_35px_-5px_rgba(17,24,39,0.06)] h-[72px]"
            : "bg-white/80 border-[#E5E7EB]/65 shadow-[0_8px_30px_-5px_rgba(17,24,39,0.03)] h-[80px]"
        }`}
      >
        {/* Left Side: Modern Logo */}
        <div
          onClick={(e) => handleScrollTo(e, "hero")}
          className="flex items-center gap-2 cursor-pointer group"
          id="navbar-logo"
        >
          <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-[#111827] transition-transform duration-300 group-hover:scale-[1.02]">
            <span className="hidden sm:inline">SAATHWIK R</span>
            <span className="inline sm:hidden">SR</span>
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635] group-hover:scale-125 transition-transform duration-300 animate-pulse shrink-0 shadow-[0_0_8px_#A3E635]" />
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8" id="navbar-desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.targetId;
            return (
              <a
                key={link.targetId}
                href={`#${link.targetId}`}
                onClick={(e) => handleScrollTo(e, link.targetId)}
                className={`relative py-1.5 font-sans font-medium text-xs md:text-sm tracking-wide transition-colors duration-300 group ${
                  isActive ? "text-[#A3E635] font-semibold" : "text-[#6B7280] hover:text-[#A3E635]"
                }`}
              >
                {link.name}
                {/* Thin Lime Green underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#A3E635] rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4" id="navbar-right-actions">
          {/* Mobile Hamburguer Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#111827] hover:text-[#A3E635] hover:bg-[#F9FAFB] rounded-lg transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
            id="navbar-hamburger-btn"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-[88px] left-4 right-4 bg-white/95 border border-[#E5E7EB] rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden lg:hidden pointer-events-auto"
            id="navbar-mobile-menu"
          >
            <div className="px-5 py-4 flex flex-col space-y-2">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.targetId;
                return (
                  <motion.a
                    key={link.targetId}
                    href={`#${link.targetId}`}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    onClick={(e) => handleScrollTo(e, link.targetId)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-sans font-medium text-sm tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-[#F9FAFB] text-[#A3E635] font-semibold"
                        : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#A3E635]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-[#A3E635] transition-transform duration-200 ${
                        isActive ? "scale-100" : "scale-0"
                      }`}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
