import React from "react";
import { motion } from "motion/react";
import { 
  GraduationCap, 
  School, 
  MapPin, 
  Star, 
  Code2, 
  Brain, 
  Globe, 
  Database 
} from "lucide-react";

export default function About() {
  const highlightCards = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#A3E635]" />,
      label: "Education",
      value: "B.E. Computer Science (AI & ML)"
    },
    {
      icon: <School className="w-5 h-5 text-[#A3E635]" />,
      label: "College",
      value: "Sahyadri College of Engineering"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#A3E635]" />,
      label: "Location",
      value: "Mangalore, Karnataka"
    },
    {
      icon: <Star className="w-5 h-5 text-[#A3E635]" />,
      label: "CGPA",
      value: "7.79"
    }
  ];

  const skillPanels = [
    {
      icon: <Code2 className="w-5 h-5 text-[#A3E635]" />,
      category: "Languages",
      skills: "Python, C++, SQL"
    },
    {
      icon: <Brain className="w-5 h-5 text-[#A3E635]" />,
      category: "AI & ML",
      skills: "Machine Learning, NLP, Computer Vision"
    },
    {
      icon: <Globe className="w-5 h-5 text-[#A3E635]" />,
      category: "Web",
      skills: "React, FastAPI, Express.js"
    },
    {
      icon: <Database className="w-5 h-5 text-[#A3E635]" />,
      category: "Databases",
      skills: "MongoDB, MySQL, SQLite"
    }
  ];

  return (
    <section id="who-i-am" className="py-28 bg-[#FFFFFF] border-y border-[#E5E7EB] relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#A3E635]/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#84CC16]/3 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-semibold text-[#84CC16] uppercase tracking-widest font-sans">
            Profile Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#111827] animate-fade-in">
            About Me
          </h2>
          <div className="h-[1px] w-12 bg-[#A3E635] mx-auto mt-4" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Summary and Highlights */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <p className="text-[#6B7280] leading-relaxed font-normal text-base md:text-lg border-l border-[#A3E635] pl-5 py-1">
                I'm an AI & Machine Learning undergraduate passionate about building intelligent software using Machine Learning, NLP, Full-Stack Development, and modern web technologies. I enjoy solving real-world problems through scalable and user-focused applications.
              </p>
            </div>

            {/* Highlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlightCards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#A3E635] hover:shadow-[0_12px_30px_rgba(163,230,53,0.06)] transition-all h-full shadow-xs duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] flex-shrink-0 text-[#A3E635]">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-semibold text-[#6B7280]/70 uppercase tracking-wider">
                      {card.label}
                    </p>
                    <p className="text-sm font-semibold text-[#111827] leading-tight mt-1.5">
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Information Panel */}
          <div className="lg:col-span-6 space-y-4">
            {skillPanels.map((panel, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#A3E635] hover:shadow-[0_12px_30px_rgba(163,230,53,0.06)] transition-all shadow-xs duration-300"
              >
                <div className="p-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] flex-shrink-0 text-[#A3E635] shadow-xs">
                  {panel.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] font-mono font-semibold text-[#84CC16] uppercase tracking-wider mb-1">
                    {panel.category}
                  </h4>
                  <p className="text-sm font-semibold text-[#111827]">
                    {panel.skills}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
