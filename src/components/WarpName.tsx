"use client";
import React from "react";

type Props = { text?: string; className?: string };

export default function WarpName({ text = "Divjot Singh Manchanda", className = "" }: Props) {
  return (
    <div className={`relative select-none ${className}`}>
      <h1 className="relative font-extrabold leading-[0.9] tracking-tight text-center"
          style={{ fontSize: "clamp(44px, 9vw, 132px)" }}>
        {/* Base text for readability/SEO */}
        <span className="relative z-10 text-white/92 drop-shadow-[0_2px_24px_rgba(120,180,255,0.25)]">
          {text}
        </span>

        {/* Streak layers clipped to the text */}
        <span aria-hidden className="warp-layer layer1">{text}</span>
        <span aria-hidden className="warp-layer layer2">{text}</span>
        <span aria-hidden className="warp-layer layer3">{text}</span>
      </h1>

      <style jsx>{`
        .warp-layer {
          position: absolute;
          inset: 0;
          color: transparent;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          pointer-events: none;
          mix-blend-mode: screen;              /* brighter streaks over base text */
          filter: drop-shadow(0 6px 32px rgba(80,160,255,0.15));
          mask-image: radial-gradient(120% 180% at 50% 40%, #000 65%, transparent 100%);
          -webkit-mask-image: radial-gradient(120% 180% at 50% 40%, #000 65%, transparent 100%);
        }

        /* Three parallax streak fields at different angles/speeds */
        .layer1 {
          background-image:
            repeating-linear-gradient(-16deg,
              rgba(255,255,255,0) 0px, rgba(255,255,255,0) 11px,
              rgba(255,255,255,0.9) 12px, rgba(255,255,255,0.9) 13px,
              rgba(255,255,255,0) 14px, rgba(255,255,255,0) 26px);
          animation: warp1 3.4s linear infinite;
        }
        .layer2 {
          background-image:
            repeating-linear-gradient(-22deg,
              rgba(255,255,255,0) 0px, rgba(255,255,255,0) 18px,
              rgba(200,220,255,0.7) 19px, rgba(200,220,255,0.7) 20px,
              rgba(255,255,255,0) 21px, rgba(255,255,255,0) 36px);
          animation: warp2 5.2s linear infinite;
        }
        .layer3 {
          background-image:
            repeating-linear-gradient(-12deg,
              rgba(255,255,255,0) 0px, rgba(255,255,255,0) 8px,
              rgba(255,255,255,0.6) 9px, rgba(255,255,255,0.6) 9.5px,
              rgba(255,255,255,0) 10px, rgba(255,255,255,0) 22px);
          animation: warp3 7.6s linear infinite;
          opacity: 0.85;
        }

        @keyframes warp1 { from { background-position: 0 0; } to { background-position: 1200px 700px; } }
        @keyframes warp2 { from { background-position: 0 0; } to { background-position: 1600px 900px; } }
        @keyframes warp3 { from { background-position: 0 0; } to { background-position: 2000px 1100px; } }

        @media (prefers-reduced-motion: reduce) {
          .layer1, .layer2, .layer3 { animation: none; }
        }
      `}</style>
    </div>
  );
}
