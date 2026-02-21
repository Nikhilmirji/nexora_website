import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden gap-4 sm:gap-6"
    >
      {/* Club Logo */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/assets/logo.png"
          alt="Nexora Logo"
          className="w-[clamp(140px,25vw,300px)] h-[clamp(140px,25vw,300px)] object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        />
      </motion.div>

      {/* Title NEXORA — X is yellow */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center -mt-4 sm:-mt-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Optimized: Removed continuous glitch-text & glow-text animations for smooth scroll performance. Using static shadow that visually looks like a glow */}
        <h1
          className="font-[var(--font-heading)] font-black text-white tracking-widest text-center leading-none"
          style={{ 
            fontSize: 'clamp(3.5rem, 12vw, 9rem)', 
            textShadow: '0 0 20px rgba(0,240,255,0.6), 0 0 40px rgba(0,240,255,0.2)' 
          }}
        >
          NE<span className="text-yellow" style={{ textShadow: '0 0 20px rgba(255,204,0,0.6)' }}>X</span>ORA
        </h1>
        
        {/* Subtitle */}
        <motion.p
          className="mt-2 text-text-secondary tracking-wide text-center"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', willChange: 'transform, opacity' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Vibe Coding Club of NMIT
        </motion.p>

        {/* Isolated Countdown Component that handles its own 1s state without re-rendering Hero */}
        <CountdownTimer />
      </motion.div>
    </section>
  );
};

export default Hero;
