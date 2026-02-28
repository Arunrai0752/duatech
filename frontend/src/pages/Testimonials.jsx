import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohit Sharma',
    location: 'Delhi, India',
    rating: 5,
    msg: 'Very professional installation. My 5kW plant works perfectly! Electricity bills reduced by 90% in just the first month.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    plant: '5 kW On-Grid',
  },
  {
    name: 'Priya Mehta',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    msg: 'Fast service and best quality panels. Highly recommended! The team was courteous and completed everything on time.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
    plant: '3 kW Hybrid',
  },
  {
    name: 'Varun Kapoor',
    location: 'Pune, Maharashtra',
    rating: 5,
    msg: 'Affordable pricing and premium branded materials! I was skeptical at first but the results speak for themselves.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    plant: '10 kW Off-Grid',
  },
  {
    name: 'Sunita Agarwal',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    msg: 'Duva Tech transformed our factory energy costs completely. ROI within 3 years — incredible value for money.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    plant: '50 kW Industrial',
  },
  {
    name: 'Amit Joshi',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    msg: 'The after-sales support is exceptional. Any query is resolved within hours. Best solar company in the region!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    plant: '7.5 kW Hybrid',
  },
  {
    name: 'Kavita Singh',
    location: 'Lucknow, UP',
    rating: 4,
    msg: 'Our village school now runs entirely on solar. Children study in well-lit classrooms all day. Thank you Duva Tech!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    plant: '15 kW Off-Grid',
  },
  {
    name: 'Rajesh Nair',
    location: 'Kochi, Kerala',
    rating: 5,
    msg: 'Installation was completed in a single day. The engineers were knowledgeable and explained every detail clearly.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&q=80',
    plant: '4 kW On-Grid',
  },
  {
    name: 'Meera Pillai',
    location: 'Hyderabad, Telangana',
    rating: 5,
    msg: 'Switched from diesel generator to solar hybrid system. Saving ₹18,000 per month. Best investment of my life!',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80',
    plant: '20 kW Hybrid',
  },
  {
    name: 'Deepak Verma',
    location: 'Bhopal, MP',
    rating: 5,
    msg: 'Top notch products and transparent pricing. No hidden charges whatsoever. Will definitely recommend to everyone.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    plant: '6 kW On-Grid',
  },
  {
    name: 'Ananya Reddy',
    location: 'Bangalore, Karnataka',
    rating: 5,
    msg: 'From consultation to commissioning, everything was seamless. Our apartment complex saves ₹45,000 every month now!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    plant: '100 kW Commercial',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={14}
        className={star <= rating ? 'fill-sun-secondary text-sun-secondary' : 'text-cloud-gray/30'}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  const t = testimonials[current];

  return (
    <section className="relative py-24 px-6 bg-sky-deep overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-sun-primary rounded-full blur-[180px] opacity-5" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-solar-panel rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sun-primary text-xs font-black uppercase tracking-[0.4em] mb-3">
            Customer Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-cloud-white leading-none">
            What Customers <span className="text-sun-primary animate-sun-glow">Say</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-solar-panel" />
            <span className="w-2 h-2 rounded-full bg-sun-primary animate-sun-glow" />
            <span className="w-12 h-px bg-solar-panel" />
          </div>
        </motion.div>

        {/* Carousel Card */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="w-full"
            >
              {/* Wide card — low height */}
              <div className="flex flex-col md:flex-row items-center gap-8 
                             bg-sky-deep/80 border border-solar-panel/20 rounded-2xl 
                             p-8 md:p-10 shadow-2xl backdrop-blur-sm
                             hover:border-sun-primary/30 transition-colors duration-500">

                {/* Left — Avatar + Info */}
                <div className="flex flex-col items-center md:items-start gap-3 md:w-56 shrink-0">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-sun-primary/40"
                    />
                    {/* Online dot */}
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-solar-panel rounded-full 
                                     border-2 border-sky-deep" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-cloud-white font-black text-lg tracking-tight">{t.name}</p>
                    <p className="text-cloud-gray text-xs mt-0.5">{t.location}</p>
                    <StarRating rating={t.rating} />
                    <span className="mt-2 inline-block text-xs bg-sun-primary/10 border border-sun-primary/20 
                                     text-sun-primary rounded-full px-3 py-0.5 font-bold">
                      {t.plant}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-32 bg-solar-panel/20 shrink-0" />

                {/* Right — Quote */}
                <div className="flex-1">
                  <Quote size={32} className="text-sun-primary/30 mb-3" />
                  <p className="text-cloud-white text-lg md:text-xl leading-relaxed font-light">
                    {t.msg}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5
                       w-10 h-10 rounded-full bg-sky-deep border border-solar-panel/30
                       text-cloud-white hover:border-sun-primary hover:text-sun-primary
                       flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5
                       w-10 h-10 rounded-full bg-sky-deep border border-solar-panel/30
                       text-cloud-white hover:border-sun-primary hover:text-sun-primary
                       flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-sun-primary'
                  : 'w-2 h-2 bg-cloud-gray/30 hover:bg-cloud-gray/60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;