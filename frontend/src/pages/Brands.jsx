import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, Zap, Link as LinkIcon, HardHat, Award, 
  ShieldCheck, Factory, Cpu, Box 
} from 'lucide-react';

const BrandSection = ({ title, id, brands, sectionIcon: SectionIcon }) => (
  <section id={id} className="py-20 border-b border-white/10 scroll-mt-24">
    <div className="flex items-center gap-4 mb-12">
      <div className="bg-[#00FF88]/20 p-4 rounded-xl text-[#00FF88] border border-[#00FF88]/30">
        <SectionIcon size={32} />
      </div>
      <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
        {title}
      </h2>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {brands.map((brand, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center gap-4 text-center border border-white/10 rounded-[20px] hover:border-[#00FF88] hover:bg-white/10 transition-all cursor-pointer group"
        >
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#00FF88] group-hover:bg-[#00FF88]/10 transition-all border border-white/5">
            {brand.customIcon ? <brand.customIcon size={30} /> : <Award size={30} />}
          </div>
          <span className="text-xs font-bold text-gray-300 group-hover:text-white tracking-widest uppercase transition-colors">
            {brand.name}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

const Brands = () => {
  const brandData = {
    solar: [
      { name: "TATA SOLAR" }, { name: "ADANI GREEN" }, { name: "WAAREE" },
      { name: "RAYZON" }, { name: "POLYCAB" }, { name: "VIKRAM SOLAR" }
    ],
    inverters: [
      { name: "SUNGROW", customIcon: Cpu }, { name: "GROWATT", customIcon: Zap },
      { name: "LUMINOUS", customIcon: Zap }, { name: "SOLIS", customIcon: Cpu },
      { name: "GOODWE", customIcon: Zap }, { name: "MICROTEK", customIcon: Zap }
    ],
    cables: [
      { name: "POLYCAB", customIcon: LinkIcon }, { name: "KEI", customIcon: LinkIcon },
      { name: "HAVELLS", customIcon: LinkIcon }, { name: "RR KABEL", customIcon: LinkIcon },
      { name: "FINOLEX", customIcon: LinkIcon }, { name: "V-GUARD", customIcon: LinkIcon }
    ],
    structure: [
      { name: "HDG STRUCTURE", customIcon: Factory }, { name: "GALVANISED", customIcon: Box },
      { name: "ALUMINUM RAIL", customIcon: HardHat }, { name: "MOUNTING KIT", customIcon: ShieldCheck },
      { name: "Z-PURLIN", customIcon: Factory }, { name: "ROOF CLAMP", customIcon: HardHat }
    ]
  };

  return (
    <div className="bg-[#0A1F44] min-h-screen pt-32 pb-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              OUR <span className="text-[#00FF88]">BRAND PARTNERS</span>
            </h1>
            <div className="h-1.5 w-24 bg-[#00FF88] mx-auto mb-6"></div>
            <p className="text-gray-400 tracking-[0.3em] uppercase text-sm font-medium">
              Industrial Grade Components For High-Performance Solar Plants
            </p>
          </motion.div>
        </header>
        
        <BrandSection title="Solar Panels" id="solar-panels" sectionIcon={Sun} brands={brandData.solar} />
        <BrandSection title="Solar Inverters" id="inverters" sectionIcon={Zap} brands={brandData.inverters} />
        <BrandSection title="Cables & Wires" id="cables" sectionIcon={LinkIcon} brands={brandData.cables} />
        <BrandSection title="Mounting Structures" id="structure" sectionIcon={HardHat} brands={brandData.structure} />
      </div>
    </div>
  );
};

export default Brands;
