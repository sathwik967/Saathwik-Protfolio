import React from "react";
import { motion } from "motion/react";
import { GraduationCap, School, MapPin, Star, Calendar } from "lucide-react";

export default function Education() {
  return (
    <motion.section 
      id="education" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-28 bg-[#FFFFFF] border-y border-[#E5E7EB] relative overflow-hidden"
    >
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#A3E635]/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/2 left-0 w-[300px] h-[300px] rounded-full bg-[#84CC16]/3 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold text-[#84CC16] uppercase tracking-widest font-sans">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#111827] animate-fade-in">
            Education
          </h2>
          <div className="h-[1px] w-12 bg-[#A3E635] mx-auto mt-4" />
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative bg-white rounded-3xl p-8 md:p-12 border border-[#E5E7EB] hover:border-[#A3E635] shadow-[0_4px_25px_rgba(17,24,39,0.015)] hover:shadow-[0_15px_35px_rgba(163,230,53,0.06)] hover:ring-1 hover:ring-[#A3E635]/30 transition-all duration-300"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A3E635] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#A3E635] group-hover:bg-[#A3E635]/5 transition-colors duration-300">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-[#111827] leading-tight group-hover:text-[#A3E635] transition-colors">
                      Sahyadri College of Engineering & Management
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-[#111827]">
                    <GraduationCap className="w-5 h-5 text-[#84CC16]" />
                    <span className="font-semibold text-base md:text-lg">B.E. Computer Science (AI & ML)</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#A3E635]" />
                      <span>Mangalore, Karnataka</span>
                    </div>
                    <div className="hidden sm:block text-[#E5E7EB]">•</div>
                    <div className="flex items-center gap-1.5 font-mono font-medium bg-[#F9FAFB] px-2.5 py-1 rounded-md border border-[#E5E7EB]">
                      <Calendar className="w-4 h-4 text-[#A3E635]" />
                      <span>2023 – 2027</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="shrink-0 flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-white border border-[#E5E7EB] p-5 rounded-2xl group-hover:border-[#A3E635]/50 transition-colors duration-300 shadow-xs">
                <div className="text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#A3E635] mb-1">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-widest">
                    CGPA
                  </div>
                  <div className="text-3xl font-display font-extrabold text-[#111827]">
                    7.79
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
