import React from "react";
import { motion } from "motion/react";

export default function TechBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden bg-[#F9FAFB]">
      {/* 1. Base Layer: Premium off-white / white luxury gradient transition */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-[#F9FAFB] via-[#F9FAFB] to-[#FFFFFF]"
        animate={{
          background: [
            "linear-gradient(45deg, #F9FAFB 0%, #FFFFFF 50%, #F9FAFB 100%)",
            "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #FFFFFF 100%)",
            "linear-gradient(225deg, #F9FAFB 0%, #FFFFFF 50%, #F9FAFB 100%)",
            "linear-gradient(315deg, #FFFFFF 0%, #F9FAFB 50%, #FFFFFF 100%)",
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* 2. Very faint diagonal lines across the background */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #A3E635 0px, #A3E635 1px, transparent 1px, transparent 16px)`
        }}
      />

      {/* 3. Subtle lime green corner radial glows (blurry, opacity under 8%) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#A3E635]/6 via-[#D9F99D]/4 to-transparent blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#84CC16]/5 via-[#D9F99D]/4 to-transparent blur-[160px]" />
      <div className="absolute top-[45%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-bl from-[#D9F99D]/6 via-[#A3E635]/3 to-transparent blur-[150px]" />

      {/* 4. Faint abstract circular lines and line graphics similar to reference */}
      <motion.div 
        className="absolute top-[10%] right-[10%] text-[#A3E635]/8 pointer-events-none"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1.5, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="320" height="320" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
          <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="35" />
          <line x1="0" y1="50" x2="100" y2="50" strokeDasharray="1 3" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-[15%] left-[8%] text-[#84CC16]/8 pointer-events-none"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -2, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="260" height="260" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="25" strokeDasharray="3 1" />
          <line x1="50" y1="0" x2="50" y2="100" strokeDasharray="1 3" />
        </svg>
      </motion.div>
    </div>
  );
}
