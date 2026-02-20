import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaPython, FaAws, FaDocker, FaBrain, FaCloud } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiVuedotjs, 
  SiAngular, 
  SiTypescript, 
  SiKotlin, 
  SiSwift, 
  SiFlutter, 
  SiExpress, 
  SiNestjs, 
  SiDjango, 
  SiGraphql, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiFirebase
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.FC<{ className?: string }>;
}

const technologies: TechItem[] = [
  // Row 1
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Angular', icon: SiAngular },
  // Row 2
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Python', icon: FaPython },
  { name: 'Kotlin', icon: SiKotlin },
  // Row 3
  { name: 'Swift', icon: SiSwift },
  { name: 'React Native', icon: FaReact },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Node.js', icon: FaNodeJs },
  // Row 4
  { name: 'Express.js', icon: SiExpress },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Django', icon: SiDjango },
  { name: 'GraphQL', icon: SiGraphql },
  // Row 5
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'Firebase', icon: SiFirebase },
  // Row 6
  { name: 'AWS', icon: FaAws },
  { name: 'Azure', icon: FaCloud },
  { name: 'Docker', icon: FaDocker },
  { name: 'AI/ML', icon: FaBrain },
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              className="rounded-lg border border-slate-600 bg-slate-900/50 p-4 md:p-6 flex flex-col items-center justify-center gap-3 hover:border-cyan-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: '#22d3ee' }}
            >
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm md:text-base font-semibold text-center">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
