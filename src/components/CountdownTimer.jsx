import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    // If you need a specific date so it doesn't reset every day:
    // const target = new Date('2026-02-21T20:00:00');
    const target = new Date();
    target.setHours(20, 0, 0, 0);

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const difference = target.getTime() - currentTime;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
        setIsEnded(false);
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        setIsEnded(true);
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

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

      {/* Countdown Display */}
      {isEnded ? (
        <motion.div
           className="relative bg-white/5 backdrop-blur-md border-2 border-yellow/30 rounded-2xl p-8 sm:p-10 md:p-14 w-full shadow-[0_0_30px_rgba(255,204,0,0.2)] transition-all duration-300 flex flex-col items-center justify-center gap-6"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 via-transparent to-accent/5 rounded-2xl pointer-events-none" />
          <h3 className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-yellow" style={{ textShadow: '0 0 20px rgba(255,204,0,0.8)' }}>
            Results are Out !
          </h3>
          
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-yellow/50 pointer-events-none"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      ) : (
        <motion.div 
          className="relative bg-white/5 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-6 sm:p-8 md:p-10 w-full shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          style={{ willChange: 'transform' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg pointer-events-none" />
                <div className="relative bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-3 sm:p-4 md:p-6 border border-primary/40 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
                  <span className="block text-center text-3xl sm:text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-primary shadow-primary" style={{ textShadow: '0 0 10px rgba(0,240,255,0.8)' }}>
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
              </div>
              <span className="mt-2 text-xs sm:text-sm md:text-base text-text-secondary font-[var(--font-heading)] uppercase tracking-wider">Hours</span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow/20 blur-xl rounded-lg pointer-events-none" />
                <div className="relative bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-3 sm:p-4 md:p-6 border border-yellow/40 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
                  <span className="block text-center text-3xl sm:text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-yellow" style={{ textShadow: '0 0 10px rgba(255,184,0,0.8)' }}>
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
              </div>
              <span className="mt-2 text-xs sm:text-sm md:text-base text-text-secondary font-[var(--font-heading)] uppercase tracking-wider">Minutes</span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg pointer-events-none" />
                <div className="relative bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-3 sm:p-4 md:p-6 border border-primary/40 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
                  <span className="block text-center text-3xl sm:text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-primary" style={{ textShadow: '0 0 10px rgba(0,240,255,0.8)' }}>
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>
              <span className="mt-2 text-xs sm:text-sm md:text-base text-text-secondary font-[var(--font-heading)] uppercase tracking-wider">Seconds</span>
            </div>
          </div>

          {/* Pulsing border effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-primary/50 pointer-events-none"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ willChange: 'opacity' }}
          />
        </motion.div>
      )}

      {isEnded ? (
        <motion.button
          onClick={() => {
            const el = document.getElementById('socials');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-yellow text-lg sm:text-xl md:text-2xl text-center font-[var(--font-heading)] font-bold tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ textShadow: '0 0 10px rgba(255,204,0,0.5)' }}
        >
          Check out our Instagram !
        </motion.button>
      ) : (
        <motion.p
          className="text-text-secondary text-sm sm:text-base md:text-lg text-center font-[var(--font-heading)] tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Stay tuned for the big reveal! 🎉
        </motion.p>
      )}
    </motion.div>
  );
}
