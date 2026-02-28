import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';

const projectsData = [
  { id: 1, title: 'MW Scale Factory Installation', location: 'Industrial Area, Phase-II', status: 'Completed', kw: '1.2 MW' },
  { id: 2, title: 'Rooftop Residential Colony', location: 'Sector 14, Gurugram', status: 'Completed', kw: '450 KW' },
  { id: 3, title: 'Agricultural Solar Pumping', location: 'Rajasthan, Barmer', status: 'Completed', kw: '80 KW' },
  { id: 4, title: 'Commercial Mall Rooftop', location: 'Noida, Sector 62', status: 'Completed', kw: '600 KW' },
  { id: 5, title: 'Off-Grid Village Electrification', location: 'Jharkhand, Dumka', status: 'Completed', kw: '120 KW' },
  { id: 6, title: 'Hybrid Hospital Backup', location: 'Bhopal, MP', status: 'Completed', kw: '200 KW' },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-sky-deep py-20 pt-28 px-6 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-8%] right-[-8%] w-[35%] h-[35%] bg-sun-primary rounded-full blur-[180px] opacity-10" />
        <div className="absolute bottom-[-8%] left-[-8%] w-[30%] h-[30%] bg-solar-panel rounded-full blur-[160px] opacity-10" />
      </div>

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sun-primary text-xs font-black uppercase tracking-[0.4em] mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-center uppercase tracking-tighter text-cloud-white leading-none">
            PROJECT{' '}
            <span className="text-sun-primary animate-sun-glow">PORTFOLIO</span>
          </h2>
          <p className="mt-4 text-cloud-gray max-w-xl mx-auto text-sm leading-relaxed">
            Real installations. Real impact. From rooftops to industrial MW-scale solar projects across India.
          </p>
          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-solar-panel" />
            <span className="w-2 h-2 rounded-full bg-sun-primary animate-sun-glow" />
            <span className="w-12 h-px bg-solar-panel" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-solar-panel/20 
                         bg-sky-deep/80 backdrop-blur-sm hover:border-sun-primary/40
                         shadow-lg hover:shadow-sun-primary/10 transition-all duration-500"
            >
              {/* Image / Placeholder */}
              <div className="relative h-56 w-full overflow-hidden bg-gradient-sky flex items-center justify-center">
                {/* Placeholder content — replace with <img> when images are ready */}
                <div className="absolute inset-0 bg-gradient-sunrise opacity-60" />
                <div className="relative z-10 text-center px-4">
                  <p className="text-sky-deep/70 text-xs font-black uppercase tracking-widest">
                    Case Study
                  </p>
                  <p className="text-sky-deep font-black text-2xl mt-1 tracking-tighter">
                    {project.kw}
                  </p>
                </div>

                {/* KW badge top-right */}
                <div className="absolute top-3 right-3 bg-sky-deep/80 backdrop-blur-sm 
                               border border-sun-primary/30 rounded-full px-3 py-1">
                  <span className="text-sun-primary text-xs font-black">{project.kw}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-sky-deep/40 opacity-0 group-hover:opacity-100 
                               transition-opacity duration-500" />
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={13} className="text-solar-panel-light" />
                  <span className="text-solar-panel-light text-xs font-black uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-black text-cloud-white uppercase tracking-tight leading-tight 
                               group-hover:text-sun-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex items-center gap-1 mt-2">
                  <MapPin size={12} className="text-sun-primary/70" />
                  <p className="text-cloud-gray text-xs">{project.location}</p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 w-0 group-hover:w-full h-px bg-gradient-solar 
                               transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;