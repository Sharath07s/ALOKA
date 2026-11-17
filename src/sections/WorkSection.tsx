import React from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionReveal from '../components/SectionReveal';
import StarParticle from '../components/StarParticle';

export const WorkSection: React.FC = () => {
  return (
    <section id="work" className="relative py-28 md:py-36 px-6 md:px-12 z-10">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.1) 60%, transparent 75%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionReveal className="section-editorial-header grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] items-end gap-8 mb-14 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-5">
              <StarParticle size="sm" isHovered={true} glowColor="#a855f7" />
              <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                SELECTED PROJECTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
              Ideas brought <span className="font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400">to life</span>.
            </h2>
          </div>

          <p className="section-editorial-copy text-base sm:text-lg text-zinc-400 max-w-2xl font-light">
            A curated collection of digital artifacts, intelligent interfaces, and software architectures designed to endure.
          </p>
        </SectionReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, idx) => (
            <SectionReveal key={project.id} delay={idx * 150}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkSection;
