import React from 'react';
import { ArrowLeft, Bell, MoreHorizontal, Check, MessageCircle, UserPlus, Instagram } from 'lucide-react';

const InstagramProfileCard = ({
  username = 'nexora_nmit',
  profileImage = '/club_logo.jpeg',
  followers = '1.2K',
  following = '45',
  posts = '34',
  bio = '< Where imagination meets execution ! />',
  profileUrl = 'https://instagram.com/nexora_nmit'
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-24 px-4 sm:px-6 relative z-10" id="socials">
      {/* Background glowing effects for the section */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-[-1]"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none z-[-1]"></div>

      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-16 z-20">
        <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-wide">
          Social <span className="text-primary">!</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full max-w-[420px] bg-neutral-950/80 backdrop-blur-xl border border-neutral-800 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-pink-500/10 hover:border-neutral-700 cursor-pointer"
        aria-label={`Visit ${username} Instagram Profile`}
      >
        {/* Subtle hover gradient wash inside the card */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>

        {/* 1. Header Area */}
        <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-neutral-800/50">
          <ArrowLeft className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
          <h2 className="text-xl font-bold tracking-wide text-white flex items-center gap-1">
            {username}
          </h2>
          <div className="flex items-center gap-4 text-neutral-400 group-hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
            <MoreHorizontal className="w-6 h-6" />
          </div>
        </div>

        {/* 2. Profile Details Area */}
        <div className="px-6 py-6">
          <div className="flex items-center justify-between gap-6 mb-6">
            {/* Profile Picture with animated gradient ring */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full animate-spin-slow opacity-75 blur-sm scale-[1.05] group-hover:scale-[1.1] transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full scale-[1.02]"></div>
              <img
                src={profileImage}
                alt={username}
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-neutral-950"
              />
            </div>

            {/* Stats */}
            <div className="flex flex-1 justify-around text-center mt-2">
              <div className="flex flex-col items-center">
                <span className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{posts}</span>
                <span className="text-sm font-medium text-neutral-400">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{followers}</span>
                <span className="text-sm font-medium text-neutral-400">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{following}</span>
                <span className="text-sm font-medium text-neutral-400">Following</span>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="mb-6">
            <h3 className="font-bold text-white mb-1.5 uppercase tracking-wide group-hover:text-pink-100 transition-colors">NEXORA NMIT</h3>
            <p className="text-neutral-300 font-mono text-sm leading-relaxed group-hover:text-white transition-colors">
              {bio}
            </p>
          </div>

          {/* Simulated Action Buttons */}
          <div className="flex items-center gap-2 mb-6 pointer-events-none">
            <div className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-neutral-800 rounded-xl text-white font-semibold text-sm transition-colors group-hover:bg-neutral-700">
              Follow
            </div>
            <div className="flex-1 flex items-center justify-center py-2.5 bg-neutral-800 rounded-xl text-white font-semibold text-sm transition-colors group-hover:bg-neutral-700">
              Message
            </div>
            <div className="px-3 py-2.5 bg-neutral-800 rounded-xl text-white flex items-center justify-center transition-colors group-hover:bg-neutral-700">
              <UserPlus className="w-5 h-5" />
            </div>
          </div>

          {/* 3. Primary CTA Button */}
          <button
            className="relative w-full overflow-hidden flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white text-base shadow-lg transition-all duration-300"
            onClick={(e) => {
              // Prevent default click to allow the parent <a> to handle navigation.
              // Alternatively, the parent <a> will just act on this since it wraps everything.
            }}
          >
            {/* Gradient Backgrounds */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 opacity-90 transition-opacity group-hover:opacity-100"></span>
            {/* Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40"></span>
            
            <span className="relative z-10 flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Visit Profile
            </span>
          </button>
        </div>
      </a>
    </div>
  );
};

export default InstagramProfileCard;
