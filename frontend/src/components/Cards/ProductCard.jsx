import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ title, desc, moreInfo, icon: Icon, tag, stat, onQuote }) => {
  return (
    <div className="product-flip-card w-full h-[380px]" style={{ perspective: '1200px' }}>
      <div
        className="product-flip-inner relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col justify-between p-7
                     bg-sky-deep border border-solar-panel/20 shadow-lg overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {tag && (
            <span className="self-start text-[10px] font-black uppercase tracking-[0.2em]
                            bg-sun-primary/10 border border-sun-primary/30 text-sun-primary
                            rounded-full px-3 py-1 mb-2">
              {tag}
            </span>
          )}
          <div className="w-14 h-14 rounded-xl bg-sun-primary/10 border border-sun-primary/20
                          flex items-center justify-center text-sun-primary">
            {Icon && <Icon size={26} />}
          </div>
          <div className="flex-1 mt-5">
            <h3 className="text-xl font-black text-cloud-white uppercase tracking-tight leading-tight">{title}</h3>
            <p className="mt-2 text-sm text-cloud-gray leading-relaxed line-clamp-3">{desc}</p>
          </div>
          <div className="mt-4 flex items-end justify-between">
            {stat && <p className="text-sun-secondary text-xs font-black uppercase tracking-wider">{stat}</p>}
            <p className="text-cloud-gray/40 text-[10px] uppercase tracking-widest ml-auto">Hover →</p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col justify-between p-7
                     bg-gradient-sunrise shadow-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-10 h-1 bg-sky-deep/40 rounded-full" />
          <h3 className="text-xl font-black text-sky-deep uppercase tracking-tight mt-3 leading-tight">{title}</h3>
          <div className="flex-1 mt-4 bg-sky-deep/15 rounded-xl p-4">
            <p className="text-sky-deep/90 text-sm leading-relaxed">{moreInfo}</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onQuote && onQuote(); }}
            className="mt-5 w-full flex items-center justify-center gap-2
                       bg-sky-deep text-sun-primary font-black text-sm uppercase tracking-widest
                       py-3 rounded-xl hover:bg-sky-deep/80 transition-all duration-300 shadow-lg"
          >
            Get Free Quotation <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* ✅ Scoped — sirf .product-flip-card ko target karta hai */}
      <style>{`
        .product-flip-card:hover .product-flip-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;