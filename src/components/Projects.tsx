import React from "react";
import { motion } from "motion/react";
import { Github } from "lucide-react";
import { Project } from "../types";

export default function Projects() {
  const projects: Project[] = [
    {
      id: "resume-screening",
      title: "AI Resume Screening & Candidate Ranking System",
      description: "An AI candidate ranking system that automatically parses uploaded resumes, extracts key skills, analyzes talent gaps, and ranks applicants based on custom job profiles.",
      tags: ["Python", "Streamlit", "Scikit-Learn", "spaCy", "NLTK", "TF-IDF"],
      githubUrl: "https://github.com/sathwik967/FUTURE_ML_03",
      liveUrl: "https://github.com/sathwik967/FUTURE_ML_03",
      image: "resume"
    },
    {
      id: "risk-platform",
      title: "Global Risk Interconnection Intelligence Platform",
      description: "A full-stack risk simulation platform that charts geopolitical risk cascades. Implements graph propagation networks and XGBoost algorithms over 20+ secure REST endpoints.",
      tags: ["Python", "FastAPI", "React.js", "XGBoost", "NetworkX", "SQLite"],
      githubUrl: "https://github.com/Prewal137/GlobalRiskInterConnectionEngine",
      liveUrl: "https://github.com/Prewal137/GlobalRiskInterConnectionEngine",
      image: "risk"
    },
    {
      id: "timetable-generator",
      title: "AI Driven Timetable Generator",
      description: "An automated academic scheduler that leverages genetic heuristics to dynamically allocate classrooms, assign faculty slots, prevent scheduling conflicts, and manage real-time swaps.",
      tags: ["React.js", "Node.js", "MongoDB", "Genetic Algorithm", "Express"],
      githubUrl: "https://github.com/vcodingithard/MINI_PROJECT",
      liveUrl: "https://github.com/vcodingithard/MINI_PROJECT",
      image: "timetable"
    },
    {
      id: "event-management",
      title: "Event Management System",
      description: "A secure, high-integrity platform that automates registrations, team formation, mentor matchmaking, and project submissions using optimized normalized database schemas.",
      tags: ["MySQL", "Node.js", "Express.js", "React.js", "Tailwind CSS"],
      githubUrl: "https://github.com/vcodingithard/DBMS_PROJECT",
      liveUrl: "https://github.com/vcodingithard/DBMS_PROJECT",
      image: "event"
    }
  ];

  const getTagStyles = (tag: string) => {
    return "text-[#84CC16] bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#A3E635]/50 hover:bg-[#A3E635]/5";
  };
 
  return (
    <section id="featured-projects" className="py-28 bg-[#F9FAFB] border-y border-[#E5E7EB] relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#A3E635]/4 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#84CC16]/4 blur-[120px] pointer-events-none" />
  
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-semibold text-[#84CC16] uppercase tracking-widest font-sans">
            Showcase Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#111827] animate-fade-in">
            Featured Projects
          </h2>
          <div className="h-[1px] w-12 bg-[#A3E635] mx-auto mt-4" />
        </div>
  
        {/* 2-Column Responsive Grid Constraint */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group flex flex-col bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#A3E635] shadow-[0_4px_25px_rgba(17,24,39,0.015)] hover:shadow-[0_15px_35px_rgba(163,230,53,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full"
            >
              
              {/* Card Content - flex layout with equal distribution */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Small Project Number */}
                  <div className="text-[10px] font-mono font-semibold text-[#A3E635] uppercase tracking-wider">
                    0{idx + 1}
                  </div>
  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-display font-bold text-[#111827] group-hover:text-[#A3E635] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
  
                {/* Tags and Buttons aligned beautifully */}
                <div className="space-y-5 pt-2">
                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`text-[9px] font-mono font-semibold border px-2.5 py-1 rounded-md transition-colors ${getTagStyles(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
  
                  {/* Buttons Grid */}
                  <div className="border-t border-[#E5E7EB] pt-5 flex justify-stretch">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#A3E635] to-[#84CC16] hover:from-[#84CC16] hover:to-[#A3E635] text-black font-semibold text-xs rounded-full transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(163,230,53,0.25)] hover:shadow-[0_8px_20px_rgba(163,230,53,0.4)] hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Github className="w-4 h-4 text-black" />
                      GitHub
                    </a>
                  </div>
                </div>
  
              </div>
  
            </motion.div>
          ))}
        </div>
  
      </div>
    </section>
  );
}
