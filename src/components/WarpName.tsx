"use client";

import React, { useEffect, useRef } from "react";

const NAME = "Divjot Singh Manchanda";

export default function WarpName() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const DPR = () => Math.max(1, Math.floor(window.devicePixelRatio || 1));

    const resize = () => {
      const dpr = DPR();
      const { offsetWidth: w, offsetHeight: h } = canvas;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale once
    };

    const drawFrame = (t: number) => {
      const { width, height } = canvas;
      // work in CSS pixels (because we scaled with setTransform)
      const W = width / DPR();
      const H = height / DPR();
      const cx = W / 2;
      const cy = H / 2;

      // clear
      ctx.clearRect(0, 0, W, H);

      // -----------------------
      // 1) draw streaks
      // -----------------------
      const lines = 180;
      const baseLen = Math.max(W, H) * 0.55;
      const jitter = 24;

      // soft glow in center
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseLen * 0.7);
      g.addColorStop(0, "rgba(255,255,255,0.18)");
      g.addColorStop(1, "rgba(255,255,255,0.00)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, baseLen * 0.7, 0, Math.PI * 2);
      ctx.fill();

      // star rays
      const spin = (t * 0.0004) % (Math.PI * 2);
      ctx.lineWidth = 1;
      for (let i = 0; i < lines; i++) {
        const a = spin + (i / lines) * Math.PI * 2;
        const len =
          baseLen +
          (Math.sin(t * 0.001 + i * 0.7) * jitter) / 2 +
          (Math.cos(t * 0.0013 + i) * jitter) / 2;

        const x2 = cx + Math.cos(a) * len;
        const y2 = cy + Math.sin(a) * len;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x2, y2);
        // slight twinkle variation
        const alpha = 0.10 + (Math.sin(t * 0.002 + i) + 1) * 0.06;
        ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.stroke();
      }

      // -----------------------
      // 2) mask to text (keep streaks only inside letters)
      // -----------------------
      ctx.globalCompositeOperation = "destination-in";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "900 clamp(28px, 6.8vw, 84px) ui-sans-serif, system-ui, Arial";
      ctx.fillText(NAME, cx, cy);

      // -----------------------
      // 3) fill black behind the masked streaks (so text body is black)
      // -----------------------
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "black";
      ctx.fillText(NAME, cx, cy);

      // -----------------------
      // 4) white outline on top
      // -----------------------
      ctx.globalCompositeOperation = "source-over";
      ctx.lineJoin = "round";
      ctx.miterLimit = 2;
      ctx.lineWidth = 8;          // outer stroke
      ctx.strokeStyle = "white";
      ctx.strokeText(NAME, cx, cy);
      ctx.lineWidth = 5;          // inner cleanup to keep stroke crisp
      ctx.strokeText(NAME, cx, cy);

      raf = requestAnimationFrame(drawFrame);
    };

    const onResize = () => {
      resize();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(drawFrame);
    };

    resize();
    raf = requestAnimationFrame(drawFrame);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "110px", position: "relative" }}>
      <canvas
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          // keep it above the hero but not clickable
          pointerEvents: "none",
          mixBlendMode: "normal",
        }}
      />
    </div>
  );
}
