// src/components/sections/FeaturedWork.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import NeuroCard from '@/components/neuromorphic/NeuroCard';
import NeuroButton from '@/components/neuromorphic/NeuroButton';

const featuredProjects = [
  {
    title: 'Neuromorphic Portfolio',
    description: 'Modern portfolio with neuromorphic design system',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '/projects'
  },
  {
    title: 'AI Training Optimizer',
    description: 'System for optimizing AI model training data',
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    link: '/projects'
  },
  {
    title: 'Process Dashboard',
    description: 'Chemical process optimization analytics',
    tech: ['Pi ProcessBook', 'Data Visualization'],
    link: '/projects'
  }
];

export default function FeaturedWork() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project, index) => (
        <NeuroCard key={project.title} variant="raised" className="p-6">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-neuro-text/80 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-neuro-accent/10 text-neuro-accent rounded">
                {tech}
              </span>
            ))}
          </div>
          <NeuroButton 
            variant="ghost" 
            size="sm" 
            as={Link} 
            href={project.link}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            View Project
          </NeuroButton>
        </NeuroCard>
      ))}
    </div>
  );
}