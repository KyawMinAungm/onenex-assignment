"use client";
import { motion } from "framer-motion";

interface InfiniteTextProps {
  children: React.ReactNode;
  speed?: number; // စက္ကန့် (နည်းလေ မြန်လေ)
}

export default function InfiniteScroll({ children, speed = 20 }: InfiniteTextProps) {
  return (
    <div className="relative w-full z-20 flex overflow-hidden whitespace-nowrap py-10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }} // ၀ ကနေ -၅၀ ထိသွားမယ် (Duplicate လုပ်ထားလို့)
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex justify-center items-center"
      >
        {children}
        {children /* Duplicate လုပ်ထားတာက အစီအစဉ်မပြတ်စေဖို့ပါ */}
        
      </motion.div>
    </div>
  );
}
