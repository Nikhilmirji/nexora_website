import { motion } from 'framer-motion';

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
      >
        <img
          src="/assets/logo.png"
          alt="Nexora Logo"
          className="w-[clamp(140px,25vw,300px)] h-[clamp(140px,25vw,300px)] object-contain rounded-full drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        />
      </motion.div>

      {/* Title NEXORA — X is yellow */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center -mt-4 sm:-mt-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        <h1
          className="font-[var(--font-heading)] font-black text-white tracking-widest glitch-text glow-text text-center leading-none"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
        >
          NE<span className="text-yellow">X</span>ORA
        </h1>
        
        {/* Subtitle */}
        <motion.p
          className="mt-2 text-text-secondary tracking-wide text-center"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Vibe Coding Club of NMIT
        </motion.p>

        {/* Buttons Container */}
        <motion.div
          className="mt-8 flex flex-col gap-4 items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* Label Text */}
          <p className="text-primary text-base sm:text-lg font-[var(--font-heading)] font-bold tracking-wider text-center drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
            Click here to open the google forms for registrations :
          </p>

          {/* Register Now Button */}
          <a
            href="https://forms.gle/FpbvEwM9DjpdEFkm6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-black font-[var(--font-heading)] font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Register Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://chat.whatsapp.com/JyObpf4rckXC5YuEcRvK9h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 glass border border-green-500/30 text-green-400 font-[var(--font-heading)] font-semibold text-lg rounded-xl hover:bg-green-500/10 hover:border-green-400 hover:text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Join WhatsApp Group
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Recruitment Banner — wide flag-style, sweeps left-to-right */}
      <motion.div
        className="mt-4 sm:mt-8 w-full max-w-[80vw] md:max-w-md flex justify-center z-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-full flex flex-col items-center"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Poster Container */}
          <div className="relative w-full text-center flex flex-col items-center justify-center p-0 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.25)] border-2 border-primary/40 hover:shadow-[0_0_50px_rgba(0,240,255,0.4)] transition-shadow duration-300">
            {/* Glass background for poster container */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
            
            {/* Poster Image */}
            <img
              src="/assets/Recruitment_poster.png"
              alt="Recruitment Poster"
              className="relative z-10 w-full h-auto object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2, duration: 1 }, y: { duration: 2, repeat: Infinity } }}
        onClick={() => {
          const recruitmentSection = document.getElementById('recruitment');
          if (recruitmentSection) recruitmentSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
        <div className="w-5 h-9 sm:w-6 sm:h-10 rounded-full border-2 border-white/20 flex justify-center pt-2 bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
