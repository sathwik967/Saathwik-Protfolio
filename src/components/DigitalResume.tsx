import React from "react";
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink, Calendar } from "lucide-react";

export default function DigitalResume() {
  return (
    <div className="w-full h-full bg-[#FAFAFA] overflow-y-auto custom-scrollbar font-sans text-gray-800 pb-16">
      <div className="max-w-[850px] mx-auto bg-white min-h-[1056px] shadow-sm sm:shadow-md border border-gray-200 rounded-xl my-6 md:my-10 overflow-hidden relative">
        
        {/* Top Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

        <div className="p-8 md:p-12">
          
          {/* HEADER */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2 uppercase">
                SAATHWIK R
              </h1>
              <p className="text-sm md:text-base font-medium text-blue-600 tracking-wide uppercase">
                AI/ML Engineer • Full-Stack Developer
              </p>
            </div>
            
            <div className="flex flex-col gap-2 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:sathwiksalian1515@gmail.com" className="hover:text-blue-600 transition-colors">
                  sathwiksalian1515@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>+91 9483567396</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>Mangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a href="https://sathwik967.github.io/Saathwik-Protfolio/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors" title="Portfolio">
                  <Globe className="w-4 h-4" /> <span className="hidden sm:inline">Portfolio</span>
                </a>
                <a href="https://www.linkedin.com/in/sathwik-salian-83b55a288/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors" title="LinkedIn">
                  <Linkedin className="w-4 h-4" /> <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a href="https://github.com/sathwik967" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors" title="GitHub">
                  <Github className="w-4 h-4" /> <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </header>

          {/* SUMMARY */}
          <section className="mb-10 bg-indigo-50/50 border border-indigo-100 rounded-xl p-5 md:p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
              AI & ML undergraduate with hands-on experience in Python, Machine Learning, NLP, React, and FastAPI. Passionate about building intelligent software solutions and continuously expanding technical expertise.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-wider uppercase">Education</h2>
              <div className="h-[1px] flex-1 bg-gray-200" />
            </div>
            
            <div className="group relative pl-4 md:pl-6 border-l-2 border-gray-100 hover:border-blue-500 transition-colors duration-300">
              <div className="absolute w-3 h-3 bg-white border-2 border-blue-500 rounded-full -left-[7px] top-1.5 shadow-sm group-hover:scale-125 transition-transform" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1.5">
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  Sahyadri College of Engineering & Management
                </h3>
                <span className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md mt-1 md:mt-0">
                  <Calendar className="w-3.5 h-3.5" /> 2023 – 2027
                </span>
              </div>
              <p className="text-gray-700 font-medium text-sm md:text-base mb-1">
                Bachelor of Engineering in Computer Science (AI & ML), Mangalore
              </p>
              <p className="text-sm font-bold text-gray-800">
                CGPA: <span className="text-blue-600">7.79</span>
              </p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-wider uppercase">Experience</h2>
              <div className="h-[1px] flex-1 bg-gray-200" />
            </div>

            <div className="group relative pl-4 md:pl-6 border-l-2 border-gray-100 hover:border-purple-500 transition-colors duration-300">
              <div className="absolute w-3 h-3 bg-white border-2 border-purple-500 rounded-full -left-[7px] top-1.5 shadow-sm group-hover:scale-125 transition-transform" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1.5">
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  FUTURE INTERNS
                </h3>
                <span className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md mt-1 md:mt-0">
                  <Calendar className="w-3.5 h-3.5" /> June 2026 – July 2026
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm md:text-base font-semibold text-gray-700">Machine Learning Intern</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="text-sm text-gray-500 font-medium">Remote</span>
              </div>
              <ul className="text-gray-600 text-sm md:text-base leading-relaxed list-disc list-outside ml-4 space-y-1">
                <li>Successfully completed a one-month Machine Learning internship at Future Interns, gaining practical experience in AI and machine learning.</li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-wider uppercase">Projects</h2>
              <div className="h-[1px] flex-1 bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Project 1 */}
              <div className="group border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-bold text-gray-900 leading-tight">AI-Driven Timetable Generator</h3>
                  <a href="https://github.com/sathwik967" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors p-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  Developed a full-stack timetable generation system that automates faculty, classroom, and course scheduling using Genetic Algorithms while ensuring conflict-free timetable generation and slot exchange.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["React.js", "Node.js", "MongoDB", "Genetic Algorithm"].map(tool => (
                    <span key={tool} className="text-[10px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 2 */}
              <div className="group border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-bold text-gray-900 leading-tight">Event Management System</h3>
                  <a href="https://github.com/sathwik967" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors p-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  Developed a full-stack event management platform for event registration, team formation, mentor allocation, and project tracking with a normalized BCNF database for efficient data management.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["MySQL", "Node.js", "Express.js", "React"].map(tool => (
                    <span key={tool} className="text-[10px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 3 */}
              <div className="group border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-bold text-gray-900 leading-tight">AI Resume Screening & Ranking</h3>
                  <a href="https://github.com/sathwik967" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors p-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  Developed an AI-powered resume screening system that analyzes resumes, extracts skills, ranks candidates using NLP, TF-IDF, and Cosine Similarity, and provides recruiter-friendly insights through an interactive dashboard.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Python", "Streamlit", "Scikit-learn", "spaCy", "NLTK", "TF-IDF"].map(tool => (
                    <span key={tool} className="text-[10px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 4 */}
              <div className="group border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-bold text-gray-900 leading-tight">Global Risk Intelligence Platform</h3>
                  <a href="https://github.com/sathwik967" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors p-1">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  Built an AI-powered platform for multi-sector risk prediction using XGBoost, FastAPI, and NetworkX with interactive dashboards, graph-based risk propagation analysis, and REST APIs.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Python", "FastAPI", "React.js", "XGBoost", "NetworkX", "SQLite"].map(tool => (
                    <span key={tool} className="text-[10px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* TWO COLUMN BOTTOM SECTION (Skills & Certifications) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* SKILLS */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-wider uppercase">Technical Skills</h2>
                <div className="h-[1px] flex-1 bg-gray-200" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["C++", "Python", "HTML", "CSS", "SQL"].map(skill => (
                      <span key={skill} className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded-full shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["React.js", "FastAPI", "Flask", "Express.js", "TensorFlow"].map(skill => (
                      <span key={skill} className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded-full shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Databases</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["MongoDB", "MySQL", "SQLite"].map(skill => (
                      <span key={skill} className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded-full shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">AI / ML</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Machine Learning", "NLP", "Scikit-learn", "Prompt Engineering"].map(skill => (
                      <span key={skill} className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded-full shadow-sm hover:border-purple-400 hover:text-purple-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Developer Tools</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Git", "GitHub", "VS Code", "Jupyter Notebook", "Streamlit", "NumPy", "Pandas"].map(skill => (
                      <span key={skill} className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded-full shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 tracking-wider uppercase">Certifications</h2>
                <div className="h-[1px] flex-1 bg-gray-200" />
              </div>

              <div className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Python for Data Science</h3>
                    <p className="text-xs font-medium text-purple-600 bg-purple-50 inline-block px-2 py-0.5 rounded">
                      Jan – Feb 2026
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      {/* Scrollbar hide global style scoped if needed, using custom-scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af; 
        }
      `}} />
    </div>
  );
}
