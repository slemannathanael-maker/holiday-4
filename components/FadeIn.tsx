"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
}

const offsets: Record<Direction, string> = {
  up: "translateY(32px)",
  left: "translateX(-32px)",
  right: "translateX(32px)",
  none: "none",
};

export default function FadeIn({ children, className = "", direction = "up", delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : offsets[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
