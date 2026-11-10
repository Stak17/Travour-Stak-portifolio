import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';

interface EducationCertProps {
  onOpenCertificate: () => void;
}

export const EducationCert: React.FC<EducationCertProps> = ({ onOpenCertificate }) => {
  return (
    <section id="education" className="py-24 bg-slate-900/50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic History
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Official educational background as outlined in the Curriculum Vitae.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Institutes & Awards</span>
              </h3>

              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-lg border border-blue-900/60">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white pt-1">{edu.institution}</div>
                    <div className="text-xs text-slate-300 font-medium">{edu.award}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Reg No: <span className="text-white font-mono">{PORTFOLIO_DATA.personal.regNo}</span>
                </div>
                <button
                  onClick={onOpenCertificate}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>View University Degree & Transcript</span>
                </button>
              </div>

            </div>
          </div>

          {/* References Card & Graduation Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
                <span>Professional References</span>
              </h3>

              <div className="space-y-4">
                {PORTFOLIO_DATA.references.map((ref, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1">
                    <div className="text-sm font-bold text-white">{ref.name}</div>
                    <div className="text-xs text-blue-400">{ref.title}</div>
                    <div className="text-xs text-slate-400 font-mono pt-1">{ref.phone}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo preview */}
            <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-4 shadow-xl">
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={PORTFOLIO_DATA.personal.photos.graduation}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-3 rounded-xl">
                  <div className="text-xs font-bold text-white">{PORTFOLIO_DATA.personal.name}</div>
                  <div className="text-[11px] text-slate-400">Uganda Martyrs University Graduate</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
