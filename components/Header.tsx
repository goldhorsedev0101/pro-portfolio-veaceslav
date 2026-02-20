import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, CloseIcon, PersonIcon, BriefcaseIcon, CodeIcon, MailIcon, DocumentIcon } from './Icons.tsx';
import { personalInfo } from '../constants.ts';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: PersonIcon },
    { id: 'experience', label: 'Work', icon: BriefcaseIcon },
    { id: 'projects', label: 'Projects', icon: CodeIcon },
    { id: 'contact', label: 'Contact', icon: MailIcon },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'resume') {
      window.open(`./${personalInfo.resume}`, '_blank');
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { opacity: 0, y: "-100%", transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-slate-950/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="text-2xl font-bold cursor-pointer text-emerald-400"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name}
            </motion.div>
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <React.Fragment key={item.id}>
                    {index > 0 && (
                      <li className="h-6 w-px bg-slate-600 mx-2" />
                    )}
                    <li>
                      <motion.button
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${
                          isActive 
                            ? 'text-emerald-400' 
                            : 'text-white hover:text-emerald-400'
                        }`}
                        whileHover={{ y: -2 }}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-white'}`} />
                        <span>{item.label}</span>
                      </motion.button>
                    </li>
                  </React.Fragment>
                );
              })}
              <li className="h-6 w-px bg-slate-600 mx-2" />
              <li>
                <motion.button
                  onClick={() => scrollToSection('resume')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:text-emerald-400 transition-colors duration-300 font-medium"
                  whileHover={{ y: -2 }}
                >
                  <DocumentIcon className="w-5 h-5 text-white" />
                  <span>Resume</span>
                </motion.button>
              </li>
            </ul>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50 relative">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center space-y-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 text-3xl text-white hover:text-emerald-400 transition-colors duration-300 font-semibold"
                    >
                      <Icon className="w-8 h-8 text-white" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => scrollToSection('resume')}
                  className="flex items-center gap-3 text-3xl text-white hover:text-emerald-400 transition-colors duration-300 font-semibold"
                >
                  <DocumentIcon className="w-8 h-8 text-white" />
                  <span>Resume</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
