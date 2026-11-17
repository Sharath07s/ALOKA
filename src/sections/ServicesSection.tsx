import React from 'react';
import { servicesData } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SectionReveal from '../components/SectionReveal';
import StarParticle from '../components/StarParticle';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-28 md:py-36 px-6 md:px-12 z-10">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionReveal className="section-editorial-header grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] items-end gap-8 mb-14 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-5">
              <StarParticle size="sm" isHovered={true} glowColor="#a855f7" />
              <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                CAPABILITIES & SERVICES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
              What We <span className="font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400">Illuminate</span>
            </h2>
          </div>

          <p className="section-editorial-copy text-base sm:text-lg text-zinc-400 max-w-2xl font-light">
            Turning complex challenges into meaningful digital experiences. Approach each star to awaken its luminous potential.
          </p>
        </SectionReveal>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 120}>
              <ServiceCard service={service} index={index} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
