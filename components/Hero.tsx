import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants.ts';
import { GitHubIcon, LinkedInIcon, MailIcon, LeetCodeIcon, CodeforcesIcon } from './Icons.tsx';

const Hero: React.FC = () => {
  const iconVariants = {
    hover: { scale: 1.2, rotate: 5, color: '#E62429' },
    tap: { scale: 0.9 }
  };
  
  const scrollToProjects = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        {personalInfo.name}
      </motion.h1>
      <motion.h2
        className="mt-4 text-2xl md:text-4xl font-semibold gradient-text h-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {personalInfo.title}
      </motion.h2>
      <motion.div
        className="mt-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            onClick={scrollToProjects}
            className="bg-spidey-red text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resume}
              download="Veaceslav Smolnicov.pdf"
              className="inline-flex items-center px-4 py-3 bg-spidey-red text-white rounded-lg hover:bg-red-500 transition"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
