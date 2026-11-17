import React, { useState } from 'react';
import SectionReveal from '../components/SectionReveal';
import StarParticle from '../components/StarParticle';
import { Search, Compass, Code2, SunMedium } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand the problem, goals and opportunities.',
      description: 'We immerse ourselves in your vision, analyzing user behavior, architectural bottlenecks, and market dynamics to discover the foundational core.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Imagine',
      tagline: 'Explore ideas, concepts and possible solutions.',
      description: 'We sketch creative paradigms, prototype interactive workflows, and evaluate emerging technologies to uncover the most elegant solution.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Create',
      tagline: 'Design, engineer and build the solution.',
      description: 'We engineer with pristine craft — modular React architectures, fluid animations, robust cloud infrastructures, and rigorous automated tests.',
      icon: Code2,
    },
    {
      number: '04',
      title: 'Illuminate',
      tagline: 'Launch, improve and deliver meaningful impact.',
      description: 'We deploy to production, monitor telemetry, iterate based on real feedback, and ensure your product radiates enduring business value.',
      icon: SunMedium,
    },
  ];

  return (
    <section id="process" className="relative py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background radial highlight */}
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-4">
            <StarParticle size="sm" isHovered={true} glowColor="#a855f7" />
            <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
              OUR METHODOLOGY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-6 leading-tight">
            From a spark to something <span className="font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400">extraordinary</span>.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light">
            Our iterative four-phase journey illuminates clarity at each milestone, turning abstract thoughts into tangible reality.
          </p>
        </SectionReveal>

        {/* Desktop Connected Constellation Line (Visible md and up) */}
        <div className="hidden lg:block relative mb-12">
          {/* Base Dim Line */}
          <div className="absolute top-[32px] left-12 right-12 h-0.5 bg-white/[0.08] -z-0" />

          {/* Illuminated Progress Line */}
          <div
            className="absolute top-[32px] left-12 h-0.5 bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-400 transition-all duration-700 -z-0 shadow-[0_0_12px_#a855f7]"
            style={{
              width: `${(activeStep / (steps.length - 1)) * 88}%`,
            }}
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Step Star Beacon */}
                  <div className="relative mb-8 flex items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border ${
                        isActive
                          ? 'bg-purple-950/80 border-purple-400 shadow-[0_0_28px_rgba(168,85,247,0.7)] scale-110'
                          : isPast
                          ? 'bg-purple-900/30 border-purple-500/40'
                          : 'bg-[#0a0a0d] border-white/10 group-hover:border-purple-500/30'
                      }`}
                    >
                      <StarParticle
                        size="md"
                        isHovered={isActive}
                        glowColor={isActive ? 'rgba(192, 132, 252, 1)' : 'rgba(168, 85, 247, 0.4)'}
                      />
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <div
                    className={`process-step-panel w-full rounded-2xl p-6 transition-all duration-500 border text-left ${
                      isActive
                        ? 'bg-[#13111b]/80 border-purple-500/40 shadow-[0_12px_35px_-10px_rgba(168,85,247,0.25)] -translate-y-1'
                        : 'bg-[#0a0a0d]/50 border-white/[0.06] hover:bg-[#100f17]/60 hover:border-white/[0.12]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-xs font-semibold tracking-wider ${
                        isActive ? 'text-purple-300' : 'text-zinc-500'
                      }`}>
                        PHASE {step.number}
                      </span>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-purple-300' : 'text-zinc-500'}`} />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-xs font-medium text-purple-200/80 mb-3">
                      {step.tagline}
                    </p>

                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Stepped Vertical View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`process-step-mobile relative rounded-2xl p-6 transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#13111b]/90 border-purple-500/50 shadow-[0_8px_30px_rgba(168,85,247,0.2)]'
                    : 'bg-[#0a0a0d]/70 border-white/[0.08]'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <StarParticle size="sm" isHovered={isActive} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-purple-400 tracking-wider">
                      PHASE {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <Icon className="w-5 h-5 ml-auto text-zinc-400" />
                </div>

                <p className="text-xs font-medium text-purple-200/90 mb-2">
                  {step.tagline}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProcessSection;
