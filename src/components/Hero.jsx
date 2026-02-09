import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 overflow-hidden"
    >
      {/* Club Logo */}
      <motion.img
        src="/club_logo.jpeg"
        alt="Nexora Logo"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-8 border-2 border-primary/30 shadow-lg shadow-primary/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Title NEXORA — X is yellow */}
      <motion.h1
        className="font-[var(--font-heading)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-widest glitch-text glow-text text-center"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        NE<span className="text-yellow">X</span>ORA
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg sm:text-xl md:text-2xl text-text-secondary tracking-wide text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Vibe Coding Club of NMIT
      </motion.p>

      {/* Floating Recruitment Banner — wide flag-style, sweeps left-to-right */}
      <motion.div
        className="mt-16 w-full max-w-4xl px-4 flex justify-center"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="poster-flag glass rounded-2xl px-10 sm:px-16 py-8 sm:py-10 text-center cursor-pointer hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 relative overflow-hidden"
          animate={{
            y: [0, -12, 0],
            rotateZ: [0, 0.5, 0, -0.5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Shimmer sweep effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <div className="poster-shimmer absolute -top-full -left-1/2 w-[200%] h-[200%] rotate-12 opacity-0" />
          </div>

          {/* Wave decorations on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 via-accent/40 to-primary/60 rounded-l-2xl" />
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/60 via-primary/40 to-accent/60 rounded-r-2xl" />

          <p className="font-[var(--font-heading)] text-primary font-bold text-xl sm:text-2xl md:text-3xl mb-3 tracking-wider">
            Stay Tuned
          </p>
          <p className="text-text-secondary text-base sm:text-lg md:text-xl">
            Recruitment Coming Soon
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-primary/60 text-sm font-medium tracking-widest uppercase">Live Soon</span>
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
