import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industrial Training & Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on professional experience, industrial training achievements, and project leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white pt-2">{exp.role}</h3>
                  <div className="text-sm font-semibold text-slate-300">{exp.organization}</div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 self-start sm:self-auto">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <ul className="space-y-3">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
