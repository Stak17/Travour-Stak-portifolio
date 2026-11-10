import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { EducationCert } from './components/EducationCert';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { CVModal } from './components/CVModal';
import { Project, PORTFOLIO_DATA } from './data/portfolioData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Navigation */}
      <Navbar onOpenCV={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenCV={() => setCvModalOpen(true)} 
          onOpenCertificate={() => setCertificateModalOpen(true)} 
        />
        <About onOpenCertificate={() => setCertificateModalOpen(true)} />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <EducationCert onOpenCertificate={() => setCertificateModalOpen(true)} />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsapp}?text=Hello%20Kateregga,%20I%20visited%20your%20world-class%20portfolio%20website%20and%20would%20like%20to%20connect...`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-600/50 hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all group"
          title="Chat with Kateregga on WhatsApp"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute right-full mr-3 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <CertificateModal 
        isOpen={certificateModalOpen} 
        onClose={() => setCertificateModalOpen(false)} 
      />

      <CVModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />

    </div>
  );
}
