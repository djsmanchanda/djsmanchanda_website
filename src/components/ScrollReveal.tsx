"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scrollReveal {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .scroll-reveal {
            opacity: 0;
          }

          .scroll-reveal-visible {
            animation: scrollReveal 0.6s ease-out forwards;
          }
        `
      }} />
      <div
        ref={ref}
        className={`scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''}`}
      >
        {children}
      </div>
    </>
  );
}
