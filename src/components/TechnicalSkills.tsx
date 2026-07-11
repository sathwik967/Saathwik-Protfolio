import React from "react";
import { motion } from "motion/react";
import { 
  Code2, 
  Layers, 
  Brain, 
  Database, 
  Wrench,
  Sparkles
} from "lucide-react";

export default function TechnicalSkills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-[#A3E635]" />,
      skills: ["Python", "C++", "SQL", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 text-[#A3E635]" />,
      skills: ["React.js", "FastAPI", "Flask", "Express.js", "Tailwind CSS", "TensorFlow"]
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain className="w-5 h-5 text-[#A3E635]" />,
      skills: [
        "Machine Learning", 
        "Natural Language Processing", 
        "Computer Vision", 
        "YOLO", 
        "CNN", 
        "Scikit-learn", 
        "spaCy", 
        "Prompt Engineering", 
        "TF-IDF", 
        "XGBoost"
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-[#A3E635]" />,
      skills: ["MongoDB", "MySQL", "SQLite"]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-5 h-5 text-[#A3E635]" />,
      skills: [
        "Git", 
        "GitHub", 
        "VS Code", 
        "Jupyter Notebook", 
        "Streamlit", 
        "NumPy", 
        "Pandas", 
        "PDFPlumber"
      ]
    }
  ];

  return (
    <section 
      id="technical-skills" 
      className="py-28 relative overflow-hidden bg-transparent"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#A3E635]/4 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#84CC16]/4 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5E7EB] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#A3E635]" />
            <span className="text-[9px] font-semibold font-sans text-[#A3E635] uppercase tracking-widest">
              My Toolkit
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#111827] tracking-tight mb-4 animate-fade-in">
            Technical Skills
          </h2>
          <p className="text-sm md:text-base text-[#6B7280] font-normal max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my specialized skills and technical competencies across programming, artificial intelligence, and software development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`bg-white rounded-2xl p-7 border border-[#E5E7EB] hover:border-[#A3E635] shadow-[0_4px_25px_rgba(17,24,39,0.015)] hover:shadow-[0_15px_35px_rgba(163,230,53,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                category.title === "Artificial Intelligence" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#E5E7EB]">
                  <div className="p-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#111827] tracking-tight font-display">
                    {category.title}
                  </h3>
                </div>

                {/* Animated Chips / Items */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium font-sans text-[#6B7280] hover:text-[#111827] bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#A3E635]/55 transition-all duration-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] shrink-0" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative Subtle Accent Tag */}
              <div className="mt-8 flex items-center justify-end text-[9px] font-mono font-semibold text-[#6B7280] uppercase tracking-wider select-none">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#A3E635]">⚡</span> Competent
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
