import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, Phone } from 'lucide-react';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <span className="gradient-text">Contact</span>
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Let's connect and build something amazing together.
            </p>
            <p className="text-gray-400">
              I'm always open to discussing data engineering projects, collaborations, or opportunities.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <a
                href="https://github.com/LEAKONO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-light hover:glass transition-all group"
              >
                <Github className="text-blue-400 group-hover:text-blue-300" size={24} />
                <div>
                  <div className="text-sm font-medium text-white">GitHub</div>
                  <div className="text-xs text-gray-400">github.com/LEAKONO</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-leakono/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-light hover:glass transition-all group"
              >
                <Linkedin className="text-blue-400 group-hover:text-blue-300" size={24} />
                <div>
                  <div className="text-sm font-medium text-white">LinkedIn</div>
                  <div className="text-xs text-gray-400">linkedin.com/in/emmanuel-leakono</div>
                </div>
              </a>
              <a
                href="mailto:leakonoemmanuel3@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl glass-light hover:glass transition-all group"
              >
                <Mail className="text-blue-400 group-hover:text-blue-300" size={24} />
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <div className="text-xs text-gray-400">leakonoemmanuel3@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+254700215691"
                className="flex items-center gap-4 p-4 rounded-xl glass-light hover:glass transition-all group"
              >
                <Phone className="text-blue-400 group-hover:text-blue-300" size={24} />
                <div>
                  <div className="text-sm font-medium text-white">Phone</div>
                  <div className="text-xs text-gray-400">+254 700 215 691</div>
                </div>
              </a>
            </div>
          </div>

          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button type="submit" className="w-full" icon={submitted ? <CheckCircle size={18} /> : <Send size={18} />}>
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </GlassCard>
        </div>
      </AnimatedSection>
    </section>
  );
};