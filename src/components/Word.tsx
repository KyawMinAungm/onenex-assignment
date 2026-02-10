"use client";
import { motion, useTransform, MotionValue } from 'framer-motion';

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  textColour?: string;
}

export const Word: React.FC<WordProps> = ({ children, range, progress, textColour }) => {
  // စာလုံးတစ်လုံးချင်းစီအတွက် opacity animation
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  return (
    <span className="relative mr-3 mt-4 inline-block">
      <motion.span 
        style={{ opacity }} 
        className={textColour || 'text-white'}
      >
        {children}
      </motion.span>
    </span>
  );
};