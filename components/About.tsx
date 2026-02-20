import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants.ts';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="rounded-lg border border-slate-600 bg-slate-900/50 p-8 md:p-12 font-mono"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-400">
          About Me
        </h2>

        <div className="space-y-6 text-white text-base md:text-lg leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              <span className="text-emerald-400">👋 </span>
              <span>Hello there!</span>
            </p>
            <p>
              I'm <span className="text-emerald-400">{personalInfo.name}</span>, a Senior AI Full Stack Engineer with over 10 years of experience building scalable SaaS, fintech, and AI-driven applications. I specialize in modern JavaScript ecosystems (React, Next.js, TypeScript) and robust backend systems using Node.js and Python, with strong expertise in cloud-native architecture on AWS.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Throughout my career, I've led the development of high-traffic platforms serving thousands of users, optimized performance by up to 40%, and designed clean, maintainable systems built for long-term growth. I have hands-on experience integrating AI solutions, including OpenAI-powered assistants, intelligent automation workflows, and data-intensive applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            I enjoy owning products end-to-end — from architecture and development to deployment and optimization — with a strong focus on performance, scalability, and real business impact.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
