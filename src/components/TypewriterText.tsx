"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function TypewriterText({ text, speed = 40, className }: TypewriterTextProps) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const id = setInterval(() => {
      setCount((current) => {
        if (current >= text.length) {
          clearInterval(id);
          return current;
        }
        return current + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span className={className} aria-label={text} role="text">
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span aria-hidden="true" data-typewriter-cursor data-done={done ? "true" : "false"} />
    </span>
  );
}
