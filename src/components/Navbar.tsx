"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Scroll position ကို စောင့်ကြည့်ပြီး Navbar ကို ဖျောက်/ပြ လုပ်ခြင်း
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // အောက်ကို scroll ဆင်းရင် ဖျောက်မယ်
    } else {
      setHidden(false); // အပေါ်ကို scroll ပြန်တက်ရင် ပြမယ်
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
          ONENEX
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <Link href="/services" className="hover:text-foreground transition">SERVICES</Link>
          <Link href="/cases" className="hover:text-foreground transition">CASES</Link>
          <Link href="/contact" className="hover:text-foreground transition">CONTACT US</Link>
          
         
        </div>
      </div>
    </motion.nav>
  );
}