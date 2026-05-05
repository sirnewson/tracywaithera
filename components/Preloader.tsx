import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Completely remove from DOM after 3.2 seconds
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Animated Circular Text */}
        <div className="absolute inset-0 w-64 h-64 -m-16 animate-[spin_8s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-900 overflow-visible">
            <path
              id="circlePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="transparent"
            />
            <text className="text-[11.5px] font-black uppercase tracking-[0.2em] fill-current">
              <textPath href="#circlePath" startOffset="0%">
                TRACY WAITHERA • LOADING • TRACY WAITHERA • LOADING •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Logo in B&W */}
        <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-zinc-900 shadow-2xl z-10">
          <img
            src="/tw-logo.png"
            alt="Tracy Waithera Logo"
            className="w-full h-full object-cover grayscale brightness-125"
          />
        </div>
      </div>
    </div>
  );
};
