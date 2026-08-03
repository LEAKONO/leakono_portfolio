import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
      });
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
      });
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });
      gsap.from('.hero-image', {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
      });
      gsap.from('.hero-title-role', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });
      gsap.from('.hero-status', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] -top-48 -right-48 animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -bottom-48 -left-48 animate-pulse-slow animation-delay-200" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 pb-8 md:py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 items-center lg:items-center"
        >
          {/* Profile Picture - Centered on all screens */}
          <div className="hero-image flex-shrink-0 w-full lg:w-auto flex flex-col items-center justify-center">
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse-slow" />
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[420px] lg:h-[420px] rounded-full glass border-2 border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-500/20 mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <img
                    src="/assets/images/me.jpeg"
                    alt="Emmanuel Leakono"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Title below image */}
              <div className="hero-title-role mt-2 md:mt-3 lg:mt-4 text-center">
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 lg:px-6 lg:py-2 rounded-full glass border border-blue-500/20 text-xs md:text-sm font-bold text-blue-300">
                  Data Engineer
                </span>
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500/20 blur-xl animate-pulse-slow" />
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 rounded-full bg-purple-500/20 blur-xl animate-pulse-slow animation-delay-200" />
            </div>
          </div>

          {/* Left Content - Comes after image on mobile */}
          <div className="flex-1 space-y-3 md:space-y-4 lg:space-y-6 text-center lg:text-left">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-white">Emmanuel</span>{' '}
              <span className="gradient-text">Leakono</span>
              
            </h1>

            <p className="hero-subtitle text-xs sm:text-sm md:text-base text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed border-l-0 lg:border-l-2 border-blue-400/30 lg:pl-4">
              With a background in software engineering, I bring clean architecture, automation, and maintainable design principles to modern data engineering. I enjoy building end-to-end ETL/ELT pipelines, designing dimensional data models, and creating reliable data platforms that transform raw data into meaningful business insights. My approach focuses on building scalable, well-engineered solutions with an emphasis on data quality, workflow orchestration, and automation. I'm passionate about solving complex data challenges and continuously improving my skills by building production-inspired projects that reflect real-world engineering practices.
            </p>

            <div className="hero-cta flex flex-wrap gap-2 md:gap-3 lg:gap-4 pt-1 md:pt-2 lg:pt-4 justify-center lg:justify-start">
              <Button size="sm" onClick={scrollToProjects} icon={<ArrowRight size={16} />}>
                View Projects
              </Button>
              <a
                href="https://github.com/LEAKONO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="secondary" icon={<Github size={16} />}>
                  GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-leakono/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="secondary" icon={<Linkedin size={16} />}>
                  LinkedIn
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1XPMUQr987L4Z24MDXBI9oI_fFLTrZyLF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline" icon={<Download size={16} />}>
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};