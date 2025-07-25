'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      if (trailRef.current) {
        trailRef.current.animate(
          [
            { left: trailRef.current.style.left, top: trailRef.current.style.top },
            { left: e.clientX + 'px', top: e.clientY + 'px' },
          ],
          {
            duration: 300,
            fill: 'forwards',
          }
        );
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Kursor utama */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-yellow-500 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150"
      />

      {/* Trail (mengikuti dengan delay) */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-yellow-300 pointer-events-none z-[9998] mix-blend-difference opacity-60"
      />
    </>
  );
}