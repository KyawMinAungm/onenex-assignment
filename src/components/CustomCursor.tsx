"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth ဖြစ်အောင် useSpring ကို သုံးပါမယ်
  const cursorX = useSpring(0, { stiffness: 200, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 200, damping: 28 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8); // Cursor ရဲ့ အလယ်ဗဟိုကို ချိန်ညှိခြင်း
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [cursorX, cursorY]);

  // Link တွေ ခလုတ်တွေပေါ် ရောက်ရင် Cursor ကြီးလာစေဖို့
  useEffect(() => {
    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    const targets = document.querySelectorAll(".view,.cursor-pointer");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleHover);
      target.addEventListener("mouseleave", handleUnhover);
    });
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4  bg-white rounded-full p-1 border-2 border-primary pointer-events-none z-9999 hidden md:block"
      style={{
      
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "white",
        mixBlendMode: isHovered ? "difference" : "normal", // စာသားပေါ်ရောက်ရင် အရောင်ပြောင်းသွားစေဖို့
      }}
    >
      <div className="bg-primary w-1 h-1 rounded-full"></div>
    </motion.div>
  );
}
