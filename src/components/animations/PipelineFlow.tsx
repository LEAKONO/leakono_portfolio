import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface PipelineStep {
  label: string;
  icon: string;
  description: string;
}

const steps: PipelineStep[] = [
  { label: 'API', icon: '🔌', description: 'Ingest data from external APIs' },
  { label: 'Python', icon: '🐍', description: 'Extract and preprocess data' },
  { label: 'RAW', icon: '📥', description: 'Raw data landing zone' },
  { label: 'STAGING', icon: '🔄', description: 'Data transformation preparation' },
  { label: 'dbt', icon: '📊', description: 'Data build tool transformations' },
  { label: 'DW', icon: '🏛️', description: 'Data warehouse models' },
  { label: 'BI', icon: '📈', description: 'Business intelligence dashboards' },
];

export const PipelineFlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = document.querySelectorAll('.pipeline-item');
      
      items.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      // Animate flow lines
      const lines = document.querySelectorAll('.flow-line');
      lines.forEach((line, index) => {
        gsap.fromTo(line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            delay: index * 0.15 + 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className="pipeline-item flex flex-col items-center gap-2 min-w-[80px]">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-2xl group hover:scale-110 transition-all duration-300 cursor-help">
                <span>{step.icon}</span>
              </div>
              <span className="text-xs font-mono text-blue-300/80">{step.label}</span>
              <div className="hidden md:block text-[10px] text-gray-400 text-center max-w-[80px] opacity-0 group-hover:opacity-100 transition-opacity">
                {step.description}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flow-line flex-1 h-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 relative min-w-[20px]">
                <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-blue-400/30 animate-pulse"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};