import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Calendar, Sparkles } from "lucide-react";

export default function Certifications() {
  const cert = {
    title: "Python for Data Science",
    issuer: "Cognitive Class / IBM Partner",
    date: "Jan – Feb 2026"
  };

  return (
    <section id="certifications" className="py-28 bg-transparent relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#A3E635]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#84CC16]/4 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-semibold text-[#84CC16] uppercase tracking-widest font-sans">
            Credentials Shelf
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#111827] animate-fade-in">
            Professional Certifications
          </h2>
          <div className="h-[1px] w-12 bg-[#A3E635] mx-auto mt-4" />
        </div>

        {/* Visual Floating Shelf and Certificate Container */}
        <div className="relative max-w-xl mx-auto pt-4 pb-12 px-4">
          
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="group relative bg-white border border-[#E5E7EB] hover:border-[#A3E635] rounded-2xl p-8 shadow-[0_4px_25px_rgba(17,24,39,0.015)] hover:shadow-[0_15px_35px_rgba(163,230,53,0.06)] transition-all duration-300 flex flex-col justify-between min-h-[250px] z-10"
          >
            {/* Certificate Vector Frame Seal */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#A3E635] group-hover:bg-white transition-colors duration-300">
                  <Award className="w-5.5 h-5.5" />
                </div>
                
                {/* Completed Stamp */}
                <div className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-1.5 rounded-full text-[9px] font-mono font-semibold text-[#A3E635] uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Completed
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#111827] group-hover:text-[#A3E635] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#6B7280] font-mono uppercase tracking-wider">
                  {cert.issuer}
                </p>
              </div>
            </div>

            {/* Date & Issued Certificate Footer */}
            <div className="border-t border-[#E5E7EB] pt-5 mt-8 flex items-center justify-between text-xs text-[#6B7280]">
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#6B7280]/80 font-bold">
                <Calendar className="w-4 h-4 text-[#A3E635]" />
                {cert.date}
              </span>
              
              <span className="text-[9px] font-mono font-semibold text-[#84CC16] uppercase tracking-widest bg-[#F9FAFB] border border-[#E5E7EB] px-2.5 py-1 rounded-md">
                Issued Certificate
              </span>
            </div>

            {/* Subtle light sheen element */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#A3E635]/0 via-[#A3E635]/0 to-[#A3E635]/0.01 pointer-events-none" />
          </motion.div>

          {/* Minimalist PHYSICAL FLOATING SHELF Line underneath the certificate */}
          <div className="absolute bottom-2 left-0 right-0 h-[6px] bg-gradient-to-r from-transparent via-[#A3E635]/20 to-transparent rounded-full shadow-xs pointer-events-none opacity-80" />
          <div className="absolute bottom-1 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#A3E635]/10 to-transparent rounded-full blur-xs pointer-events-none" />

        </div>

        {/* Quick shelf credit indicator */}
        <p className="text-center text-[10px] text-[#6B7280]/60 font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 mt-4">
          <Sparkles className="w-3.5 h-3.5 text-[#A3E635] animate-pulse" />
          Interactive credential portfolio.
        </p>

      </div>
    </section>
  );
}
