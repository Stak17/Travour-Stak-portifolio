import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Server, Database, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming & Software':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Database Management':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Systems & IT Support':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Server className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getSkillSvg = (skill: string) => {
    const lower = skill.toLowerCase();
    if (lower.includes('java') && !lower.includes('script')) {
      return (
        <svg className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 5-5v0a5 5 0 0 0-5-5z"></path>
          <path d="M10 13l2 2 4-4"></path>
        </svg>
      );
    }
    if (lower.includes('python')) {
      return (
        <svg className="w-4 h-4 text-yellow-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4 10h4M16 14h4"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      );
    }
    if (lower.includes('javascript') || lower.includes('js')) {
      return (
        <svg className="w-4 h-4 text-amber-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="3"></rect>
          <path d="M10 16v-4a2 2 0 0 1 2-2h2"></path>
          <path d="M6 12v4h4"></path>
        </svg>
      );
    }
    if (lower.includes('react')) {
      return (
        <svg className="w-4 h-4 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>
        </svg>
      );
    }
    if (lower.includes('typescript')) {
      return (
        <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="3"></rect>
          <path d="M7 8h6M10 8v8M14 12h4"></path>
        </svg>
      );
    }
    if (lower.includes('node')) {
      return (
        <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"></path>
        </svg>
      );
    }
    if (lower.includes('sql') || lower.includes('database')) {
      return (
        <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    }
    if (lower.includes('hardware') || lower.includes('troubleshooting') || lower.includes('maintenance')) {
      return (
        <svg className="w-4 h-4 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      );
    }
    if (lower.includes('microsoft office') || lower.includes('productivity')) {
      return (
        <svg className="w-4 h-4 text-blue-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M3 9h18M9 21V9"></path>
        </svg>
      );
    }
    if (lower.includes('version control') || lower.includes('git')) {
      return (
        <svg className="w-4 h-4 text-orange-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M18 6v9a3 3 0 0 1-3 3H6"></path>
        </svg>
      );
    }
    // Default fallback icon
    return (
      <svg className="w-4 h-4 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    );
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional competencies acquired through rigorous academic training at Uganda Martyrs University and practical project execution.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.skills.map((group, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-base font-bold text-white">{group.category}</h3>
                </div>

                <ul className="space-y-3 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-sm text-slate-300 p-2 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-colors">
                      {getSkillSvg(skill)}
                      <span className="text-xs font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-medium">
                Verified Competency
              </div>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div className="mt-12 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-900 border border-blue-900/50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Looking for a specific tech stack or tool?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              With a solid Computer Science foundation, I quickly adapt to new languages, frameworks, and tools.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-xs shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all shrink-0"
          >
            Discuss Project Needs
          </a>
        </div>

      </div>
    </section>
  );
};
