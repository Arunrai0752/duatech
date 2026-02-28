import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, HardHat, Layers, Wind } from 'lucide-react';
import ProductCard from '../components/Cards/ProductCard';

const products = [
  {
    title: 'On-Grid Solar System',
    icon: Sun,
    tag: 'Most Popular',
    stat: 'Up to 90% bill savings',
    desc: 'Directly connected to the utility grid. Zero electricity bills via net-metering with minimal maintenance.',
    moreInfo: 'A battery-less system that syncs with the government electricity grid. Ideal for urban homes and factories with stable power supply. Earn credits by exporting surplus power back to the grid.',
  },
  {
    title: 'Off-Grid Solutions',
    icon: Battery,
    tag: '24/7 Power',
    stat: '100% energy independence',
    desc: 'Complete energy independence with high-capacity battery storage. Works even during total blackouts.',
    moreInfo: 'A standalone system powered by heavy-duty battery banks. Best suited for remote locations or areas with frequent power cuts. Batteries typically last 5–7 years before replacement.',
  },
  {
    title: 'Hybrid Systems',
    icon: Zap,
    tag: 'Best of Both',
    stat: 'Grid + backup combined',
    desc: 'Grid connection with battery backup — save on bills AND stay powered during outages.',
    moreInfo: 'Combines net-metering benefits with battery backup. Perfect for critical setups like hospitals, data centers, or businesses where zero downtime is non-negotiable.',
  },
  {
    title: 'AMC & Maintenance',
    icon: HardHat,
    tag: 'Pro Care',
    stat: 'Up to 25% efficiency boost',
    desc: 'Professional industrial cleaning and health checks. Keep your plant at peak performance year-round.',
    moreInfo: 'Scheduled deep cleaning, panel inspection, inverter diagnostics, and performance reporting. Keeps your system generating at maximum output and extends component lifespan.',
  },
  {
    title: 'Solar Water Heater',
    icon: Wind,
    tag: 'Eco Friendly',
    stat: 'Save ₹8000/year',
    desc: 'Harness solar energy to heat water for homes and commercial kitchens with zero running cost.',
    moreInfo: 'Pressurized and non-pressurized systems available. Suitable for residential apartments, hotels, and hospitals. Reduces water heating electricity cost by up to 80%.',
  },
  {
    title: 'Solar Street Lights',
    icon: Layers,
    tag: 'Smart & Autonomous',
    stat: 'Zero grid dependency',
    desc: 'Fully autonomous LED street lights powered by solar. No wiring, no electricity bills, no grid required.',
    moreInfo: 'Integrated panel, battery, and sensor. Auto on/off based on ambient light. Ideal for highways, colonies, parking lots, and rural roads. Lifespan exceeding 10 years.',
  },
];

const Products = () => {
  const leadFormRef = useRef(null);

  const scrollToLeadForm = () => {
    const leadForm = document.getElementById('lead-form');
    if (leadForm) leadForm.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sky-deep py-24 px-6 relative overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left solar glow */}
        <div className="absolute -top-20 -left-20 w-[45%] h-[50%] bg-sun-primary rounded-full blur-[200px] opacity-5" />
        {/* Bottom-right green glow */}
        <div className="absolute -bottom-20 -right-20 w-[40%] h-[45%] bg-solar-panel rounded-full blur-[180px] opacity-8" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#FFB347 1px, transparent 1px), linear-gradient(90deg, #FFB347 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 bg-sun-primary/10 border border-sun-primary/20
                          rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-sun-primary animate-sun-glow" />
            <span className="text-sun-primary text-xs font-black uppercase tracking-[0.35em]">
              Our Solutions
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-cloud-white leading-none">
            Industrial{' '}
            <span className="relative inline-block">
              <span className="text-sun-primary animate-sun-glow">Solar</span>
              {/* Underline accent */}
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-solar rounded-full" />
            </span>
            <br />
            <span className="text-cloud-gray/50 text-4xl md:text-5xl">Services</span>
          </h2>

          <p className="mt-8 text-cloud-gray max-w-2xl mx-auto text-sm leading-loose tracking-wide">
            From rooftop residential to megawatt industrial — we engineer solar solutions built for
            India's harshest conditions and highest demands.
            <br />
            <span className="text-sun-secondary font-semibold">Hover over each card</span> to explore full details.
          </p>

          {/* Stat bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {[
              { val: '500+', label: 'Installations' },
              { val: '10 MW+', label: 'Capacity Deployed' },
              { val: '98%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.val} className="text-center">
                <p className="text-2xl font-black text-sun-primary">{s.val}</p>
                <p className="text-xs text-cloud-gray uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Decorative separator */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="w-16 h-px bg-solar-panel/40" />
            <span className="w-3 h-3 rounded-full border-2 border-sun-primary animate-sun-glow" />
            <span className="w-16 h-px bg-solar-panel/40" />
          </div>
        </motion.div>

        {/* ── Product Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <ProductCard
                title={product.title}
                icon={product.icon}
                tag={product.tag}
                stat={product.stat}
                desc={product.desc}
                moreInfo={product.moreInfo}
                onQuote={scrollToLeadForm}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 rounded-2xl bg-gradient-sunrise p-8 md:p-12 flex flex-col md:flex-row
                     items-center justify-between gap-6 shadow-2xl"
        >
          <div>
            <p className="text-sky-deep/60 text-xs font-black uppercase tracking-[0.3em] mb-1">
              Ready to switch?
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-sky-deep uppercase tracking-tight">
              Get Your Free Solar Audit
            </h3>
            <p className="text-sky-deep/70 text-sm mt-1">
              Our engineers will assess your site and recommend the perfect system.
            </p>
          </div>
          <button
            onClick={scrollToLeadForm}
            className="shrink-0 bg-sky-deep text-sun-primary font-black uppercase tracking-widest
                       text-sm px-10 py-4 rounded-xl hover:bg-sky-deep/80 transition-all duration-300
                       shadow-lg flex items-center gap-2 group"
          >
            Book Free Audit
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;