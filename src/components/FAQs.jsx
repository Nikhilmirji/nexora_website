import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const faqData = [
  {
    question: 'What is Vibe Coding?',
    answer:
      'Vibe Coding is a philosophy that blends creativity, collaboration, and fun into the coding process. It\'s about building cool projects together in a relaxed, energetic environment — no stress, just vibes.',
  },
  {
    question: 'Who can join Nexora?',
    answer:
      'Everyone! Nexora is open to all NMIT students regardless of branch, year, or skill level. Whether you\'ve never written a line of code or you\'re a seasoned developer, you\'re welcome here.',
  },
  {
    question: 'Do I need prior coding experience?',
    answer:
      'Not at all. We have workshops and mentoring sessions designed for absolute beginners. You\'ll learn by building real projects alongside experienced peers.',
  },
  {
    question: 'How is Nexora different from other clubs?',
    answer:
      'We focus on the experience, not just the output. Our events are designed to be fun, inclusive, and hands-on. We value vibes as much as we value code quality.',
  },
  {
    question: 'How does recruitment work?',
    answer:
      'Recruitment opens periodically. You\'ll fill out a form, participate in a casual interaction round, and show us your enthusiasm. No competitive coding tests — we want to see your passion.',
  },
];

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass rounded-xl overflow-hidden mb-4 hover:border-primary/20 transition-colors"
    >
      <button
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
        className="w-full flex items-center justify-between px-7 py-5 text-left"
      >
        <span className="text-white font-medium pr-4">{faq.question}</span>
        <span
          className={`text-primary text-2xl font-light transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="px-7 pb-6 text-text-secondary leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faqs" className="relative py-28">
      <div className="w-full max-w-3xl mx-auto px-6 sm:px-10 lg:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            F<span className="text-primary">A</span>Qs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="w-full">
          {isInView &&
            faqData.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
        </div>

      </div>
    </section>
  );
};

export default FAQs;
