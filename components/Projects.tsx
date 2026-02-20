import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../constants.ts';
import { ExternalLinkIcon } from './Icons.tsx';
import type { Project } from '../types.ts';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalPanel = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
};

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
      setCurrentScreenshotIndex(0);
    } else {
      document.body.style.overflow = '';
      setCurrentScreenshotIndex(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  const hasScreenshots = (project: Project) => {
    return project.screenshots && project.screenshots.length > 0;
  };

  const nextScreenshot = () => {
    if (selected && selected.screenshots) {
      setCurrentScreenshotIndex((prev) => 
        prev === selected.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevScreenshot = () => {
    if (selected && selected.screenshots) {
      setCurrentScreenshotIndex((prev) => 
        prev === 0 ? selected.screenshots!.length - 1 : prev - 1
      );
    }
  };

  const openPreview = (project: Project) => {
    setSelected(project);
  };

  const closePreview = () => {
    setSelected(null);
  };

  const openInNewTab = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getPreviewUrl = (project: Project) => {
    return project.demoUrl || project.githubUrl || project.githubUrls?.frontend || project.githubUrls?.backend;
  };

  return (
    <>
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl overflow-hidden flex flex-col group cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} 
            style={{ transformStyle: 'preserve-3d' }}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: { duration: 0.3 }
            }}
            onClick={() => openPreview(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-spidey-red transition-colors duration-300">{project.title}</h3>

                <div className="flex items-center space-x-3 z-10">
                  {project.demoUrl && (
                    <a onClick={(e) => { e.stopPropagation(); openInNewTab(project.demoUrl); }} className="text-slate-400 hover:text-spidey-red transition-colors cursor-pointer" aria-label="Open demo">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-slate-700 text-red-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalBackdrop}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closePreview}
            aria-hidden
          />
          <motion.div
            className="relative w-full max-w-6xl h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 flex flex-col"
            variants={modalPanel}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview ${selected.title}`}
          >


            <header className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-slate-700 bg-slate-900 z-10 gap-4 flex-shrink-0">

              <div className="w-full md:w-auto">
                <h3 className="text-lg font-semibold text-slate-100">{selected.title}</h3>
              </div>
            </header>

            <div className="flex-1 relative min-h-0">
              {hasScreenshots(selected) ? (
                <div className="h-full flex flex-col">
                  <div className="flex-1 relative bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src={selected.screenshots![currentScreenshotIndex]}
                      alt={`${selected.title} - Screenshot ${currentScreenshotIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                    
                    {selected.screenshots!.length > 1 && (
                      <>
                        <button
                          onClick={prevScreenshot}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          aria-label="Previous screenshot"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextScreenshot}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          aria-label="Next screenshot"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  
                  {selected.screenshots!.length > 1 && (
                    <div className="p-4 bg-slate-800 border-t border-slate-700 flex items-center justify-center gap-2">
                      {selected.screenshots!.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentScreenshotIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentScreenshotIndex
                              ? 'bg-cyan-400 w-8'
                              : 'bg-slate-600 hover:bg-slate-500'
                          }`}
                          aria-label={`Go to screenshot ${index + 1}`}
                        />
                      ))}
                      <span className="ml-4 text-sm text-slate-400">
                        {currentScreenshotIndex + 1} / {selected.screenshots!.length}
                      </span>
                    </div>
                  )}
                </div>
              ) : getPreviewUrl(selected) ? (
                <iframe
                  title={`Preview - ${selected.title}`}
                  src={getPreviewUrl(selected)}
                  className="w-full h-full bg-white"
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-presentation"
                />
              ) : (
                <div className="h-full flex items-center justify-center text-slate-300">
                  No preview available for this project.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Projects;