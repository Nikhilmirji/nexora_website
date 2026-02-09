import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cards = [
  {
    title: 'Why Vibe Coding Club',
    points: [
      'Build real-world projects that matter',
      'Connect with like-minded students',
      'Learn cutting-edge technologies',
      'A community over competition',
    ],
  },
  {
    title: 'How We Are Different',
    points: [
      'No gatekeeping — all skill levels welcome',
      'Focus on fun & creativity, not just output',
      'Hands-on workshops over boring lectures',
      'A culture of collaboration & vibes',
    ],
  },
  {
    title: 'What You Will Learn',
    points: [
      'Full-stack web development',
      'UI/UX design principles',
      'Open-source contribution',
      'Team building & project management',
    ],
  },
  {
    title: 'What We Expect From You',
    points: [
      'Curiosity and willingness to learn',
      'Active participation in events',
      'Respect for fellow members',
      'Consistent effort over perfection',
    ],
  },
];

const Recruitment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="recruitment" className="relative py-28">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Join <span className="text-accent-bright">Nexora</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-5" />
          <p className="text-text-secondary max-w-lg">
            Ready to be part of something exciting? Here's everything you need to know.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="w-full max-w-5xl mx-auto mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-[var(--font-heading)] text-lg font-semibold text-accent-bright mb-5">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-text-secondary text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <a
            href="https://forms.gle/FpbvEwM9DjpdEFkm6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent hover:bg-accent-bright text-white font-[var(--font-heading)] font-semibold text-lg rounded-xl btn-glow transition-all duration-300 hover:scale-105"
          >
            Register Now
          </a>
          <p className="text-text-dim text-sm mt-4">
            Google Form link will be updated once recruitment opens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Recruitment;
