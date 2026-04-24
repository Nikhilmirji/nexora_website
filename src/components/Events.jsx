import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Clock, Trophy, Award, Heart, Coins, Leaf, Cpu, Lightbulb, MessageCircle, Instagram } from 'lucide-react';

const timelineData = [
  { time: "02:00–02:30 PM", activity: "Inauguration", details: "Opening, rules, and instructions", date: "2nd May 2026" },
  { time: "02:30–03:00 PM", activity: "Team Preparation", details: "Seating arrangements and system checks", date: "2nd May 2026" },
  { time: "03:00–07:30 PM", activity: "Hackathon Session I", details: "Start of VIBEA-THON", date: "2nd May 2026" },
  { time: "07:30–08:30 PM", activity: "Dinner Break", details: "—", date: "2nd May 2026" },
  { time: "08:30–11:00 PM", activity: "Hackathon Session I (Contd.)", details: "Continuation of hackathon", date: "2nd May 2026" },
  { time: "11:00–11:30 PM", activity: "Midnight Snacks Break", details: "—", date: "2nd May 2026" },
  { time: "11:30 PM–06:00 AM", activity: "Hackathon Session I (Contd.)", details: "Overnight development session", date: "2nd–3rd May 2026" },
  { time: "06:00–07:00 AM", activity: "Progress Submission I", details: "Video demonstration submission", date: "3rd May 2026" },
  { time: "07:00–08:00 AM", activity: "Evaluation I", details: "Analysis of submitted videos by judges", date: "3rd May 2026" },
  { time: "08:00–08:45 AM", activity: "Breakfast Break", details: "—", date: "3rd May 2026" },
  { time: "08:45 AM–12:00 PM", activity: "Hackathon Session II", details: "Refinement and updates", date: "3rd May 2026" },
  { time: "12:00–12:30 PM", activity: "Final Submission", details: "Uploading final documentation", date: "3rd May 2026" },
  { time: "12:30–01:30 PM", activity: "Final Evaluation", details: "PPT-based evaluation", date: "3rd May 2026" },
  { time: "01:30–02:00 PM", activity: "Break", details: "—", date: "3rd May 2026" },
  { time: "02:00–02:30 PM", activity: "Results", details: "Prize distribution", date: "3rd May 2026" },
  { time: "02:30–03:00 PM", activity: "Closing Ceremony", details: "Feedback and photo session", date: "3rd May 2026" },
];

const mainPrizes = [
    { place: "1st Place", amount: "₹40,000", bg: "from-yellow-400/20 to-yellow-600/5", border: "border-yellow-400/50", text: "text-yellow-400", icon: <Trophy className="w-12 h-12" /> },
    { place: "2nd Place", amount: "₹25,000", bg: "from-slate-300/20 to-slate-500/5", border: "border-slate-300/50", text: "text-slate-300", icon: <Award className="w-12 h-12" /> },
    { place: "3rd Place", amount: "₹15,000", bg: "from-amber-600/20 to-amber-800/5", border: "border-amber-600/50", text: "text-amber-500", icon: <Award className="w-12 h-12" /> },
];

const tracksData = [
    { title: "Healthcare and Med-Tech", prize: "₹10,000", icon: <Heart className="w-7 h-7" /> },
    { title: "Fintech and Financial Inclusion", prize: "₹10,000", icon: <Coins className="w-7 h-7" /> },
    { title: "Sustainability and Climate Tech", prize: "₹10,000", icon: <Leaf className="w-7 h-7" /> },
    { title: "AI and Automation", prize: "₹10,000", icon: <Cpu className="w-7 h-7" /> },
    { title: "Open Innovation", prize: "₹10,000", icon: <Lightbulb className="w-7 h-7" /> },
];

const Events = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="events" className="relative py-28 overflow-hidden z-10 w-full" ref={ref}>
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-wide">
                        Flagship <span className="text-primary">Event</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
                </motion.div>

                {/* Flagship Event Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full relative group mb-24"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Animated Border Wrapper */}
                    <div className="relative w-full rounded-[2rem] p-[2px] overflow-hidden shadow-2xl z-10">
                        {/* The rotating gradient line */}
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_25%,#00f0ff_50%,transparent_50%,transparent_75%,#00f0ff_100%)]"></div>
                        
                        {/* Inner Content Card */}
                        <div className="relative w-full bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-[calc(2rem-2px)] overflow-hidden flex flex-col md:flex-row shadow-inner border border-white/5">
                        
                        {/* Event Logo Side */}
                        <div className="w-full md:w-2/5 md:min-w-[300px] relative p-8 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/assets/club_logo.jpeg')] bg-cover bg-center opacity-20 blur-sm scale-110 group-hover:scale-100 group-hover:opacity-30 transition-all duration-700"></div>
                            <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary/30 p-2 shadow-[0_0_30px_rgba(0,240,255,0.3)] bg-[#02093D]">
                                <img src="/assets/club_logo.jpeg" alt="Nexora Code Club Logo" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>

                        {/* Event Details Side */}
                        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold tracking-wider uppercase">Hackathon</span>
                                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/30 rounded-full text-xs font-bold tracking-wider uppercase">24 Hours</span>
                            </div>
                            
                            <h3 className="text-3xl md:text-5xl font-[var(--font-heading)] font-bold text-white mb-4 tracking-tight">
                                VIBE-A-THON 2026
                            </h3>
                            
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                                Join us for a 24-hour coding marathon where imagination meets execution. Build real-world solutions, collaborate with top talent, and win exciting prizes. <span className="text-primary font-semibold">Registrations are closed, stay tuned for the results!</span>
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                        <Calendar className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 font-medium">Date</span>
                                        <span className="text-sm font-semibold">2nd - 3rd May 2026</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                        <MapPin className="w-5 h-5 text-pink-400" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 font-medium">Location</span>
                                        <span className="text-sm font-semibold">NMIT, Yelahanka</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="inline-flex items-center justify-center gap-2 w-full sm:w-fit px-8 py-4 bg-white/10 text-gray-400 font-bold rounded-xl border border-white/10 cursor-not-allowed">
                                    Registrations Closed
                                </div>
                                <a 
                                    href="https://www.instagram.com/nexora_nmit/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full sm:w-fit px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(253,29,29,0.4)] hover:-translate-y-1 transition-all duration-300"
                                >
                                    Follow on Instagram <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </motion.div>

                {/* Rewards and Prizes Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center text-center mb-12 mt-12"
                >
                    <h3 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-5 tracking-wide">
                        Rewards & <span className="text-primary">Prizes</span>
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base px-4">
                        Compete for a massive prize pool and exclusive track rewards! Build something amazing and take home the cash.
                    </p>
                </motion.div>

                <div className="w-full mb-32 max-w-5xl mx-auto">
                    {/* Top 3 Prizes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {mainPrizes.map((prize, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative group p-8 rounded-[2rem] bg-gradient-to-b ${prize.bg} border-2 ${prize.border} backdrop-blur-md flex flex-col items-center justify-center overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl`}
                            >
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className={`mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${prize.text}`}>
                                    {prize.icon}
                                </div>
                                <h4 className={`text-xl md:text-2xl font-bold mb-3 ${prize.text} relative z-10 uppercase tracking-widest`}>{prize.place}</h4>
                                <div className="text-4xl md:text-5xl font-[var(--font-heading)] font-black text-white tracking-tight relative z-10 drop-shadow-md">
                                    {prize.amount}
                                    <span className="block text-sm font-semibold text-gray-400 tracking-widest mt-2 uppercase text-center">CASH</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tracks and Track Prizes */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center mb-10"
                    >
                        <h4 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold text-white mb-3">
                            <span className="text-primary">Track</span> Prizes
                        </h4>
                        <div className="w-12 h-1 bg-primary/50 rounded-full mb-6" />
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-5">
                        {tracksData.map((track, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)] p-6 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center gap-5 hover:bg-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 group"
                            >
                                <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-[#0a0a0a] group-hover:scale-110 transition-all duration-300 shadow-inner">
                                    {track.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold leading-snug mb-1 text-sm md:text-base group-hover:text-primary transition-colors">{track.title}</span>
                                    <span className="text-pink-400 font-black text-lg">{track.prize} <span className="text-xs text-gray-400 font-semibold tracking-wider">CASH</span></span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <h3 className="font-[var(--font-heading)] text-2xl md:text-4xl font-bold text-white mb-5 tracking-wide">
                        Event <span className="text-primary">Timeline</span>
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line through the timeline */}
                    <div className="absolute left-[36px] md:left-1/2 md:-ml-[1px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/50 via-purple-500/50 to-primary/50 hidden sm:block"></div>

                    <div className="relative space-y-6">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-[36px] md:left-1/2 -ml-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)] border-2 border-[#0a0a0a] z-10 hidden sm:block"></div>
                                    
                                    {/* Empty space for the other side */}
                                    <div className="hidden md:block w-5/12"></div>

                                    {/* Content Card */}
                                    <div className={`w-full sm:w-[calc(100%-80px)] sm:ml-[80px] md:w-5/12 md:ml-0 group`}>
                                        <div className="p-5 md:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:-translate-y-1">
                                            <div className="flex flex-col gap-1.5 mb-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-primary" />
                                                    <span className="text-primary font-mono text-sm font-semibold tracking-wide">{item.time}</span>
                                                </div>
                                                {item.date && (
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 text-pink-400" />
                                                        <span className="text-pink-400 font-mono text-xs font-semibold tracking-widest uppercase">{item.date}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <h4 className="text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors">{item.activity}</h4>
                                            {item.details && item.details !== '—' && (
                                                <p className="text-gray-400 text-sm leading-relaxed">{item.details}</p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Events;
