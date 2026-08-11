import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ShieldCheck, Calendar, Sparkles, Maximize2, X, Building, CheckCircle } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certifications = [
    {
      id: "nptel-python",
      title: "Python for Data Science",
      issuer: "NPTEL / SWAYAM",
      institution: "Indian Institute of Technology Madras (IIT Madras)",
      type: "Elite Certification",
      date: "Jan-Feb 2026",
      duration: "4 Week Course",
      score: "Consolidated Score: 69%",
      image: "/nptel_certificate.jpg",
      tags: ["Python", "Data Science", "Machine Learning", "Data Analysis"]
    }
  ];

  return (
    <motion.section 
      id="certifications" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-28 bg-[#FFFFFF] border-t border-[#E5E7EB] relative overflow-hidden"
    >
      {/* Background radial effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#A3E635]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#84CC16]/4 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5E7EB] mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
            <span className="text-[9px] font-semibold font-sans text-[#A3E635] uppercase tracking-widest">
              CREDENTIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#111827] animate-fade-in">
            Professional Certifications
          </h2>
          <div className="h-[1px] w-12 bg-[#A3E635] mx-auto mt-4" />
          <p className="text-sm md:text-base text-[#6B7280] font-normal max-w-2xl mx-auto leading-relaxed">
            Verified achievements and technical certifications.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-3xl border border-[#E5E7EB] hover:border-[#A3E635] shadow-[0_4px_25px_rgba(17,24,39,0.015)] hover:shadow-[0_20px_45px_rgba(163,230,53,0.07)] transition-all duration-300 relative overflow-hidden p-6 md:p-8 lg:p-10"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#A3E635] to-transparent opacity-80" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
                
                {/* Left Side: Certificate Image */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    onClick={() => setSelectedCert(cert.image)}
                    className="relative w-full rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#A3E635] bg-[#F9FAFB] p-3 cursor-pointer shadow-[0_4px_20px_rgba(17,24,39,0.03)] hover:shadow-[0_15px_35px_rgba(163,230,53,0.14)] transition-all duration-300 group/cert"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E5E7EB]/60">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover/cert:scale-105 transition-transform duration-500 ease-out"
                      />
                      {/* Interactive hover layer */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="flex items-center gap-2 px-3.5 py-2 bg-white text-black font-semibold text-xs rounded-full shadow-lg transform translate-y-2 group-hover/cert:translate-y-0 transition-all duration-300">
                          <Maximize2 className="w-3.5 h-3.5 text-[#84CC16]" />
                          <span>View Certificate</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                      <span className="flex items-center gap-1.5 font-bold text-[#111827]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#A3E635]" /> Verified Certification
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#84CC16] bg-white border border-[#E5E7EB] px-2 py-0.5 rounded shadow-xs">
                        Click to enlarge
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: Information */}
                <div className="md:col-span-7 flex flex-col justify-center space-y-6">
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 border-b border-[#E5E7EB] pb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
                      <Building className="w-4 h-4 text-[#A3E635]" />
                      <span className="text-xs font-bold font-display text-[#111827] tracking-wide">
                        {cert.issuer}
                      </span>
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#6B7280]">
                      <Calendar className="w-3.5 h-3.5 text-[#A3E635]" />
                      {cert.date} • {cert.duration}
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-[#111827] mb-2 group-hover:text-[#A3E635] transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#6B7280] text-sm md:text-base font-medium">
                      <Award className="w-4 h-4 text-[#A3E635]" />
                      <span className="text-[#A3E635] font-semibold">{cert.type}</span>
                      <span className="text-[#E5E7EB]">•</span>
                      <span>{cert.score}</span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-3 bg-[#F9FAFB] inline-block px-3 py-1.5 rounded-lg border border-[#E5E7EB]">
                      Issued by: <strong>{cert.institution}</strong>
                    </p>
                  </div>

                  {/* Skills/Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-semibold text-[#6B7280] bg-white border border-[#E5E7EB] rounded-lg group-hover:border-[#A3E635]/30 transition-colors shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB] bg-[#F9FAFB]">
                <div className="flex items-center gap-2 text-[#111827] font-semibold">
                  <ShieldCheck className="w-5 h-5 text-[#A3E635]" />
                  <span>Certificate Viewer</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-[#6B7280] hover:text-black hover:bg-[#E5E7EB] rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 overflow-auto flex items-center justify-center bg-[#E5E7EB]/20">
                <img 
                  src={selectedCert} 
                  alt="Certificate Full View" 
                  className="max-w-full h-auto max-h-[75vh] object-contain rounded-lg border border-[#E5E7EB] shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
