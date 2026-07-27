import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Pipeline } from '../components/sections/Pipeline';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Pipeline />
      <Contact />
    </Layout>
  );
};