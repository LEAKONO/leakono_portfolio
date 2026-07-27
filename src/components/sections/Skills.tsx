import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';
import { skillGroups } from '../../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
          <span className="gradient-text">Skills</span>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-blue-400/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300/80">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-gray-200 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};