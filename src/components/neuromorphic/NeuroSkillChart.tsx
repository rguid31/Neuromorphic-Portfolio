// src/components/neuromorphic/NeuroSkillChart.tsx
'use client';

import React from 'react';
import { NeuroCard } from './NeuroCard';

export default function NeuroSkillChart() {
  const skills = [
    { name: 'Data Analysis', level: 95 },
    { name: 'Python', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Process Engineering', level: 95 },
  ];

  return (
    <NeuroCard variant="raised" className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-center">Technical Skills</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-neuro-accent">{skill.level}%</span>
            </div>
            <div className="h-2 neuro-inset rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r from-neuro-accent to-blue-600 skill-bar-width-${skill.level}`}
              />
            </div>
          </div>
        ))}
      </div>
    </NeuroCard>
  );
}