import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const sponsors = [
  { name: 'Sponsor One', logo: '/assets/club_logo.jpeg' },
  { name: 'Sponsor Two', logo: '/assets/club_logo.jpeg' },
  { name: 'Sponsor Three', logo: '/assets/club_logo.jpeg' },
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

        <div className="w-full max-w-xl mx-auto flex justify-center items-center min-h-[200px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-xl px-8 py-6 sm:px-12 sm:py-8 flex items-center justify-center max-w-full"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white animate-pulse tracking-widest uppercase font-[var(--font-heading)] text-center">
              Coming Soon!
            </h3>
          </motion.div>
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
