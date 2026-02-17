
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = "", light = false, onClick }) => (
  <div onClick={onClick} className={`flex items-center space-x-3 group cursor-pointer ${className}`}>
    <div className="relative">
      <img 
        src="https://i.ibb.co/qMWb7585/LOGO-ICON.png" 
        alt="Trouve Logo" 
        className="h-10 w-auto transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-brand-gold/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
    <div className="flex flex-col">
      <span className={`text-xl font-black leading-none tracking-tighter uppercase ${light ? 'text-white' : 'text-brand-navy'}`}>Trouve</span>
      <span className={`text-[9px] font-extrabold tracking-[0.3em] uppercase ${light ? 'text-brand-gold' : 'text-brand-gold'}`}>Marketing Solutions</span>
    </div>
  </div>
);
