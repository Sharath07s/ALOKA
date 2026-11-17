import React, { useState, useRef } from 'react';
import { ServiceItem } from '../data/services';
import StarParticle from './StarParticle';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDirectHover, setIsDirectHover] = useState(false);
  const [proximityScore, setProximityScore] = useState(0); // 0 to 1
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // The star is located at top-left padding approx (x: 48, y: 48)
    const starCenter = { x: 44, y: 44 };
    const distToStar = Math.hypot(x - starCenter.x, y - starCenter.y);
    const maxDist = Math.hypot(rect.width, rect.height);
    // Normalized proximity to star: closer = higher score
    const proximity = Math.max(0, 1 - distToStar / (maxDist * 0.45));
    setProximityScore(proximity);
  };

  const handleMouseEnter = () => {
    setIsDirectHover(true);
  };

  const handleMouseLeave = () => {
    setIsDirectHover(false);
    setProximityScore(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`service-card-shell group relative rounded-3xl p-8 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden ${
        isDirectHover
          ? 'bg-[#121118]/85 -translate-y-2 shadow-[0_20px_50px_-15px_rgba(168,85,247,0.22)]'
          : 'bg-[#0d0d10]/60 hover:bg-[#111116]/80'
      }`}
      style={{
        backdropFilter: 'blur(20px)',
        border: `1px solid ${
          isDirectHover
            ? 'rgba(168, 85, 247, 0.45)'
            : proximityScore > 0.3
            ? `rgba(168, 85, 247, ${0.15 + proximityScore * 0.25})`
            : 'rgba(255, 255, 255, 0.08)'
        }`,
      }}
    >
      {/* Dynamic Cursor Spotlight inside Card */}
      {isDirectHover && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(99, 102, 241, 0.04) 40%, transparent 70%)',
            borderRadius: '9999px',
          }}
        />
      )}

      {/* Top Bar: Interactive Star Symbol + Number */}
      <div>
        <div className="flex items-center justify-between mb-8">
          {/* Star Symbol with direct proximity reaction */}
          <div className="relative">
            <StarParticle
              size="lg"
              isHovered={isDirectHover || proximityScore > 0.4}
              glowColor={
                proximityScore > 0.6
                  ? 'rgba(192, 132, 252, 0.95)'
                  : 'rgba(168, 85, 247, 0.7)'
              }
            />
          </div>

          <span className="font-mono text-sm tracking-widest text-zinc-500 group-hover:text-purple-300 transition-colors">
            {service.number}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors tracking-tight">
          {service.title}
        </h3>

        {/* Description - brightens on hover */}
        <p
          className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${
            isDirectHover ? 'text-zinc-200' : 'text-zinc-400'
          }`}
        >
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400/70 shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Bar: Tags & Action */}
      <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {service.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 group-hover:text-white transition-colors"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
export default ServiceCard;
