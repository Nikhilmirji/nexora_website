import React, { useState, useEffect, useRef } from 'react';
import { Download, BookOpen, MousePointerClick } from 'lucide-react';

const Brochure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const brochureRef = useRef(null);

  // Close brochure when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (brochureRef.current && !brochureRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div id="brochure" className="flex justify-center items-center w-full py-10 overflow-visible mt-6 mb-8" style={{ perspective: '1600px' }}>
      <div 
        ref={brochureRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-64 h-80 sm:w-72 sm:h-[26rem] cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] 
          sm:hover:translate-x-16 
          ${isOpen ? 'max-sm:translate-x-12 max-sm:scale-[0.85]' : 'max-sm:scale-[0.95]'}`} 
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Ripples around the closed book */}
        <div className={`absolute inset-0 rounded-r-2xl sm:rounded-l-sm border-[1.5px] border-primary transition-opacity duration-300 animate-[ping-medium_2s_ease-out_infinite]
          sm:group-hover:hidden
          ${isOpen ? 'hidden' : 'block'}`}></div>
        <div className={`absolute inset-0 rounded-r-2xl sm:rounded-l-sm border-[1.5px] border-[#a855f7] transition-opacity duration-300 animate-[ping-medium_2s_ease-out_1s_infinite]
          sm:group-hover:hidden
          ${isOpen ? 'hidden' : 'block'}`}></div>

        {/* Right Page (Inside Content) */}
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-r-2xl shadow-2xl shadow-primary/20 border border-white/10 flex flex-col items-center justify-center p-6 sm:p-8 text-center z-0 ml-auto"
        >
          <BookOpen className="text-primary w-10 h-10 mb-4 opacity-80" />
          <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-[var(--font-heading)]">Nexora 2026</h4>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Discover our vision, featured events, and sponsorship opportunities.
          </p>
          <div className="relative p-[2px] rounded-full overflow-hidden group/btn sm:hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(124,58,237,0.4)]" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-purple-500 to-blue-500 bg-[length:200%_auto] animate-[border-shimmer_3s_ease_infinite] sm:animate-border-shimmer"></div>
            <a
              href="/Final Nexora Brochure 2026.pdf"
              download
              className="relative px-6 py-3 bg-[#0a0a0a] group-hover/btn:bg-[#111] font-bold rounded-full flex items-center gap-3 transition-colors text-gray-100"
            >
              <Download size={20} className="text-white" />
              <span className="tracking-wide">Download</span>
            </a>
          </div>
        </div>

        {/* Front Cover Container */}
        <div 
          className={`absolute inset-0 w-full h-full origin-left transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-10
            sm:group-hover:[transform:rotateY(-180deg)]
            ${isOpen ? 'max-sm:[transform:rotateY(-180deg)]' : 'max-sm:[transform:rotateY(0deg)]'}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Cover Face */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0a0a10] rounded-r-2xl sm:rounded-l-sm shadow-[10px_10px_30px_rgba(0,0,0,0.8)] border border-white/10 border-l-gray-700 border-l-[3px] flex flex-col items-center justify-center p-6 text-center z-20"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="absolute inset-3 border border-white/5 border-dashed rounded-xl pointer-events-none"></div>
            
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--color-primary),0.2)] bg-[#111] border border-white/10 relative overflow-hidden">
               <img src="/assets/club_logo.jpeg" alt="Club Logo" className="w-full h-full object-cover relative z-10" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-[var(--font-heading)] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-3 uppercase tracking-[0.2em] text-center">
              Brochure
            </h3>
            
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
            
            <div className="flex flex-col items-center gap-2 mt-auto pb-6">
              <span className="text-primary text-xs tracking-[0.3em] uppercase animate-pulse">
                 <span className="hidden sm:inline">Hover to open</span>
                 <span className="inline sm:hidden">Click to open</span>
              </span>
              <MousePointerClick className="w-5 h-5 text-primary mt-1 animate-pulse" />
            </div>

            {/* Spine Shadow on Front */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none rounded-l-md"></div>
          </div>
          
          {/* Inside Cover Face (Left Page when open) */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-tl from-[#111] to-[#151515] rounded-l-2xl sm:rounded-r-sm border border-white/10 border-r-gray-700 border-r-[3px] flex flex-col items-center justify-center p-6 text-center shadow-inner z-10"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="w-full h-full border border-white/5 rounded-xl flex flex-col justify-between p-6 bg-[#0a0a0a]/50">
               <div className="flex flex-col gap-3 opacity-60">
                 <div className="w-3/4 h-2 bg-gray-800 rounded-full"></div>
                 <div className="w-full h-2 bg-gray-800 rounded-full"></div>
                 <div className="w-5/6 h-2 bg-gray-800 rounded-full"></div>
               </div>
               <div className="flex flex-col gap-3 opacity-60 mt-8">
                 <div className="w-full h-2 bg-gray-800 rounded-full"></div>
                 <div className="w-4/5 h-2 bg-gray-800 rounded-full"></div>
               </div>
               <div className="w-1/2 h-24 bg-gray-800/50 rounded-lg mx-auto opacity-50 mt-auto"></div>
            </div>
            
            {/* Spine Shadow on Inside Cover */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/80 via-black/30 to-transparent pointer-events-none rounded-r-md"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Brochure;
