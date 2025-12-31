"use client"

import React, { useEffect, useState } from 'react';

export default function ClientLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fade out after page load or shortly after mount as a fallback
    const onLoad = () => {
      setVisible(false);
    };

    if (document.readyState === 'complete') {
      // page already loaded
      setTimeout(() => setVisible(false), 200);
    } else {
      window.addEventListener('load', onLoad, { once: true });
      // also hide after a shorter max timeout in case load doesn't fire
      const t = setTimeout(() => setVisible(false), 700);
      return () => {
        clearTimeout(t);
        window.removeEventListener('load', onLoad);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      id="global-loader"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-transparent to-slate-950/30 transition-opacity duration-500 ease-out pointer-events-none"
      style={{ opacity: 1 }}
    >
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-purple-500 rounded-full animate-spin animation-delay-300"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-pink-500 rounded-full animate-spin animation-delay-600"></div>
        </div>
        <div className="text-slate-400 text-sm font-medium animate-pulse">Loading Portfolio...</div>
      </div>
    </div>
  );
}
