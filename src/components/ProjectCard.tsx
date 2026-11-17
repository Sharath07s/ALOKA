import React, { useState } from 'react';
import { ProjectItem } from '../data/projects';
import StarParticle from './StarParticle';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card-shell group relative rounded-3xl overflow-hidden bg-[#0c0c10]/80 border border-white/[0.08] hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.25)] hover:-translate-y-1.5"
    >
      {/* Visual Canvas / Abstract Luminous Media Container */}
      <div className="project-card-art relative h-60 sm:h-72 w-full overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-[#0e0a17] flex items-center justify-center p-8">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

        {/* Abstract Generative Cosmic Geometry */}
        <div
          className={`project-card-orbit relative w-44 h-44 rounded-full flex items-center justify-center transition-all duration-700 ease-out ${
            isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
          }`}
        >
          {/* Glowing Aura Mesh */}
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle, ${project.accentColor} 0%, rgba(99, 102, 241, 0.2) 60%, transparent 80%)`,
            }}
          />

          {/* Concentric SVG rings & constellation node */}
          <svg className="w-full h-full relative z-10" viewBox="0 0 160 160" fill="none">
            <circle
              cx="80"
              cy="80"
              r="68"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <circle
              cx="80"
              cy="80"
              r="48"
              stroke="rgba(168, 85, 247, 0.35)"
              strokeWidth="1.5"
            />
            <circle
              cx="80"
              cy="80"
              r="28"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />
            {/* Center Star Point */}
            <circle cx="80" cy="80" r="4" fill="#FFFFFF" className="drop-shadow-[0_0_8px_#ffffff]" />
            <circle cx="80" cy="80" r="12" fill={project.accentColor} opacity="0.3" />
          </svg>

          {/* Interactive Star Particle overlay */}
          <div className="absolute z-20">
            <StarParticle size="sm" isHovered={isHovered} glowColor={project.accentColor} />
          </div>
        </div>

        {/* Year Pill Tag */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-400">
          {project.year}
        </div>
      </div>

      {/* Card Information */}
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-2">
            {project.category}
          </div>

          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* View Project Link */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
            View Project Case
          </span>
          <div className="w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-purple-600 border border-white/10 group-hover:border-purple-500 flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
