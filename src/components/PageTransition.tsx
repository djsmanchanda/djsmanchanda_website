"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    setTransitionStage('fadeOut');
  }, [pathname]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('fadeIn');
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, children]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pageFadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes pageFadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          .page-fadeIn {
            animation: pageFadeIn 0.3s ease-in forwards;
          }

          .page-fadeOut {
            animation: pageFadeOut 0.2s ease-out forwards;
          }
        `
      }} />
      <div className={transitionStage === 'fadeIn' ? 'page-fadeIn' : 'page-fadeOut'}>
        {displayChildren}
      </div>
    </>
  );
}
