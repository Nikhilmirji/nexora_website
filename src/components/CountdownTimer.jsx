import { motion } from 'framer-motion';

export default function CountdownTimer() {
  return (
    <motion.div
      className="mt-10 flex flex-col gap-6 items-center justify-center w-full max-w-4xl px-4"
      initial={{ y: 30, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      {/* Title */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-white tracking-wide relative z-10" style={{ textShadow: '0 0 20px rgba(0,240,255,0.5)' }}>
          Recruitment Results Announcement
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
      </div>

      <motion.div
        className="relative bg-white/5 backdrop-blur-md border-2 border-yellow/30 rounded-2xl p-8 sm:p-10 md:p-14 w-full shadow-[0_0_30px_rgba(255,204,0,0.2)] transition-all duration-300 flex flex-col items-center justify-center gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 via-transparent to-accent/5 rounded-2xl pointer-events-none" />
        
        <h3 className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-yellow" style={{ textShadow: '0 0 20px rgba(255,204,0,0.8)' }}>
          Results have been Announced !
        </h3>
        
        <motion.button
          onClick={() => {
            const el = document.getElementById('socials');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="relative z-10 text-white text-lg sm:text-xl md:text-2xl text-center font-[var(--font-heading)] font-bold tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
        >
          Check out our <span className="text-primary" style={{ textShadow: '0 0 10px rgba(0,240,255,0.8)' }}>Instagram</span> by clicking here !
        </motion.button>
        
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-yellow/50 pointer-events-none"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
