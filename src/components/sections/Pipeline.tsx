import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Cloud, Code, BarChart3, Layers, GitBranch } from 'lucide-react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';

gsap.registerPlugin(ScrollTrigger);

interface PipelineStage {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const stages: PipelineStage[] = [
  {
    id: 'api',
    label: 'API',
    icon: <Cloud size={20} />,
    description: 'Ingest data from external sources via REST APIs, webhooks, or streaming platforms.',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    id: 'extract',
    label: 'Extraction',
    icon: <Database size={20} />,
    description: 'Python-based extraction with error handling, retries, and data validation.',
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'raw',
    label: 'RAW Layer',
    icon: <Layers size={20} />,
    description: 'Immutable raw data storage preserving original format for auditability.',
    color: 'from-purple-500/20 to-cyan-500/20'
  },
  {
    id: 'staging',
    label: 'STAGING',
    icon: <GitBranch size={20} />,
    description: 'Data cleansing, standardization, and preparation for transformation.',
    color: 'from-pink-500/20 to-purple-500/20'
  },
  {
    id: 'dbt',
    label: 'dbt Models',
    icon: <Code size={20} />,
    description: 'SQL-based transformations with testing, documentation, and version control.',
    color: 'from-orange-500/20 to-pink-500/20'
  },
  {
    id: 'warehouse',
    label: 'Data Warehouse',
    icon: <Database size={20} />,
    description: 'Optimized dimensional models, fact tables, and star schemas for analytics.',
    color: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'bi',
    label: 'Power BI',
    icon: <BarChart3 size={20} />,
    description: 'Interactive dashboards and reports for business intelligence and decision making.',
    color: 'from-yellow-500/20 to-green-500/20'
  }
];

export const Pipeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Remove flowRef if not used, or keep it commented
  // const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each stage card
      const cards = document.querySelectorAll('.pipeline-stage');
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      // Animate flow lines with data particles
      const lines = document.querySelectorAll('.flow-line');
      lines.forEach((line, index) => {
        gsap.fromTo(line,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            delay: index * 0.15 + 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      // Animate data particles
      const particles = document.querySelectorAll('.data-particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          x: '100%',
          duration: 2 + Math.random() * 2,
          repeat: -1,
          ease: 'linear',
          delay: index * 0.5,
          scrollTrigger: {
            trigger: particle,
            start: 'top 85%',
            toggleActions: 'play pause none reverse',
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <AnimatedSection>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="gradient-text">Pipeline Architecture</span>
            <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl">
            End-to-end data platform architecture showing how raw data flows through transformation layers to actionable insights.
          </p>

          <div ref={containerRef} className="relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-2">
              {stages.map((stage, index) => (
                <React.Fragment key={stage.id}>
                  <div className="pipeline-stage w-full lg:flex-1 min-w-[120px]">
                    <GlassCard
                      hover
                      glow
                      className="group cursor-default relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10 flex flex-col items-center text-center gap-2">
                        <div className="p-2 rounded-xl bg-white/5 group-hover:bg-blue-500/20 transition-colors duration-300">
                          <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                            {stage.icon}
                          </div>
                        </div>
                        <span className="text-sm font-mono font-semibold text-blue-300/80 group-hover:text-blue-200 transition-colors">
                          {stage.label}
                        </span>
                        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed hidden md:block">
                          {stage.description}
                        </p>
                        {/* Mobile tooltip */}
                        <div className="md:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg glass text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap max-w-[200px]">
                          {stage.description}
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  {index < stages.length - 1 && (
                    <div className="flow-line flex-shrink-0 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 relative my-2 lg:my-0">
                      <div className="data-particle absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/60 shadow-lg shadow-blue-400/20" />
                      <div className="data-particle absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/60 shadow-lg shadow-purple-400/20" style={{ animationDelay: '0.3s' }} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};