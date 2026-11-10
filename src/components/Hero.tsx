import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Download, Github, Linkedin, Instagram, Mail, MessageSquare, Award, Sparkles, CheckCircle2, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
  onOpenCertificate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onOpenCertificate }) => {
  const [activePhoto, setActivePhoto] = useState<'suit' | 'graduation'>('suit');

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BSc Computer Science Graduate • Uganda Martyrs University</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">{PORTFOLIO_DATA.personal.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto lg:mx-0">
                {PORTFOLIO_DATA.personal.title}. Building reliable software solutions, academic systems, and modern web applications.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Graduate of Uganda Martyrs University ({PORTFOLIO_DATA.personal.classOfDegree}). Specializing in full-stack development, database architecture, and professional IT services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-sm shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-blue-600/50 active:scale-95 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium text-sm hover:bg-slate-800 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenCV}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium text-sm hover:bg-slate-800 hover:text-white transition-all"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-white">2nd Upper</div>
                <div className="text-xs text-slate-400">Class of Degree</div>
              </div>
              <div className="text-center lg:text-left border-x border-slate-800 px-4">
                <div className="text-xl font-bold text-white">12+</div>
                <div className="text-xs text-slate-400">GitHub Repos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400">Verified Credentials</div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub Profile (@Stak17)"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                title="Instagram (@ruovartstak)"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors flex items-center justify-center"
                title="TikTok (@tstak27)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.6a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsapp}?text=Hello%20Kateregga,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss...`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 hover:bg-emerald-900/60 transition-colors flex items-center gap-2 px-3 text-xs font-medium"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Image Card & Photo Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 rounded-3xl blur-2xl transform rotate-3 scale-105" />
              
              <div className="relative bg-slate-900 border border-slate-800/80 rounded-3xl p-4 shadow-2xl backdrop-blur-sm">
                
                {/* Photo frame */}
                <div className="relative h-[420px] rounded-2xl overflow-hidden bg-slate-950 group">
                  <img
                    src={activePhoto === 'suit' ? PORTFOLIO_DATA.personal.photos.suit : PORTFOLIO_DATA.personal.photos.graduation}
                    alt={PORTFOLIO_DATA.personal.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Badge on image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Uganda Martyrs University</div>
                        <div className="text-[11px] text-slate-400">BSc Computer Science (2nd Class Upper)</div>
                      </div>
                    </div>
                    <button
                      onClick={onOpenCertificate}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors shadow-md"
                    >
                      View Degree
                    </button>
                  </div>
                </div>

                {/* Photo toggle buttons */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setActivePhoto('suit')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      activePhoto === 'suit'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Professional Portrait
                  </button>
                  <button
                    onClick={() => setActivePhoto('graduation')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      activePhoto === 'graduation'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Graduation Photo
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
