import React from 'react';
import { MessageSquare, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Kateregga Joseph Travour delivered an exceptional web platform for Care Axis Agency. His professionalism, technical accuracy, and commitment to 24/7 reliability made working with him an absolute pleasure.",
      author: "Care Axis Agency Management",
      role: "Healthcare & Caregiving Services",
      rating: 5
    },
    {
      quote: "As final year capstone supervisor and coordinator at Uganda Martyrs University, Travour demonstrated outstanding dedication in engineering the Automated Transcript Request & Digital Verification System. A top-tier Computer Science graduate.",
      author: "Academic Faculty & Mentors",
      role: "Uganda Martyrs University, Nkozi",
      rating: 5
    },
    {
      quote: "Travour's IT support and system maintenance during his internship at Victoria University significantly reduced technical downtime and ensured smooth end-user assistance. Highly recommended for any IT engineering role.",
      author: "IT Infrastructure Team",
      role: "Victoria University Market Street",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
            <Quote className="w-3.5 h-3.5" />
            <span>Endorsements & Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Partners & Mentors Say
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Feedback from academic supervisors, institutional mentors, and client organizations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800/80 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.author}</h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
                <Quote className="w-8 h-8 text-blue-600/20" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
