
import React from 'react';

const Logo: React.FC<{ className?: string, light?: boolean }> = ({ className = "h-12", light = false }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-12 h-12 flex-shrink-0">
        {/* Heart */}
        <path d="M50 85C50 85 15 65 15 35C15 15 45 15 50 30C55 15 85 15 85 35C85 65 50 85 50 85Z" fill="#ef4444" />
        {/* Hand/Wave shape from logo */}
        <path d="M20 55C30 65 50 75 80 50C85 40 85 30 85 30C85 30 70 70 50 75C30 80 15 65 20 55Z" fill="#33899c" />
        {/* Abstract figures */}
        <circle cx="50" cy="38" r="4" fill="white" />
        <circle cx="38" cy="45" r="3" fill="white" />
        <circle cx="62" cy="45" r="3" fill="white" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`text-2xl font-black tracking-tighter ${light ? 'text-white' : 'text-teal-600'}`}>HUMANE</span>
        <span className={`text-lg font-bold tracking-[0.1em] ${light ? 'text-white/90' : 'text-slate-500'}`}>EDUCATION</span>
        <span className={`text-[7px] font-bold tracking-[0.05em] whitespace-nowrap ${light ? 'text-white/70' : 'text-slate-800'}`}>AND EMPOWERMENT FOUNDATION</span>
      </div>
    </div>
  );
};

export default Logo;
