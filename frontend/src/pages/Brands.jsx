import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Link as LinkIcon, HardHat } from 'lucide-react';

// ─────────────────────────────────────────────────────────
// IMAGES — apni real images yahan import karo
// import TataSolar   from '../assets/brands/tata_solar.png';
// import AdaniGreen  from '../assets/brands/adani_green.png';
// import Waaree      from '../assets/brands/waaree.png';
// import Rayzon      from '../assets/brands/rayzon.png';
// import VikramSolar from '../assets/brands/vikram_solar.png';
// import LoomSolar   from '../assets/brands/loom_solar.png';
// import Sungrow     from '../assets/brands/sungrow.png';
// import Growatt     from '../assets/brands/growatt.png';
// import Luminous    from '../assets/brands/luminous.png';
// import Solis       from '../assets/brands/solis.png';
// import Goodwe      from '../assets/brands/goodwe.png';
// import Microtek    from '../assets/brands/microtek.png';
// import Polycab     from '../assets/brands/polycab.png';
// import Kei         from '../assets/brands/kei.png';
// import Havells     from '../assets/brands/havells.png';
// import RrKabel     from '../assets/brands/rr_kabel.png';
// import Finolex     from '../assets/brands/finolex.png';
// import Vguard      from '../assets/brands/vguard.png';
// ─────────────────────────────────────────────────────────

const cb = (domain) => `https://logo.clearbit.com/${domain}`;

const brandData = {
  solar: [
    { name: "TATA SOLAR",   image: cb("tatapower.com")       },
    { name: "ADANI GREEN",  image: cb("adanigreenenergy.com") },
    { name: "WAAREE",       image: cb("waaree.com")           },
    { name: "RAYZON",       image: cb("rayzonenergy.com")     },
    { name: "VIKRAM SOLAR", image: cb("vikramsolar.com")      },
    { name: "LOOM SOLAR",   image: cb("loomsolar.com")        },
  ],
  inverters: [
    { name: "SUNGROW",  image: cb("sungrowpower.com")   },
    { name: "GROWATT",  image: cb("growatt.com")        },
    { name: "LUMINOUS", image: cb("luminousindia.com")  },
    { name: "SOLIS",    image: cb("solisinverters.com") },
    { name: "GOODWE",   image: cb("goodwe.com")         },
    { name: "MICROTEK", image: cb("microtekdirect.com") },
  ],
  cables: [
    { name: "POLYCAB",  image: cb("polycab.com")  },
    { name: "KEI",      image: cb("keicables.com")},
    { name: "HAVELLS",  image: cb("havells.com")  },
    { name: "RR KABEL", image: cb("rrkabel.com")  },
    { name: "FINOLEX",  image: cb("finolex.com")  },
    { name: "V-GUARD",  image: cb("vguard.in")    },
  ],
  structure: [
    { name: "HDG STRUCTURE", image: null },
    { name: "GALVANISED",    image: null },
    { name: "ALUMINUM RAIL", image: null },
    { name: "MOUNTING KIT",  image: null },
    { name: "Z-PURLIN",      image: null },
    { name: "ROOF CLAMP",    image: null },
  ],
};

// ── Single brand item — inline, no component
const BrandItem = ({ name, image, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: idx * 0.06 }}
    whileHover={{ y: -5, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="flex flex-col items-center gap-3  cursor-pointer group"
  >
    {/* Logo box */}
    <div className="w-full aspect-square rounded-2xl overflow-hidden
                    bg-cloud-white/5 border border-solar-panel/15
                    flex items-center justify-center p-4
                    group-hover:border-sun-primary/40 group-hover:bg-cloud-white/10
                    transition-all duration-300 no-flip
                    group-hover:shadow-[0_8px_24px_rgba(255,179,71,0.15)]">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      ) : (
        // Placeholder jab image null ho
        <div className="w-10 h-10 rounded-lg bg-solar-panel/20 border border-solar-panel/30
                        flex items-center justify-center">
          <span className="text-sun-primary/50 text-xs font-black">
            {name.charAt(0)}
          </span>
        </div>
      )}
    </div>

    {/* Name */}
    <span className="text-[10px] font-black text-cloud-gray group-hover:text-sun-primary
                     tracking-[0.2em] uppercase transition-colors duration-300 text-center">
      {name}
    </span>
  </motion.div>
);

// ── Brand Section — inline
const BrandSection = ({ title, id, brands, sectionIcon: SectionIcon }) => (
  <section id={id} className="py-16 border-b border-solar-panel/10 scroll-mt-24">
    {/* Header */}
    <div className="flex items-center gap-4 mb-10">
      <div className="bg-sun-primary/10 p-3 rounded-xl text-sun-primary border border-sun-primary/20">
        <SectionIcon size={24} />
      </div>
      <div>
        <h2 className="text-xl font-black text-cloud-white uppercase tracking-tighter">{title}</h2>
        <div className="w-8 h-0.5 bg-sun-primary mt-1 rounded-full" />
      </div>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {brands.map((brand, idx) => (
        <BrandItem key={idx} name={brand.name} image={"https://www.indianchemicalnews.com/public/uploads/news/2022/12/15858/adani_solar1.jpeg"} idx={idx} />
      ))}
    </div>
  </section>
);

// ── Main Page
const Brands = () => (
  <div className="bg-sky-deep min-h-screen pt-32 pb-20 px-6 md:px-16 relative overflow-hidden">

    {/* Background glows */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[30%] bg-sun-primary rounded-full blur-[200px] opacity-5" />
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-solar-panel rounded-full blur-[150px] opacity-8" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">

      {/* Header */}
      <header className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-sun-primary/10 border border-sun-primary/20
                          rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-sun-primary animate-sun-glow" />
            <span className="text-sun-primary text-xs font-black uppercase tracking-[0.35em]">
              Trusted Partners
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-cloud-white leading-none">
            OUR <span className="text-sun-primary animate-sun-glow">BRAND</span> PARTNERS
          </h1>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-16 h-px bg-solar-panel/40" />
            <span className="w-3 h-3 rounded-full border-2 border-sun-primary animate-sun-glow" />
            <span className="w-16 h-px bg-solar-panel/40" />
          </div>

          <p className="text-cloud-gray tracking-[0.25em] uppercase text-sm mt-5 max-w-xl mx-auto">
            Industrial Grade Components For High-Performance Solar Plants
          </p>
        </motion.div>
      </header>

      {/* Sections */}
      <BrandSection title="Solar Panels"        id="solar-panels" sectionIcon={Sun}      brands={brandData.solar}     />
      <BrandSection title="Solar Inverters"     id="inverters"    sectionIcon={Zap}      brands={brandData.inverters} />
      <BrandSection title="Cables & Wires"      id="cables"       sectionIcon={LinkIcon} brands={brandData.cables}    />
      <BrandSection title="Mounting Structures" id="structure"    sectionIcon={HardHat}  brands={brandData.structure} />

    </div>
  </div>
);

export default Brands;