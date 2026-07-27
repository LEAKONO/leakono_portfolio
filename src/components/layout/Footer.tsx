import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Emmanuel Leakono. Built with passion for data engineering
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/LEAKONO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-leakono/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:leakonoemmanuel3@gmail.com"
            className="text-gray-500 hover:text-blue-400 transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};