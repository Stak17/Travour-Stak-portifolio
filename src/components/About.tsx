import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, ShieldCheck, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface AboutProps {
  onOpenCertificate: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCertificate }) => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Professional Background & Objective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About {PORTFOLIO_DATA.personal.name}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Computer Science graduate from Uganda Martyrs University with practical IT support and software development experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Objective & Background */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Career Objective</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic bg-slate-950 p-5 rounded-2xl border border-slate-800">
                "{PORTFOLIO_DATA.personal.objective}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">University</div>
                  <div className="text-sm font-bold text-white">{PORTFOLIO_DATA.personal.university}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Degree & Class</div>
                  <div className="text-sm font-bold text-blue-400">{PORTFOLIO_DATA.personal.classOfDegree}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Primary Email</div>
                  <div className="text-xs font-bold text-white truncate">{PORTFOLIO_DATA.personal.email}</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-xs text-slate-400 font-medium">Contact Phones</div>
                  <div className="text-xs font-bold text-emerald-400">{PORTFOLIO_DATA.personal.phone} / {PORTFOLIO_DATA.personal.altPhone}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                <button
                  onClick={onOpenCertificate}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>View Official Degree & Transcript</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Core Competencies & Focus */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
                <span>Key Competences & Soft Skills</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Teamwork & Collaboration</h4>
                    <p className="text-xs text-slate-400 mt-1">Strong belief in collaboration and team building as a basis for project success.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Adaptability & Quick Learning</h4>
                    <p className="text-xs text-slate-400 mt-1">Quick learner who easily adjusts to evolving technologies and fast-paced environments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Time Management & Problem-Solving</h4>
                    <p className="text-xs text-slate-400 mt-1">Highly organized with an analytical mindset geared toward identifying technical root causes.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-900/60 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                <p className="text-xs text-blue-200">
                  Ready for IT support roles, system maintenance, and software development positions.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
