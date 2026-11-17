import React from 'react';
import SectionReveal from '../components/SectionReveal';
import StarParticle from '../components/StarParticle';
import { Compass, Lightbulb, Cpu, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Our Vision',
      text: 'To sculpt digital realms where human curiosity and advanced technology coalesce into intuitive, illuminating experiences.',
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      text: 'Balancing rigorous engineering discipline with unbounded artistic imagination, ensuring every product is both robust and inspiring.',
    },
    {
      icon: Cpu,
      title: 'Creative Technology',
      text: 'Harnessing machine intelligence, modern graphics shaders, and cloud architectures to solve real-world problems with elegance.',
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background celestial glow */}
      <div
        className="absolute top-1/3 right-10 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(96, 165, 250, 0.15) 50%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Left Column: Heading & Story */}
          <div className="lg:col-span-6">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6">
                <StarParticle size="sm" isHovered={true} glowColor="#a855f7" />
                <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                  ABOUT ALOKA
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.12] mb-8">
                A little <span className="font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400">light</span> can change everything.
              </h2>

              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-6">
                ALOKA is built around the belief that technology should create meaningful impact. We combine creativity, engineering and curiosity to turn ideas into practical digital experiences.
              </p>

              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light mb-10">
                In ancient philosophy, <em>Aloka</em> signifies spiritual illumination and light that dispels darkness. We embody this principle in software design — transforming opaque complexities into radiant, seamless products that delight users and accelerate growth.
              </p>

              {/* Stat or Brand Signature */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">FOUNDED ON</div>
                    <div className="text-sm font-semibold text-white">Innovation & Pure Craft</div>
                  </div>
                </div>

                <div className="h-8 w-px bg-white/[0.08]" />

                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">PHILOSOPHY</div>
                  <div className="text-sm font-semibold text-purple-300">Light Awakens Action</div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Interactive Luminous Glass Cards */}
          <div className="lg:col-span-6 space-y-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <SectionReveal key={pillar.title} delay={i * 150}>
                  <div className="about-pillar-card group relative rounded-2xl p-6 sm:p-8 bg-[#0e0e13]/60 hover:bg-[#14121c]/80 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(168,85,247,0.2)]">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-600/30 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed font-light">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
