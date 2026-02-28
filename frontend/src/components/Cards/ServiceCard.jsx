import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, desc, benefits, drawbacks, suitable, image, icon: Icon }) => {
  return (
    <div className="service-flip-card w-full h-[420px]" style={{ perspective: '1200px' }}>
      <div
        className="service-flip-inner relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-solar-panel/20
                     bg-sky-deep shadow-xl flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-52 w-full overflow-hidden bg-sky-deep/60">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-sunrise flex items-center justify-center">
                {Icon && <Icon size={64} className="text-cloud-white opacity-80" />}
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sky-deep to-transparent" />
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black tracking-tight text-cloud-white uppercase leading-tight">{title}</h3>
              <p className="mt-2 text-sm text-cloud-gray leading-relaxed line-clamp-3">{desc}</p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sun-primary text-xs font-bold uppercase tracking-widest">
              <span className="w-5 h-px bg-sun-primary inline-block" />
              Hover to know more
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-sun-primary/30
                     bg-gradient-sunrise shadow-2xl flex flex-col justify-between p-6"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-12 h-1 bg-sun-secondary rounded-full mb-4" />
          <h3 className="text-xl font-black text-sky-deep uppercase tracking-tight leading-tight">{title}</h3>
          <div className="flex flex-col gap-4 mt-4 flex-1">
            <div className="bg-cloud-white/20 rounded-xl p-3">
              <p className="text-xs font-black text-sky-deep uppercase tracking-widest mb-1">✅ Benefits</p>
              <p className="text-sm text-sky-deep/90 leading-relaxed">{benefits}</p>
            </div>
            <div className="bg-cloud-white/15 rounded-xl p-3">
              <p className="text-xs font-black text-sky-deep uppercase tracking-widest mb-1">⚠️ Drawbacks</p>
              <p className="text-sm text-sky-deep/90 leading-relaxed">{drawbacks}</p>
            </div>
            <div className="bg-cloud-white/15 rounded-xl p-3">
              <p className="text-xs font-black text-sky-deep uppercase tracking-widest mb-1">🏠 Best For</p>
              <p className="text-sm text-sky-deep/90 leading-relaxed">{suitable}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Scoped — sirf .service-flip-card ko target karta hai */}
      <style>{`
        .service-flip-card:hover .service-flip-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;