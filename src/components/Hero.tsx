import React from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  ChevronRight
} from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = () => {
    const projectsSec = document.getElementById("featured-projects");
    if (projectsSec) {
      projectsSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-transparent"
    >
      {/* Background Decor: Soft lime green gradient & Light blur circles & Minimal abstract shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-bg opacity-[0.15]" />
        
        {/* Soft lime green and soft green glow blurred circles */}
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#A3E635]/5 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[550px] h-[550px] rounded-full bg-[#84CC16]/5 blur-[140px]" />
        <div className="absolute top-[30%] left-[35%] w-[400px] h-[400px] rounded-full bg-[#D9F99D]/10 blur-[110px]" />

        {/* Minimal abstract shapes: Elegant thin wireframe circles and rects */}
        <svg className="absolute top-[15%] right-[10%] w-64 h-64 text-[#A3E635]/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
          <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="30" />
        </svg>
        <svg className="absolute bottom-[20%] left-[10%] w-48 h-48 text-[#84CC16]/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
          <rect x="15" y="15" width="70" height="70" rx="8" strokeDasharray="4 2" />
          <rect x="25" y="25" width="50" height="50" rx="4" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Two-Column Grid: Left (55% space) & Right (45% space) on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-220px)] py-12">
          
          {/* Left Column (55% equivalent width) */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6 order-2 md:order-1">

            {/* Title & Introduction */}
            <div className="space-y-3 w-full">
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xs uppercase tracking-[0.25em] text-[#6B7280] font-mono font-semibold"
              >
                Hi, I'm
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[1.05] select-none text-[#111827]"
              >
                SAATHWIK R
              </motion.h1>

              {/* Subtitle / Headline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="pt-1"
              >
                <h2 className="text-xs sm:text-sm md:text-base lg:text-md font-sans font-bold tracking-[0.15em] text-[#A3E635] uppercase">
                  AI/ML Engineer • Full-Stack Developer • Problem Solver
                </h2>
              </motion.div>
            </div>

            {/* Short Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-[#6B7280] text-sm md:text-base leading-relaxed max-w-2xl font-normal"
            >
              I build intelligent AI/ML systems and highly polished, production-ready full-stack applications to solve complex, real-world problems.
            </motion.p>

            {/* Structured Information Block */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3.5 w-full text-left font-medium max-w-xl pt-2"
            >
              <div className="flex items-center gap-3 text-[#6B7280]">
                <div className="p-2.5 bg-white border border-[#E5E7EB] shadow-xs rounded-xl">
                  <MapPin className="w-4 h-4 text-[#84CC16] shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold font-mono text-[#6B7280]/70 uppercase tracking-wider">Location</span>
                  <span className="text-sm font-semibold text-[#111827]">Mangalore, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#6B7280]">
                <div className="p-2.5 bg-white border border-[#E5E7EB] shadow-xs rounded-xl">
                  <GraduationCap className="w-4 h-4 text-[#84CC16] shrink-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold font-mono text-[#6B7280]/70 uppercase tracking-wider">College</span>
                  <span className="text-sm font-semibold text-[#111827]">Sahyadri College of Engineering & Management</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#6B7280]">
                <div className="p-2.5 bg-white border border-[#E5E7EB] shadow-xs rounded-xl flex items-center justify-center w-[42px] h-[42px]">
                  <span className="text-[#84CC16] font-extrabold font-mono text-xs">CG</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold font-mono text-[#6B7280]/70 uppercase tracking-wider">CGPA</span>
                  <span className="text-sm font-semibold text-[#111827]">7.79</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap justify-center md:justify-start items-center gap-3 pt-3"
            >
              <button
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-[#A3E635] to-[#84CC16] hover:from-[#84CC16] hover:to-[#A3E635] text-black font-semibold text-xs sm:text-sm rounded-full shadow-[0_4px_15px_rgba(163,230,53,0.35)] hover:shadow-[0_8px_25px_rgba(163,230,53,0.5)] hover:scale-[1.03] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                id="btn-explore-work"
              >
                <span>✨ View Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black" />
              </button>

              <a
                href="https://github.com/sathwik967"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4.5 py-3 bg-white hover:bg-[#F9FAFB] text-[#111827] border border-[#E5E7EB] hover:border-[#A3E635]/40 hover:shadow-[0_4px_15px_rgba(163,230,53,0.12)] font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-xs"
              >
                <Github className="w-4 h-4 text-[#6B7280]" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sathwik-salian-83b55a288/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4.5 py-3 bg-white hover:bg-[#F9FAFB] text-[#111827] border border-[#E5E7EB] hover:border-[#A3E635]/40 hover:shadow-[0_4px_15px_rgba(163,230,53,0.12)] font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-xs"
              >
                <Linkedin className="w-4 h-4 text-[#6B7280]" />
                LinkedIn
              </a>
            </motion.div>

          </div>

          {/* Right Column (45% equivalent width) - Clean Circular Profile Photo */}
          <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -4, 0]
              }}
              transition={{ 
                scale: { duration: 0.8, delay: 0.3 },
                opacity: { duration: 0.8, delay: 0.3 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className="relative group p-4"
            >
              {/* Soft radial gradient circle behind the circle: Lime Green & Soft Green */}
              <div 
                className="absolute inset-0 rounded-full blur-[40px] pointer-events-none -z-10 animate-pulse-slow"
                style={{
                  background: "radial-gradient(circle, rgba(163, 230, 53, 0.25) 0%, rgba(217, 249, 157, 0.4) 50%, transparent 100%)"
                }}
              />

              {/* Subtle circular outlines behind the profile image similar to reference */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                <div className="w-[108%] h-[108%] rounded-full border border-[#A3E635]/20 animate-spin-slow" />
                <div className="w-[120%] h-[120%] rounded-full border border-[#84CC16]/10 border-dashed" />
              </div>
              
              {/* Perfectly circular photo container */}
              <div 
                id="profile-photo-container" 
                className="relative overflow-hidden w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border-[2px] border-[#E5E7EB] group-hover:border-[#A3E635] bg-white shadow-[0_8px_30px_rgba(163,230,53,0.08)] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_15px_35px_rgba(163,230,53,0.2)]"
              >
                {/* Inner image container (Perfect circle) */}
                <div id="profile-photo-inner" className="w-full h-full rounded-full overflow-hidden bg-white relative flex items-center justify-center">
                  <img
                    id="profile-photo-img"
                    src="/profile_photo.jpg.jpeg"
                    alt="SAATHWIK R Profile"
                    className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ filter: "brightness(1.01) contrast(1.02) saturate(1.0)" }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#6B7280]/60 pointer-events-none z-10">
        <span className="text-[9px] uppercase tracking-widest font-semibold text-[#6B7280]/50 font-sans">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-7 border border-[#E5E7EB] rounded-full flex justify-center p-0.5"
        >
          <div className="w-1 h-1.5 bg-[#A3E635] rounded-full animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
