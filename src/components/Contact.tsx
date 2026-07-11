import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle,
  Clock
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Button clicked");
    setValidationError("");
    setSubmitStatus("idle");

    const { name, email, subject, message } = formData;

    // Direct JS validation in addition to HTML5 native browser validation
    if (!name.trim()) {
      setValidationError("Name is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    if (!subject.trim()) {
      setValidationError("Subject is required.");
      return;
    }

    if (message.trim().length < 10) {
      setValidationError("Message must be at least 10 characters long.");
      return;
    }

    console.log("Validation passed");
    setIsSubmitting(true);

    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      name: name.trim(),
      email: email.trim()
    };

    console.log("Calling EmailJS");
    emailjs.send(
      "service_b95pkaq",
      "template_r5mjmu8",
      templateParams,
      "qWdbLDUZM-kipuPX2"
    )
    .then((response) => {
      console.log("EmailJS success", response);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error("EmailJS error", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
    });
  };

  return (
    <section id="contact" className="py-28 bg-[#FFFFFF] border-t border-[#E5E7EB] relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#84CC16]/4 blur-[130px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#A3E635]/4 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Big display callout & Contact Metrics */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#84CC16] uppercase tracking-widest font-sans">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#111827] leading-tight">
                Get In <span className="italic">Touch</span>
              </h2>
              <div className="h-[1px] w-12 bg-[#A3E635] mt-4" />
            </div>

            <p className="text-[#6B7280] text-sm md:text-base leading-relaxed max-w-md font-normal">
              I'm currently looking for internship and full-time opportunities in Software Development, Artificial Intelligence, and Machine Learning.
              <br /><br />
              Feel free to reach out for collaborations, internships, projects, or any exciting opportunities.
            </p>

            {/* Direct Metrics List */}
            <div className="space-y-4 pt-4">
              
              {/* Email */}
              <a 
                href="mailto:sathwiksalian1515@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#A3E635] hover:shadow-[0_12px_30px_rgba(163,230,53,0.06)] transition-all duration-300 group shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#A3E635] group-hover:bg-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono font-semibold text-[#6B7280]/60 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-[#111827]">sathwiksalian1515@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+919483567396"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#A3E635] hover:shadow-[0_12px_30px_rgba(163,230,53,0.06)] transition-all duration-300 group shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#A3E635] group-hover:bg-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono font-semibold text-[#6B7280]/60 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold text-[#111827]">+91 9483567396</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#A3E635]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono font-semibold text-[#6B7280]/60 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-[#111827]">Mangalore, Karnataka</p>
                </div>
              </div>

            </div>

            {/* Social Anchor badging */}
            <div className="flex items-center gap-3 pt-4">
              <a 
                href="https://github.com/sathwik967" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#F9FAFB] flex items-center justify-center border border-[#E5E7EB] hover:border-[#A3E635] hover:text-[#A3E635] transition-all text-[#6B7280] shadow-xs"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sathwik-salian-83b55a288/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#F9FAFB] flex items-center justify-center border border-[#E5E7EB] hover:border-[#A3E635] hover:text-[#A3E635] transition-all text-[#6B7280] shadow-xs"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Modern form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 md:p-10 shadow-[0_4px_25px_rgba(17,24,39,0.015)] relative">
              
              <div className="absolute top-4 right-4 text-[9px] font-mono text-[#6B7280]/70 flex items-center gap-1.5 uppercase select-none">
                <Clock className="w-3.5 h-3.5 text-[#A3E635]" />
                Response under 4 hours
              </div>

              {submitStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#A3E635]">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-[#111827] font-display">Message Sent Successfully</p>
                    <p className="text-xs text-[#6B7280] max-w-sm mx-auto font-normal leading-relaxed">
                      Thank you for contacting me. I will get back to you as soon as possible.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 bg-gradient-to-r from-[#A3E635] to-[#84CC16] hover:from-[#84CC16] hover:to-[#A3E635] text-black font-semibold text-xs px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(163,230,53,0.25)] hover:shadow-[0_8px_20px_rgba(163,230,53,0.4)]"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Grid Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-semibold font-mono text-[#6B7280] uppercase tracking-wider">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635]/10 rounded-xl text-sm text-[#111827] placeholder-gray-400 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-semibold font-mono text-[#6B7280] uppercase tracking-wider">Email *</label>
                      <input 
                        type="type" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635]/10 rounded-xl text-sm text-[#111827] placeholder-gray-400 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] font-semibold font-mono text-[#6B7280] uppercase tracking-wider">Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Opportunity / Collaboration"
                      className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635]/10 rounded-xl text-sm text-[#111827] placeholder-gray-400 transition-all outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-semibold font-mono text-[#6B7280] uppercase tracking-wider">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      minLength={10}
                      placeholder="Discuss details of the project or opportunity..."
                      className="w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635]/10 rounded-xl text-sm text-[#111827] placeholder-gray-400 transition-all outline-none resize-none"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <p className="text-sm font-semibold text-red-600 text-center font-sans">
                      Failed to send message. Please try again.
                    </p>
                  )}
                  {validationError && (
                    <p className="text-sm font-semibold text-red-600 text-center font-sans">
                      {validationError}
                    </p>
                  )}

                  {/* Trigger Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-gradient-to-r from-[#A3E635] to-[#84CC16] hover:from-[#84CC16] hover:to-[#A3E635] disabled:from-[#A3E635]/50 disabled:to-[#84CC16]/50 disabled:opacity-40 disabled:cursor-not-allowed text-black font-semibold text-sm rounded-full transition-all duration-300 cursor-pointer hover:scale-[1.01] active:scale-[0.99] shadow-[0_4px_12px_rgba(163,230,53,0.25)] hover:shadow-[0_8px_20px_rgba(163,230,53,0.4)]"
                    id="btn-submit-message"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
