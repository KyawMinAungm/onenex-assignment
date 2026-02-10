"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function HeroHighlight({
  children,
}: {
  children: React.ReactNode;
}) {
  // Smooth animations for the highlight
  const cursorX = useSpring(0, { stiffness: 800, damping: 100 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 100 });

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;

      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      setIsInside(inside);

      
      // Set coordinates relative to the wrapper so the highlight is clipped to children
      const x = e.clientX - rect.left - 150;
      const y = e.clientY - rect.top - 150;
      cursorX.set(x);
      cursorY.set(y);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [cursorX, cursorY]);

  return (
    <div ref={wrapperRef} className="relative ">
      <div className="relative z-10">{children}</div>

      <motion.div
        // absolute inside wrapper, behind children (z-0) and clipped by overflow-hidden
        className="absolute left-0 top-0 w-75 h-75 bg-foreground invert  blur-3xl rounded-full pointer-events-none z-0"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        animate={{ opacity: isInside ? 1 : 0 }}
        transition={{ ease: "easeOut", duration: 0.12 }}
      />
    </div>
  );
}
