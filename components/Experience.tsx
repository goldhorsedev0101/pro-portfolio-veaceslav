import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../constants.ts';

const Experience: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center font-mono"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-yellow-400">Work Experience</span>
      </motion.h2>

      <div className="space-y-6">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-lg border border-slate-600 bg-slate-900/50 p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-yellow-400 font-semibold mb-2">
                  {item.company}
                </p>
              </div>
              <div className="text-right text-slate-300 space-y-1">
                <p className="font-medium">{item.period}</p>
                <p className="text-sm text-slate-400">{item.location}</p>
              </div>
            </div>

            <ul className="space-y-3 mt-4">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1.5 flex-shrink-0">
                    <svg className="w-2 h-2" viewBox="0 0 8 8" fill="currentColor">
                      <circle cx="4" cy="4" r="4" />
                    </svg>
                  </span>
                  <span className="text-slate-300 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
