"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypeWriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // ၁။ စာလုံးကုန်သွားရင် ခဏရပ်ပြီးမှ ပြန်ဖျက်မယ်
    if (subIndex === words[index].length + 1 && !isDeleting) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsPaused(true);
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsPaused(false);
      }, 2000); // စာရိုက်ပြီးရင် ၂ စက္ကန့် စောင့်မယ်
      return () => clearTimeout(timeout);
    }

    // ၂။ စာသားအားလုံး ဖျက်ပြီးသွားရင် နောက်တစ်လုံးကို ပြောင်းမယ်
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // ၃။ စာရိုက်တဲ့/ဖျက်တဲ့ Timing Logic
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isPaused ? 0 : isDeleting ? 50 : 150); // ဖျက်ရင် 50ms (မြန်)၊ ရိုက်ရင် 150ms (နှေး)

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words, isPaused]);

  return (
    <div className="flex items-center  text-4xl md:text-7xl ">
      <span className="text-foreground">
        {words[index].substring(0, subIndex)}
      </span>
      
      {/* Blinking Cursor */}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-px h-10 md:h-18 bg-[#e19e00] ml-2 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
      />
    </div>
  );
}