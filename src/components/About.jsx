import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const events = [
  { image: '/assets/image1.jpeg' },
  { image: '/assets/image2.jpeg' },
  { image: '/assets/image3.jpeg' },
  { image: '/assets/image4.jpeg' },
  { image: '/assets/image5.jpeg' },
  { image: '/assets/image6.jpeg' },
  { image: '/assets/image7.jpeg' },
];

const foundingMembers = [
  { name: 'Dr. Nalini N.', role: 'Professor, Dept. of CSE, NMIT', img: '/assets/nalinin.jpeg' },
];

const facultyAdvisors = [
  { name: 'Dr.Vijaya Shetty S', role: 'Professor and Head, Dept. of CSE, NMIT', img: '/assets/vijayashetty.jpeg' },
  { name: 'Dr.Sudheer Reddy J', role: 'Professor and Director - Curriculum Development and Academics, NDU', img: '/assets/sudheerreddy.jpeg' },
];

const coreMembers = [
  { name: 'Rudraksh Gajendra Shende', role: 'Club Lead', img: '/assets/lead.jpeg' },
  { name: 'Patil Aryan', role: 'Co-Lead', img: '/assets/co_lead.jpeg' },
  { name: 'Niranjan Chennakrishnasrinivasan', role: 'General Secretary', img: '/assets/general_secratary.jpeg' },
  { name: 'Rudransh Karan', role: 'Sponsorship Lead', img: '/assets/sponsleader.jpeg' },
  { name: 'Prathamesh D M', role: 'Social Media Lead', img: '/assets/social_media_lead.jpeg' },
  { name: 'Dhananjaya K', role: 'Design Lead', img: '/assets/design_lead.jpeg' },
  { name: 'Gurucharan M.', role: 'Tech Lead', img: '/assets/image.png' },
  { name: 'Nikhil Mirji', role: 'Operations Lead', img: '/assets/operation_lead.jpeg' },
];

const SliderRow = ({ direction = 'right', speed = 25, size = '200px', items, rowIndex, activeCard, onCardClick, isExternalPaused, isDesktop }) => {
  // Triple the items to ensure smooth looping without gaps
  const loopItems = [...items, ...items, ...items];
  const animationName = direction === 'right' ? 'scrollRight' : 'scrollLeft';

  const [isHovered, setIsHovered] = useState(false);

  // Check if this row contains the active card
  const isRowActive = activeCard && activeCard.rowIndex === rowIndex;
  // Pause if hovered OR if this row has the active card OR if externally paused (modal open)
  const isPaused = isHovered || isRowActive || isExternalPaused;

  return (
    <div className="flex overflow-hidden w-full relative z-0 py-4">
      <style>{`
        @keyframes scrollRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
      <div
        className="flex"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          width: 'max-content',
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
        onMouseEnter={() => {
          if (isDesktop) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (isDesktop) setIsHovered(false);
        }}
      >
        {loopItems.map((item, index) => {
          const isCardActive = isRowActive && activeCard.cardIndex === index;
          return (
            <div key={index} className="pr-4 md:pr-6 shrink-0 cursor-pointer">
              <motion.div
                className="flex items-center justify-center rounded-xl bg-[#02093D] border-2 border-primary/30 w-full h-full overflow-hidden relative"
                style={{
                  width: size,
                  height: `calc(${size} * 0.75)`, // Adjusted aspect ratio
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onCardClick(rowIndex, index, item);
                }}
                animate={
                  isCardActive
                    ? { scale: isDesktop ? 1.05 : 1, boxShadow: "0 0 10px rgba(0, 240, 255, 0.6)" } 
                    : { scale: 1, boxShadow: "0 0 0px rgba(0, 240, 255, 0)" }
                }
                whileHover={isDesktop ? { 
                  scale: 1.05,
                  boxShadow: "0 0 7px rgba(0, 240, 255, 0.6)"
                } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {item.image ? (
                   <img 
                     src={item.image} 
                     alt={item.label || "Gallery Image"} 
                     className="w-full h-full object-cover"
                   />
                ) : (
                    <span className="text-white opacity-50 text-xs md:text-sm font-medium">
                    {item.label}
                    </span>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import PixelCard from './PixelCard';

const CoreMemberCard = ({ member }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-200 group hover:scale-[1.01]"
    >
      
      {/* 1. TRAVERSING BORDERS (The Wobbly Effect) - CYAN/PRIMARY */}
      <div className="absolute -inset-[2px] overflow-hidden rounded-xl bg-neutral-900 z-0">
        <div 
          className="absolute inset-[-50%] bg-[conic-gradient(transparent_50deg,#00f0ff_90deg,transparent_130deg,transparent_230deg,#00f0ff_270deg,transparent_310deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin"
          style={{ animationDuration: '4s' }} 
        />
      </div>

      {/* 2. CARD CONTENT CONTAINER - PIXEL CARD + SPOTLIGHT */}
      <div className="relative h-full w-full rounded-xl overflow-hidden z-10 bg-[#0a0a0a]">
        <PixelCard 
            variant="default"
            gap={6}
            speed={40}
            colors="#00f0ff88,#00a0aa88,#ffffff55"
            className="h-full w-full aspect-auto bg-transparent border border-white/10 group-hover:border-primary/20 rounded-xl"
        >
            {/* Inner Spotlight - CYAN/PRIMARY */}
            <div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-20"
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 240, 255, 0.08), transparent 40%)`,
            }}
            />

            <div className="relative z-30 flex flex-col items-center gap-4 w-full h-full p-6 sm:p-8 md:p-10 justify-start">
            {/* Image Container */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-2 rounded-full p-[2px] overflow-hidden shrink-0">
                {/* Rotating border container */}
                <div className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#00f0ff_180deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Inner circle background to cover center of conic gradient */}
                <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-full z-0" />

                {/* Image itself */}
                <img
                src={member.img}
                alt={member.name}
                className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-transparent transition-all duration-300"
                />
            </div>

            {/* Title - WHITE */}
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-[var(--font-heading)] text-center">
                {member.name}
            </h3>

            {/* Description - GRAY/PRIMARY */}
            <p className="text-primary/80 font-medium tracking-wide text-sm md:text-base">
                {member.role}
            </p>
            </div>
        </PixelCard>
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  let cardIndex = 0;

  const [activeCard, setActiveCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    const handleClickOutside = () => setActiveCard(null);
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', checkDesktop);
    return () => {
        window.removeEventListener('click', handleClickOutside);
        window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  const handleCardClick = (rowIndex, cardIndex, item) => {
    if (item.image) setSelectedImage(item.image);
    if (activeCard && activeCard.rowIndex === rowIndex && activeCard.cardIndex === cardIndex) {
      setActiveCard(null);
    } else {
      setActiveCard({ rowIndex, cardIndex });
    }
  };

  const closeLoop = () => {
    setSelectedImage(null);
    setActiveCard(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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

        <div className="w-full mb-16 sm:mb-28">
           {/* Single Infinite Slider Row */}
          <SliderRow 
            rowIndex={0}
            activeCard={activeCard}
            onCardClick={handleCardClick}
            direction="left" 
            size="clamp(200px, 25vw, 250px)" 
            items={events} 
            speed={30} 
            isExternalPaused={!!selectedImage}
            isDesktop={isDesktop}
          />
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
              className="border-2 border-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 w-full max-w-[280px]"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 sm:mb-5 rounded-2xl overflow-hidden border-2 border-yellow/40 group-hover:border-yellow/70 transition-all duration-300 shadow-lg shadow-black/30 bg-white/5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
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
              className="border-2 border-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 w-full"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 sm:mb-5 rounded-2xl overflow-hidden border-2 border-yellow/40 group-hover:border-yellow/70 transition-all duration-300 shadow-lg shadow-black/30 bg-white/5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
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

        {/* Core Members Responsive Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {coreMembers.map((member, i) => (
            <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] flex min-h-[350px]"
            >
                <CoreMemberCard member={member} />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal for Expanded Image */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                onClick={closeLoop}
            >
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative w-full max-w-4xl h-[50vh] md:h-[80vh] rounded-xl overflow-hidden shadow-2xl border-2 border-primary/50 bg-[#02093D]"
                    onClick={(e) => e.stopPropagation()} 
                >
                     {/* Image Container */}
                     <div className="relative w-full h-full flex flex-col justify-between py-6 md:py-10">
                         <img 
                            src={selectedImage}
                            alt="Expanded Gallery View"
                            className="w-full h-full object-contain"
                         />
                     </div>
                     
                     {/* Close Button */}
                     <button 
                        onClick={closeLoop}
                        className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/50 cursor-pointer hover:bg-primary text-white rounded-full p-2 transition-colors duration-300"
                     >
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                     </button>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default About;
