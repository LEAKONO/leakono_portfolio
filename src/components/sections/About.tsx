import React from 'react';
import { Code, Database, Cloud } from 'lucide-react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <span className="gradient-text">About</span>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              With a foundation in <span className="text-blue-300 font-medium">software engineering</span> (Django, Flask, REST APIs)
              and a growing focus on <span className="text-blue-300 font-medium">cloud data engineering</span>,
              I bridge the gap between application development and analytics infrastructure.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I combine software engineering principles  version control, testing, CI/CD  with modern data stack tools
              like Snowflake, dbt, and Airflow to build <span className="text-white font-medium">scalable data platforms</span>
              that deliver trusted, timely insights.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs">
                Python · SQL
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs">
                Snowflake · dbt
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs">
                Airflow · Docker
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <GlassCard glow>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Code className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Software Engineering</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    2 years building applications with Django, Flask, and React
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard glow>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Database className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Data Engineering</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Building ELT pipelines, dimensional modeling, and cloud data platforms
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard glow>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <Cloud className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Cloud & DevOps</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Learning and implementing cloud deployments with Docker and GitHub Actions
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};