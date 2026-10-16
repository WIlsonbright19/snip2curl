import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fast, crisp cinematic counter that completes in ~1.1s
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 200);

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 750);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between p-8 md:p-14 bg-[#171411] text-[#efe5d7] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      {/* Top Header in Preloader */}
      <div className="flex items-center justify-between text-xs tracking-widest uppercase font-medium text-[#efe5d7]/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7b5d42]"></span>
          <span>Snip 2 Curl</span>
        </div>
        <div className="hidden sm:block">1419 Polk St · San Francisco</div>
        <div>Nob Hill Studio</div>
      </div>

      {/* Centerpiece Monogram & Title */}
      <div className="my-auto text-center flex flex-col items-center justify-center">
        <div className="relative mb-6">
          {/* Subtle stylized shear / curl insignia */}
          <svg
            className="w-16 h-16 md:w-20 md:h-20 text-[#efe5d7] animate-pulse"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
            <path
              d="M30 12C20.0589 12 12 20.0589 12 30C12 39.9411 20.0589 48 30 48C39.9411 48 48 39.9411 48 30C48 23.3726 44.4183 17.5 39 14.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M30 20C24.4772 20 20 24.4772 20 30C20 35.5228 24.4772 40 30 40C35.5228 40 40 35.5228 40 30"
              stroke="#7b5d42"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="font-zodiak text-4xl md:text-6xl uppercase tracking-wider mb-3">
          Snip 2 Curl
        </h1>
        <p className="font-cabinet text-sm md:text-base text-[#efe5d7]/70 tracking-widest uppercase">
          Curly Hair Sanctuary &amp; Precision Dry Cutting
        </p>
      </div>

      {/* Bottom Counter & Bar */}
      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <span className="text-xs text-[#efe5d7]/50 tracking-wider uppercase">
            Loading Studio Atmosphere
          </span>
          <span className="font-mono text-3xl md:text-4xl tabular-nums font-light text-[#efe5d7]">
            {progress.toString().padStart(2, '0')}%
          </span>
        </div>
        <div className="w-full h-[2px] bg-[#efe5d7]/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#efe5d7] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
