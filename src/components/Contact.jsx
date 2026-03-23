import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nexora.nmit',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nexora-nmit-88953a39b',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/NexoraNmit',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-28">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-text-secondary">
            Follow us on social media to stay updated with everything Nexora.
          </p>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 relative z-10 mt-12">
          {/* Left Column: Map */}
          <div className="w-full order-2 lg:order-1">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(0,240,255,0.15)] group relative"
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <iframe
                src="https://maps.google.com/maps?q=Nitte+Meenakshi+Institute+of+Technology&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NMIT Location Map"
                className="relative z-0 grayscale-[0.3] invert-[0.9] hue-rotate-180 contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:invert-0 group-hover:hue-rotate-0"
              ></iframe>
            </motion.div>
          </div>

          {/* Right Column: Socials */}
          <div className="w-full flex flex-col items-center justify-center order-1 lg:order-2 h-full">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-8 font-[var(--font-heading)] text-center hidden lg:block"
            >
              Connect With <span className="text-primary">Us</span>
            </motion.h3>
            
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-2xl p-6 sm:p-8 flex flex-col items-center text-text-secondary hover:text-primary hover:border-primary/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 hover:-translate-y-2 group w-[120px] sm:w-[140px]"
                  title={social.name}
                >
                  <div className="group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)] transition-all duration-300 mb-4 scale-110 sm:scale-125">
                    {social.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide">{social.name}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-text-dim text-sm">
            &copy; {new Date().getFullYear()} Nexora — Vibe Coding Club of NMIT. All rights reserved.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
