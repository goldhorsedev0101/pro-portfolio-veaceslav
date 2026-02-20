import React from 'react';
import { motion } from 'framer-motion';
import { 
  ReactIcon, NextJSIcon, VueIcon, AngularIcon,
  TypeScriptIcon, JavaScriptIcon, PythonIcon, KotlinIcon,
  SwiftIcon, ReactNativeIcon, FlutterIcon, NodeJSIcon,
  ExpressJSIcon, NestJSIcon, DjangoIcon, GraphQLIcon,
  PostgreSQLIcon, MongoDBIcon, RedisIcon, FirebaseIcon,
  AWSIcon, AzureIcon, DockerIcon, AIIcon
} from './Icons.tsx';

interface TechItem {
  name: string;
  icon: React.FC<{ className?: string }>;
}

const technologies: TechItem[] = [
  // Row 1
  { name: 'React', icon: ReactIcon },
  { name: 'Next.js', icon: NextJSIcon },
  { name: 'Vue.js', icon: VueIcon },
  { name: 'Angular', icon: AngularIcon },
  // Row 2
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'Kotlin', icon: KotlinIcon },
  // Row 3
  { name: 'Swift', icon: SwiftIcon },
  { name: 'React Native', icon: ReactNativeIcon },
  { name: 'Flutter', icon: FlutterIcon },
  { name: 'Node.js', icon: NodeJSIcon },
  // Row 4
  { name: 'Express.js', icon: ExpressJSIcon },
  { name: 'NestJS', icon: NestJSIcon },
  { name: 'Django', icon: DjangoIcon },
  { name: 'GraphQL', icon: GraphQLIcon },
  // Row 5
  { name: 'PostgreSQL', icon: PostgreSQLIcon },
  { name: 'MongoDB', icon: MongoDBIcon },
  { name: 'Redis', icon: RedisIcon },
  { name: 'Firebase', icon: FirebaseIcon },
  // Row 6
  { name: 'AWS', icon: AWSIcon },
  { name: 'Azure', icon: AzureIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'AI/ML', icon: AIIcon },
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
