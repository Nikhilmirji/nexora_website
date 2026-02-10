import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const events = [
  '/image1.jpeg',
  '/image2.jpeg',
  '/image3.jpeg',
  '/image4.jpeg',
  '/image5.jpeg',
  '/image6.jpeg',
  '/image7.jpeg',
];

const foundingMembers = [
  { name: 'Dr. Nalini N.', role: 'Professor, Dept. of CSE, NMIT', img: '/found1.jpeg' },
];

const facultyAdvisors = [
  { name: 'Dr.Vijaya Shetty S', role: 'Professor and Head, Dept. of CSE, NMIT', img: '/found2.jpeg' },
  { name: 'Dr.Sudheer Reddy J', role: 'Professor and Director - Curriculum Development and Academics, NDU', img: '/found3.jpeg' },
];

const memberRows = [
  [
    { name: 'Rudraksh Gajendra Shende', role: 'Club Lead', img: '/lead.jpeg' },
    { name: 'Patil Aryan', role: 'Co-Lead', img: '/co_lead.jpeg' },
  ],
  [
    { name: 'Niranjan Chennakrishnasrinivasan', role: 'General Secretary', img: '/general_secratary.jpeg' },
    { name: 'Rudransh Karan', role: 'Sponsorship Lead', img: '/sponsor_lead.jpeg' },
  ],
  [
    { name: 'Prathamesh D M', role: 'Social Media Lead', img: '/social_media_lead.jpeg' },
    { name: 'Dhananjaya K', role: 'Design Lead', img: '/design_lead.jpeg' },
  ],
  [
    { name: 'Gurucharan M.', role: 'Tech Lead', img: '/tech_lead.jpeg' },
    { name: 'Nikhil Mirji', role: 'Operations Lead', img: '/operation_lead.jpeg' },
  ],
];

const MemberCard = ({ member, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
    className="glass rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 w-full"
  >
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/30 bg-white/5">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h4 className="font-semibold text-white text-xs sm:text-sm md:text-base mb-1.5 break-words max-w-full px-1">{member.name}</h4>
    <p className="text-xs sm:text-sm text-primary font-medium tracking-wide break-words max-w-full px-1">{member.role}</p>
  </motion.div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  let cardIndex = 0;

  return (
    <section id="about" className="relative py-28">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16" ref={ref}>

        {/* ===== Section Title ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            About <span className="text-primary">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-text-dim text-sm tracking-widest uppercase">Who we are & what we do</p>
        </motion.div>

        {/* ===== Description Card ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed text-center">
              <span className="text-primary font-semibold">Nexora</span> is the Vibe Coding Club of NMIT —
              a community where coding meets creativity. We believe in building cool things, learning by doing,
              and vibing together. Whether you're a beginner or a seasoned developer, all branches and skill
              levels are welcome. Our mission is simple: make tech fun, accessible, and collaborative.
            </p>
          </div>
        </motion.div>

        {/* ===== Events & Highlights ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-semibold text-white mb-3">
            Events & <span className="text-primary">Highlights</span>
          </h3>
          <div className="w-12 h-0.5 bg-primary/40 rounded-full" />
        </motion.div>

        <div className="w-full max-w-5xl mx-auto mb-16 sm:mb-28">
          {/* Grid layout for all events */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {events.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl overflow-hidden group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 w-full aspect-square"
              >
                <img
                  src={src}
                  alt={`Event ${i + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Founding Member ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-semibold text-white mb-3">
            Founding <span className="text-primary">Member</span>
          </h3>
          <div className="w-12 h-0.5 bg-primary/40 rounded-full" />
        </motion.div>

        <div className="w-full max-w-3xl mx-auto flex justify-center mb-16 sm:mb-28 px-4">
          {foundingMembers.map((member, i) => (
            <motion.div
              key={member.img}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 w-full max-w-[280px]"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 sm:mb-5 rounded-2xl overflow-hidden border-2 border-yellow/40 group-hover:border-yellow/70 transition-all duration-300 shadow-lg shadow-black/30 bg-white/5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-white text-sm sm:text-base mb-1.5 break-words max-w-full">{member.name}</h4>
              <p className="text-xs sm:text-sm text-yellow font-medium tracking-wide break-words max-w-full">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* ===== Faculty Advisors ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.33 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-semibold text-white mb-3">
            Faculty <span className="text-primary">Advisors</span>
          </h3>
          <div className="w-12 h-0.5 bg-primary/40 rounded-full" />
        </motion.div>

        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-28 px-4">
          {facultyAdvisors.map((member, i) => (
            <motion.div
              key={member.img}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.38 + i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 w-full"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 sm:mb-5 rounded-2xl overflow-hidden border-2 border-yellow/40 group-hover:border-yellow/70 transition-all duration-300 shadow-lg shadow-black/30 bg-white/5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-white text-sm sm:text-base mb-1.5 break-words max-w-full">{member.name}</h4>
              <p className="text-xs sm:text-sm text-yellow font-medium tracking-wide break-words max-w-full leading-relaxed">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* ===== Core Members ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-semibold text-white mb-3">
            Core <span className="text-primary">Members</span>
          </h3>
          <div className="w-12 h-0.5 bg-primary/40 rounded-full" />
        </motion.div>

        {/* Member rows - 2 per row, centered */}
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8">
          {memberRows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {row.map((member) => {
                const idx = cardIndex++;
                return (
                  <MemberCard
                    key={member.role}
                    member={member}
                    index={idx}
                    isInView={isInView}
                  />
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
