import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are you available for full-time software engineering and IT support roles?",
      answer: "Yes! I am actively seeking full-time opportunities, graduate programs, and contract roles in software development, IT support, and systems administration in Uganda and globally."
    },
    {
      question: "What was your final year capstone project at Uganda Martyrs University?",
      answer: "My final year capstone project was the Automated Transcript Request & Digital Verification System for Uganda Martyrs University, which streamlines academic transcript requests and uses cryptographic verification to prevent fraud."
    },
    {
      question: "What technical stack and tools do you use most frequently?",
      answer: "I specialize in React, TypeScript, Node.js, Express, Java, Python, and SQL databases (MySQL, PostgreSQL). I also have hands-on experience in IT support, hardware/software troubleshooting, and system maintenance."
    },
    {
      question: "Do you take on freelance web development and IT consulting projects?",
      answer: "Yes, I offer custom web development, database architecture design, software solutions, and IT support for businesses, schools, and organizations."
    },
    {
      question: "How can employers and recruiters verify your academic credentials?",
      answer: "All my credentials are fully verified. You can view my official Uganda Martyrs University degree certificate and academic transcript directly through the 'View Official Degree & Transcript' button on this portfolio."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Recruiter & Client FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Quick answers regarding availability, skills, and academic background.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-blue-400 transition-colors"
              >
                <span>{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-blue-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 mt-2 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
