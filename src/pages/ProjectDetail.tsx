import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Github, ExternalLink, 
  CheckCircle, Server, Database, Cloud, 
  Code, Layers, GitBranch, Zap, 
  Activity, BarChart3, ChevronRight, Eye
} from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { projects, Project } from '../data/projects';

const dashboardImages = {
  'retail-warehouse': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
  'spotify-analytics': 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=1200&h=600&fit=crop',
  'flight-pipeline': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop',
};

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const found = projects.find(p => p.id === id);
    if (found) {
      setProject(found);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🔄</div>
            <p className="text-gray-400">Loading project...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const iconMap: Record<string, React.ReactNode> = {
    'retail-warehouse': <Database className="text-blue-400" size={48} />,
    'spotify-analytics': <BarChart3 className="text-purple-400" size={48} />,
    'flight-pipeline': <Cloud className="text-cyan-400" size={48} />,
  };

  const techIcons: Record<string, React.ReactNode> = {
    Python: <Code size={16} />,
    Snowflake: <Database size={16} />,
    dbt: <GitBranch size={16} />,
    'Apache Airflow': <Activity size={16} />,
    'Power BI': <BarChart3 size={16} />,
    'Spotify API': <Cloud size={16} />,
    'AviationStack API': <Cloud size={16} />,
  };

  const dashboardImage = dashboardImages[project.id as keyof typeof dashboardImages] || '';

  return (
    <Layout>
      <div ref={containerRef} className="relative">
        {/* Back Button */}
        <div className="fixed top-24 left-6 z-50">
          <Link to="/#projects">
            <Button variant="secondary" size="sm" icon={<ArrowLeft size={16} />}>
              Back
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-8 items-start lg:items-center"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                    PROJECT
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                    {project.tech[0]}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button icon={<Github size={18} />}>
                      View Code
                    </Button>
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" icon={<ExternalLink size={18} />}>
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-3xl glass flex items-center justify-center border border-blue-500/20">
                  {iconMap[project.id] || <Database className="text-blue-400" size={48} />}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="gradient-text">Dashboard Preview</span>
              <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
            </h2>
            <div className="glass rounded-3xl overflow-hidden border border-blue-500/10">
              <img
                src={dashboardImage}
                alt={`${project.title} Dashboard`}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Eye size={16} className="text-blue-400" />
                  <span>Interactive dashboard preview</span>
                </div>
                <span className="text-xs text-blue-300">Power BI · Real-time</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Architecture Diagram */}
        <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="gradient-text">Pipeline Architecture</span>
            </h2>
            <div className="glass rounded-3xl p-6 md:p-8 border border-blue-500/10">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {project.architecture.map((stage, index) => (
                  <React.Fragment key={stage}>
                    <div className="flex flex-col items-center gap-2 min-w-[80px]">
                      <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-sm font-mono text-blue-300/80 border border-white/5">
                        {stage.substring(0, 3)}
                      </div>
                      <span className="text-xs text-gray-400 text-center">{stage}</span>
                    </div>
                    {index < project.architecture.length - 1 && (
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 relative">
                        <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-blue-400/40 animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Project Details Grid - Keep the same as before */}
        <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Problem & Solution - Keep same */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="glass" hoverable>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-red-500/10">
                      <Activity className="text-red-400" size={20} />
                    </div>
                    <CardTitle>Problem</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card variant="glass" hoverable>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-green-500/10">
                      <CheckCircle className="text-green-400" size={20} />
                    </div>
                    <CardTitle>Solution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <Card variant="gradient" hoverable>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-yellow-500/10">
                      <Zap className="text-yellow-400" size={20} />
                    </div>
                    <CardTitle>Business Impact</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.impact}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="text-center p-3 rounded-xl bg-white/5">
                        <div className="text-sm font-mono text-blue-300">{metric}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card variant="glass" hoverable>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-blue-500/10">
                      <Layers className="text-blue-400" size={20} />
                    </div>
                    <CardTitle>Key Features</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card variant="glass" hoverable>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-purple-500/10">
                      <Server className="text-purple-400" size={20} />
                    </div>
                    <CardTitle>Tech Stack</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300"
                      >
                        {techIcons[tech] || <Code size={16} />}
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* GitHub Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-2"
            >
              <Card variant="glass" hoverable glow>
                <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10">
                      <Github className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">View on GitHub</div>
                      <div className="text-xs text-gray-400">Complete source code with documentation</div>
                    </div>
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button icon={<ExternalLink size={18} />}>
                      View Repository
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {projects
                .filter(p => p.id !== project.id)
                .map((p) => (
                  <Link key={p.id} to={`/project/${p.id}`}>
                    <Card variant="glass" hoverable className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white">{p.title}</div>
                          <div className="text-sm text-gray-400">{p.subtitle}</div>
                        </div>
                        <ChevronRight className="text-gray-500" size={20} />
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};