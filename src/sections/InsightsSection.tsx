import React from 'react';
import { insightsData } from '../data/insights';
import SectionReveal from '../components/SectionReveal';
import StarParticle from '../components/StarParticle';
import { ArrowUpRight } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="relative py-28 md:py-36 px-6 md:px-12 z-10">
      {/* Background radial accent */}
      <div
        className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(96, 165, 250, 0.1) 60%, transparent 75%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionReveal className="section-editorial-header grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] items-end gap-8 mb-14 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-5">
              <StarParticle size="sm" isHovered={true} glowColor="#a855f7" />
              <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                JOURNAL & FIELD NOTES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
              Thoughts, ideas and <span className="font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400">discoveries</span>.
            </h2>
          </div>

          <p className="section-editorial-copy text-base sm:text-lg text-zinc-400 max-w-2xl font-light">
            Reflections on interaction design, generative algorithms, creative engineering, and the architecture of light.
          </p>
        </SectionReveal>

        {/* 3 Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article, idx) => (
            <SectionReveal key={article.id} delay={idx * 140}>
              <article className="insight-card-shell group h-full flex flex-col justify-between rounded-3xl p-8 bg-[#0c0c10]/70 hover:bg-[#121019]/80 border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-10px_rgba(168,85,247,0.2)]">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6">
                    <span className="text-purple-400 font-semibold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                  <span className="text-xs text-zinc-500 font-mono">
                    {article.date}
                  </span>

                  <a
                    href={article.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-300 group-hover:text-white transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InsightsSection;
