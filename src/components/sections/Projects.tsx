import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, Database, BarChart3, Cloud, Eye, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';

// Import images directly from src/assets/images/ (without ?url)
import retailImage from '../../assets/images/dash.png';
import flightImage from '../../assets/images/Dashboard.png';
import uberImage from '../../assets/images/uber.png'

const iconMap = {
  'retail-warehouse': Database,
  'uber-analytics': BarChart3,
  'flight-pipeline': Cloud,
};

// Dashboard image mapping using imported images
const dashboardImages = {
  'retail-warehouse': retailImage,
  'uber-analytics': uberImage,
  'flight-pipeline': flightImage,
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
          <span className="gradient-text">Featured Projects</span>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl">
          Each project demonstrates a complete data platform — from ingestion to visualization.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = iconMap[project.id as keyof typeof iconMap] || Database;
            const dashboardImage = dashboardImages[project.id as keyof typeof dashboardImages];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/project/${project.id}`}>
                  <GlassCard hover glow className="h-full flex flex-col group overflow-hidden">
                    {/* Dashboard Image */}
                    <div className="relative overflow-hidden rounded-xl mb-4 h-48 bg-dark-100">
                      {dashboardImage ? (
                        <img
                          src={dashboardImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            // Show fallback if image fails to load
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'w-full h-full flex items-center justify-center text-gray-500 text-sm';
                              fallback.innerHTML = '📊 Dashboard Preview';
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                          📊 Dashboard Preview
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-white flex items-center gap-1.5">
                        <Eye size={14} />
                        <span>Dashboard</span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-xl bg-blue-500/10">
                        <Icon className="text-blue-400" size={22} />
                      </div>
                      <span className="text-xs font-mono text-blue-300/60">PIPELINE</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-300/70 mb-3">{project.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-gray-400 hover:text-blue-400 transition flex items-center gap-1"
                      >
                        <Github size={14} /> Code
                      </a>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs text-gray-400 hover:text-blue-400 transition flex items-center gap-1"
                        >
                          <ExternalLink size={14} /> Demo
                        </a>
                      )}
                      <span className="ml-auto text-xs text-blue-400 group-hover:translate-x-1 transition flex items-center gap-1">
                        Details <ChevronRight size={14} />
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* More Projects Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/LEAKONO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              icon={<ArrowRight size={18} />}
              className="shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all"
            >
              More on GitHub
            </Button>
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};