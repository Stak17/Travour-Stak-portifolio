import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ExternalLink, FolderGit2, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header Image */}
        <div className="relative h-64 bg-slate-950 overflow-hidden border-b border-slate-800">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-blue-950 to-indigo-950">
              <FolderGit2 className="w-16 h-16 text-blue-400" />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-xs font-medium text-white shadow-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <div className="text-xs text-blue-400 font-medium">{project.highlight}</div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-end gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-xs font-medium text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
