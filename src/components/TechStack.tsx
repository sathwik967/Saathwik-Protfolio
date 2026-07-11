import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code, 
  Database, 
  Cpu, 
  Terminal, 
  Sparkles,
  Info
} from "lucide-react";
import { TechBubble } from "../types";

export default function TechStack() {
  const [selectedTech, setSelectedTech] = useState<TechBubble | null>(null);

  const technologies: TechBubble[] = [
    { name: "Python", category: "Language", color: "from-[#A3E635] to-[#84CC16]", size: "lg", description: "Dynamic object-oriented language optimized for clean, scalable AI/ML model execution." },
    { name: "React", category: "Framework", color: "from-[#A3E635] to-[#84CC16]", size: "lg", description: "Declarative UI engineering library used to craft seamless, responsive frontend portfolios." },
    { name: "FastAPI", category: "Framework", color: "from-[#84CC16] to-[#D9F99D]", size: "lg", description: "Highly performant, typed Python framework tailored for high-throughput microservice APIs." },
    { name: "TensorFlow", category: "AI/ML", color: "from-[#A3E635] to-[#84CC16]", size: "lg", description: "Comprehensive open-source infrastructure used for advanced neural networks & deep learning." },
    
    { name: "Node.js", category: "Framework", color: "from-[#A3E635] to-[#84CC16]", size: "md", description: "Server-side JavaScript runtime utilized to construct swift custom API backends." },
    { name: "MongoDB", category: "Database", color: "from-[#A3E635] to-[#84CC16]", size: "md", description: "Scalable document-oriented database perfectly suited for flexible JSON state stores." },
    { name: "Scikit Learn", category: "AI/ML", color: "from-[#84CC16] to-[#D9F99D]", size: "md", description: "Python machine learning library supporting classification, regression & clustering models." },
    { name: "NLP", category: "AI/ML", color: "from-[#A3E635] to-[#84CC16]", size: "md", description: "Natural Language Processing workflows focusing on text preprocessing, NLTK, & spaCy vectors." },
    { name: "YOLO", category: "AI/ML", color: "from-[#A3E635] to-[#84CC16]", size: "md", description: "Real-time single-pass neural object detection model with exceptional accuracy." },
    { name: "XGBoost", category: "AI/ML", color: "from-[#A3E635] to-[#84CC16]", size: "md", description: "Optimized distributed gradient boosting framework designed to solve structural tasks." },
    
    { name: "Git", category: "Tools", color: "from-[#A3E635] to-[#84CC16]", size: "sm", description: "Secure industry-standard repository branch version tracking engine." },
    { name: "CNN", category: "AI/ML", color: "from-[#A3E635] to-[#84CC16]", size: "sm", description: "Convolutional Neural Networks built for computer vision feature extraction & matrix kernels." },
    { name: "SQLite", category: "Database", color: "from-[#A3E635] to-[#84CC16]", size: "sm", description: "Zero-configuration serverless embedded relational database engine." },
    { name: "Streamlit", category: "Tools", color: "from-[#A3E635] to-[#84CC16]", size: "sm", description: "Rapid UI builder for custom ML diagnostic dashboards and prompt test harnesses." }
  ];

  // Helper to get category icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Language": return <Code className="w-4 h-4" />;
      case "Framework": return <LayersIcon className="w-4 h-4" />;
      case "Database": return <Database className="w-4 h-4" />;
      case "AI/ML": return <Cpu className="w-4 h-4" />;
      case "Tools": return <Terminal className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="tech-stack" className="py-28 bg-transparent relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#A3E635]/4 blur-[100px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-15%] w-[450px] h-[450px] rounded-full bg-[#84CC16]/4 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-semibold text-[#84CC16] uppercase tracking-widest font-sans">
            Stack Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-[#111827] animate-fade-in">
            Interactive Tech Stack
          </h2>
          <p className="text-sm text-[#6B7280] font-normal mt-1 leading-relaxed">
            Click or hover over any floating bubble to inspect specific description & capabilities
          </p>
          <div className="h-[1px] w-12 bg-[#A3E635] mx-auto mt-4" />
        </div>

        {/* Floating Bubble Layout & Detail Card Panel Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Floating Bubble Space */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center min-h-[400px]">
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl">
              {technologies.map((tech, i) => {
                // Determine size classes
                let sizeClass = "px-6 py-3.5 text-sm";
                if (tech.size === "lg") sizeClass = "px-7 py-4.5 text-base font-semibold shadow-xs";
                if (tech.size === "sm") sizeClass = "px-4 py-2.5 text-xs font-medium";
                
                const isSelected = selectedTech?.name === tech.name;
 
                return (
                  <motion.button
                    key={tech.name}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    onMouseEnter={() => setSelectedTech(tech)}
                    onClick={() => setSelectedTech(tech)}
                    className={`
                      relative rounded-xl font-sans transition-all duration-300 border cursor-pointer
                      ${isSelected 
                        ? `bg-gradient-to-r ${tech.color} text-black border-transparent shadow-[0_4px_15px_rgba(163,230,53,0.25)] scale-[1.03] ring-2 ring-[#A3E635]/10 font-semibold` 
                        : "bg-white hover:bg-[#F9FAFB] text-[#6B7280] hover:text-[#111827] border-[#E5E7EB] hover:border-[#A3E635]/40 shadow-xs"
                      }
                      ${sizeClass}
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`${isSelected ? "text-black" : "text-[#6B7280]/60 group-hover:text-[#A3E635]"}`}>
                        {getCategoryIcon(tech.category)}
                      </span>
                      <span>{tech.name}</span>
                      
                      {/* Pulse indicators on large nodes */}
                      {tech.size === "lg" && !isSelected && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#A3E635]/60 animate-ping" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
 
            {/* Quick Helper Text */}
            <p className="text-xs text-[#6B7280]/80 font-mono mt-8 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#A3E635]" />
              Dynamic density scales (lg, md, sm) indicate relative level of mastery.
            </p>
          </div>
 
          {/* Right Column: Premium Technology Inspector */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-8 relative min-h-[300px] flex flex-col justify-between shadow-[0_4px_25px_rgba(17,24,39,0.015)] border border-[#E5E7EB] hover:border-[#A3E635]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-[#A3E635]/60 font-mono text-[9px] select-none font-semibold">
                CAPABILITIES
              </div>
 
              <AnimatePresence mode="wait">
                {selectedTech ? (
                  <motion.div
                    key={selectedTech.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[9px] font-mono font-semibold uppercase tracking-wider bg-[#F9FAFB] border border-[#E5E7EB] text-[#A3E635]">
                        {getCategoryIcon(selectedTech.category)}
                        {selectedTech.category}
                      </div>
                      <h3 className="text-xl font-display font-medium text-[#111827]">
                        {selectedTech.name}
                      </h3>
                    </div>
 
                    {/* Divider */}
                    <div className="h-[1px] bg-[#E5E7EB]" />
 
                    {/* Body */}
                    <div className="space-y-4">
                      <p className="text-[#6B7280] text-sm leading-relaxed font-normal">
                        {selectedTech.description}
                      </p>
                      
                      {/* Capabilities shelf */}
                      <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 space-y-2">
                        <p className="text-[9px] font-mono font-semibold text-[#6B7280]/60 uppercase tracking-widest">Mastery Level</p>
                        <div className="flex items-center gap-3">
                          <span className={`h-2 rounded-full bg-gradient-to-r ${selectedTech.color} ${
                            selectedTech.size === "lg" ? "w-full" : selectedTech.size === "md" ? "w-2/3" : "w-1/3"
                          }`} />
                          <span className="text-xs font-mono font-bold text-[#111827] shrink-0">
                            {selectedTech.size === "lg" ? "90%" : selectedTech.size === "md" ? "75%" : "50%"}
                          </span>
                        </div>
                      </div>
                    </div>
 
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center animate-bounce">
                      <Sparkles className="w-5.5 h-5.5 text-[#A3E635]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#111827] text-sm font-display">Select a Bubble</p>
                      <p className="text-xs text-[#6B7280] max-w-[200px] mt-1 leading-relaxed font-normal">
                        Interact with any bubble in the matrix to load its details.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
 
              {/* Status Indicator Bar */}
              <div className="border-t border-[#E5E7EB] pt-4 mt-8 flex items-center justify-between text-[9px] font-mono text-[#6B7280]/60">
                <span>SAATHWIK R • PORTFOLIO</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
                  STABLE
                </span>
              </div>
            </div>
          </div>
 
        </div>
 
      </div>
    </section>
  );
}

// Inline fallback since we can't do arbitrary relative imports sometimes
function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-10 5 10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}
