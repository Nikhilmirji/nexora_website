import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 25,
    seconds: 0
  });

  useEffect(() => {
    // Set target time to 7 hours 25 minutes from now
    const targetTime = new Date().getTime() + (7 * 60 * 60 * 1000) + (25 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

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

        {/* Countdown Timer Container */}
        <motion.div
          className="mt-10 flex flex-col gap-6 items-center justify-center w-full max-w-4xl px-4"
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* Title */}
          <div className="text-center space-y-3">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-white tracking-wide"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(0,240,255,0.5)',
                  '0 0 40px rgba(0,240,255,0.8)',
                  '0 0 20px rgba(0,240,255,0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Results Announcement
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Countdown Display */}
          <motion.div 
            className="relative glass border-2 border-primary/30 rounded-2xl p-6 sm:p-8 md:p-10 w-full shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl" />
            
            <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {/* Hours */}
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg" />
                  <div className="relative bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-3 sm:p-4 md:p-6 border border-primary/40 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
                    <motion.span 
                      key={timeLeft.hours}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-3xl sm:text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                    >
                      {String(timeLeft.hours).padStart(2, '0')}
                    </motion.span>
                  </div>
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-text-secondary font-[var(--font-heading)] uppercase tracking-wider">Hours</span>
              </motion.div>

              {/* Minutes */}
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow/20 blur-xl rounded-lg" />
                  <div className="relative bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-3 sm:p-4 md:p-6 border border-yellow/40 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
                    <motion.span 
                      key={timeLeft.minutes}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-3xl sm:text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]"
                    >
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </motion.span>
                  </div>
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-text-secondary font-[var(--font-heading)] uppercase tracking-wider">Minutes</span>
              </motion.div>

              {/* Seconds */}
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg" />
                  <div className="relative bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-3 sm:p-4 md:p-6 border border-primary/40 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
                    <motion.span 
                      key={timeLeft.seconds}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-3xl sm:text-4xl md:text-6xl font-[var(--font-heading)] font-bold text-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                    >
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </motion.span>
                  </div>
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-text-secondary font-[var(--font-heading)] uppercase tracking-wider">Seconds</span>
              </motion.div>
            </div>

            {/* Pulsing border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-primary/0"
              animate={{
                borderColor: ['rgba(0,240,255,0)', 'rgba(0,240,255,0.5)', 'rgba(0,240,255,0)'],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Motivational Text */}
          <motion.p
            className="text-text-secondary text-sm sm:text-base md:text-lg text-center font-[var(--font-heading)] tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Stay tuned for the big reveal! 🎉
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
