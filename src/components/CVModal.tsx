import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, FileText, Download, Mail, Phone, MapPin, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Curriculum Vitae • {PORTFOLIO_DATA.personal.name}</h3>
              <p className="text-xs text-slate-400">{PORTFOLIO_DATA.personal.degree}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-8 space-y-8 bg-slate-950/40 text-slate-300">
          
          {/* Header Info */}
          <div className="space-y-3 pb-6 border-b border-slate-800 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white">{PORTFOLIO_DATA.personal.name}</h1>
            <div className="text-blue-400 font-medium text-base">{PORTFOLIO_DATA.personal.degree}</div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1 justify-center sm:justify-start">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> {PORTFOLIO_DATA.personal.location}</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {PORTFOLIO_DATA.personal.phone} | {PORTFOLIO_DATA.personal.altPhone}</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-400" /> {PORTFOLIO_DATA.personal.email}</span>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Objective</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 bg-slate-900 p-4 rounded-2xl border border-slate-800">
              {PORTFOLIO_DATA.personal.objective}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.skills.map((group, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2">
                  <div className="text-xs font-bold text-white">{group.category}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-slate-950 text-[11px] text-slate-300 border border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Professional Experience</span>
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
                  <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.role}</h3>
                      <div className="text-xs text-blue-400">{exp.organization} | {exp.location}</div>
                    </div>
                    <div className="text-xs text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.description.map((d, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Background */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>Education Background</span>
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex justify-between items-center flex-col sm:flex-row gap-2">
                  <div>
                    <div className="text-sm font-bold text-white">{edu.institution}</div>
                    <div className="text-xs text-slate-300">{edu.award}</div>
                  </div>
                  <div className="text-xs font-semibold text-blue-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>References</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.references.map((ref, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1">
                  <div className="text-sm font-bold text-white">{ref.name}</div>
                  <div className="text-xs text-blue-400">{ref.title}</div>
                  <div className="text-xs text-slate-400 font-mono pt-1">{ref.phone}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 flex items-center justify-between bg-slate-900">
          <div className="text-xs text-slate-400">
            Official Curriculum Vitae • {PORTFOLIO_DATA.personal.name}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors"
          >
            Close CV
          </button>
        </div>

      </div>
    </div>
  );
};
