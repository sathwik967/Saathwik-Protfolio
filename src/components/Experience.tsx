import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  Calendar, 
  Award, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    "Machine Learning",
    "Python",
    "Scikit-learn",
    "Data Preprocessing",
    "Model Training",
    "AI Development",
    "Remote Internship"
  ];

  return (
    <section id="experience" className="py-28 bg-[#FFFFFF] border-y border-[#E5E7EB] relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-[15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#A3E635]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#84CC16]/4 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5E7EB] mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
            <span className="text-[9px] font-semibold font-sans text-[#A3E635] uppercase tracking-widest">
              EXPERIENCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#111827] animate-fade-in">
            Professional Journey
          </h2>
          <div className="h-[1px] w-12 bg-[#A3E635] mx-auto my-4" />
          <p className="text-sm md:text-base text-[#6B7280] font-normal max-w-2xl mx-auto leading-relaxed">
            A summary of my internship experience and practical industry exposure.
          </p>
        </div>

        {/* Timeline / Card Experience Container */}
        <div className="max-w-5xl mx-auto relative pt-2">
          
          {/* Professional timeline vertical accent line */}
          <div className="hidden lg:block absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#A3E635]/60 to-transparent pointer-events-none" />

          <div className="relative lg:pl-12">
            {/* Timeline glowing dot */}
            <div className="hidden lg:flex absolute left-2.5 top-12 -translate-x-1/2 w-4 h-4 rounded-full bg-[#A3E635] items-center justify-center ring-4 ring-[#A3E635]/20 shadow-xs z-10" />

            {/* Main Experience Card with Fade-up and Hover Lift Effect */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group bg-white rounded-3xl border border-[#E5E7EB] hover:border-[#A3E635] shadow-[0_4px_25px_rgba(17,24,39,0.015)] hover:shadow-[0_20px_45px_rgba(163,230,53,0.07)] transition-all duration-300 relative overflow-hidden p-6 md:p-8 lg:p-10"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#A3E635] to-transparent opacity-80" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">
                
                {/* Left Side: Certificate Image */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    onClick={() => setIsModalOpen(true)}
                    className="relative w-full rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#A3E635] bg-[#F9FAFB] p-3 cursor-pointer shadow-[0_4px_20px_rgba(17,24,39,0.03)] hover:shadow-[0_15px_35px_rgba(163,230,53,0.14)] transition-all duration-300 group/cert"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E5E7EB]/60">
                      <img 
                        src="/future_interns_certificate.png" 
                        alt="Future Interns Machine Learning Certificate"
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
                        <Award className="w-3.5 h-3.5 text-[#A3E635]" /> Verified Completion
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#84CC16] bg-white border border-[#E5E7EB] px-2 py-0.5 rounded">
                        Click to enlarge
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: Internship Information with Modern Typography */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                  className="md:col-span-7 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    
                    {/* Company and Duration Header */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E7EB] pb-4"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
                        <Briefcase className="w-4 h-4 text-[#A3E635]" />
                        <span className="text-xs font-bold font-display text-[#111827] tracking-wide">
                          Future Interns
                        </span>
                      </div>
                      
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-xs font-mono font-semibold text-[#6B7280]">
                        <Calendar className="w-3.5 h-3.5 text-[#A3E635]" />
                        June 2026 – July 2026
                      </div>
                    </motion.div>

                    {/* Role Title */}
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-2xl md:text-3xl font-display font-extrabold text-[#111827] group-hover:text-[#84CC16] transition-colors leading-tight pt-1"
                    >
                      Machine Learning Intern
                      <span className="text-sm md:text-base font-mono font-normal text-[#6B7280] ml-2 tracking-normal inline-block">
                        (Remote)
                      </span>
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-[#6B7280] text-sm md:text-base leading-relaxed font-normal"
                    >
                      Successfully completed a one-month Machine Learning Internship at Future Interns, gaining practical experience in Artificial Intelligence and Machine Learning. Worked on real-world machine learning tasks, data preprocessing, model development, evaluation, and deployment while following industry best practices.
                    </motion.p>

                    {/* Highlights / Chips with Smooth Hover Animations */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="space-y-3 pt-2"
                    >
                      <span className="text-[10px] font-mono font-semibold text-[#84CC16] uppercase tracking-wider block">
                        Highlights & Competencies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {highlights.map((item, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.04, y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium font-sans text-[#6B7280] hover:text-[#111827] bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#A3E635] hover:bg-[#A3E635]/5 transition-all duration-200 cursor-default"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] shrink-0" />
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                  </div>

                  {/* Bottom of the Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="border-t border-[#E5E7EB] pt-5 mt-8 flex flex-wrap items-center justify-between gap-3 text-xs"
                  >
                    <div className="inline-flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-1.5 rounded-full">
                      <span className="text-xs font-mono font-extrabold text-[#111827] tracking-wide">
                        ✔ Internship Completed
                      </span>
                    </div>
                    
                    <span className="text-xs font-mono font-bold text-[#6B7280] tracking-wider flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] px-3.5 py-1.5 rounded-xl">
                      <ShieldCheck className="w-4 h-4 text-[#A3E635]" />
                      Future Interns
                    </span>
                  </motion.div>

                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Lightbox / Modal for Certificate */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] p-3 md:p-5"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors duration-200 shadow-md cursor-pointer"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
              <img 
                src="/future_interns_certificate.png" 
                alt="Future Interns Certificate of Completion"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="mt-4 px-2 py-2 flex items-center justify-between text-xs font-mono text-[#6B7280] border-t border-[#E5E7EB]">
              <span className="font-bold text-[#111827]">Future Interns — Machine Learning Internship</span>
              <span className="text-[#84CC16] font-semibold">June 2026 – July 2026</span>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
