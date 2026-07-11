import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent overflow-hidden pt-12 pb-16">
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-10 border-t border-[#E5E7EB]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Branding */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-sm font-semibold text-[#111827] tracking-widest uppercase font-sans">
              SAATHWIK R
            </h3>
            <p className="text-[10px] text-[#6B7280] tracking-wider uppercase font-mono">
              ENGINEERING INTELLIGENT AI & SOFTWARE SOLUTIONS
            </p>
          </div>

          {/* Social Icons Shelf */}
          <div className="flex items-center gap-3">
            <a 
              href="mailto:sathwiksalian1515@gmail.com"
              className="p-2.5 rounded-full bg-white border border-[#E5E7EB] hover:border-[#A3E635] hover:text-[#A3E635] transition-colors text-[#6B7280] shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/sathwik967" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-[#E5E7EB] hover:border-[#A3E635] hover:text-[#A3E635] transition-colors text-[#6B7280] shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sathwik-salian-83b55a288/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-[#E5E7EB] hover:border-[#A3E635] hover:text-[#A3E635] transition-colors text-[#6B7280] shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white border border-[#E5E7EB] hover:border-[#A3E635] hover:text-[#A3E635] transition-colors text-[#6B7280] shadow-xs"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] hover:border-[#A3E635] hover:bg-[#F9FAFB] font-semibold text-xs rounded-full transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
            id="btn-back-to-top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Copyright info */}
        <div className="text-center text-[10px] text-[#6B7280]/50 font-mono mt-10">
          © {new Date().getFullYear()} Saathwik R. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
