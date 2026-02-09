import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const sponsors = [
  { name: 'Sponsor One', logo: '/club_logo.jpeg' },
  { name: 'Sponsor Two', logo: '/club_logo.jpeg' },
  { name: 'Sponsor Three', logo: '/club_logo.jpeg' },
];

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sponsors" className="relative py-28">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Our <span className="text-primary">Sponsors</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="w-full max-w-xl mx-auto space-y-8">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 flex flex-col items-center gap-5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-white font-semibold text-lg">{sponsor.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-text-dim text-sm mt-12"
        >
          Interested in sponsoring Nexora? Reach out to us!
        </motion.p>

      </div>
    </section>
  );
};

export default Sponsors;
