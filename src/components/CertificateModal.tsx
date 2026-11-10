import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Award, FileText, CheckCircle2, Download } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'certificate' | 'transcript'>('certificate');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Uganda Martyrs University Credentials</h3>
              <p className="text-xs text-slate-400">{PORTFOLIO_DATA.personal.name} • Reg No: {PORTFOLIO_DATA.personal.regNo}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="px-6 pt-4 flex gap-3 border-b border-slate-800 pb-4 bg-slate-900">
          <button
            onClick={() => setActiveTab('certificate')}
            className={`px-5 py-2.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'certificate'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Degree Certificate
          </button>
          <button
            onClick={() => setActiveTab('transcript')}
            className={`px-5 py-2.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'transcript'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Academic Transcript
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 flex-1">
          {activeTab === 'certificate' ? (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-white">{PORTFOLIO_DATA.personal.degree}</h4>
                  <div className="text-sm font-semibold text-blue-400">{PORTFOLIO_DATA.personal.classOfDegree}</div>
                  <div className="text-xs text-slate-400">{PORTFOLIO_DATA.personal.university}</div>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300 max-w-md mx-auto">
                  Certified and awarded on <span className="text-white font-bold">{PORTFOLIO_DATA.personal.graduationDate}</span>. Signed by Vice Chancellor and Academic Registrar.
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-white">Official Academic Transcript</h4>
                    <p className="text-xs text-slate-400">Total Credits: 147 CUs • Official Academic Transcript</p>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-medium">
                    Approved: 10th Sep 2026
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Academic Milestones</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <div className="text-xs text-slate-400">Industrial Training / Internship</div>
                      <div className="text-sm font-bold text-emerald-400">Victoria University (June-Aug 2025)</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <div className="text-xs text-slate-400">Final Year Project</div>
                      <div className="text-sm font-bold text-blue-400">Automated Transcript System</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800 flex items-center justify-between bg-slate-900">
          <div className="text-xs text-slate-400">
            Official Uganda Martyrs University Records
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
