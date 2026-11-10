import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Globe, Code, Database, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-indigo-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-emerald-400" />;
      default:
        return <Wrench className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
            <Wrench className="w-3.5 h-3.5" />
            <span>Professional IT Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Can Help Your Organization
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Offering reliable technology services, website development, software solutions, and IT support to businesses, schools, and organizations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800/80 rounded-3xl p-8 shadow-xl hover:border-slate-700 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Deliverables:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Available for Hire</span>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-800/60 text-blue-300 text-xs font-medium hover:bg-blue-600 hover:text-white transition-all"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
