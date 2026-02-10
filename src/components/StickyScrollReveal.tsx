"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Word } from "./Word";

interface StickyScrollRevealProps {
  text: string;
  textColour?: string;
  containerClass?: string;
  textClass?: string;
  children?: React.ReactNode;
  className?: string;
}

export const StickyScrollReveal: React.FC<StickyScrollRevealProps> = ({
  text,
  textColour,
  containerClass ,
  textClass = "text-4xl",
  children,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Section တက်လာမယ့် Animation (Bottom to Top)

  const opacity = useTransform(scrollYProgress, [0.15, 0.15], [0, 1]);

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative h-[300vh] ${containerClass}`}>
      <div className={`${className} sticky top-0 h-screen flex flex-col items-center  overflow-hidden`}>
        {children}
        <motion.div style={{ opacity }} className="w-full">
          <p className={`flex flex-wrap leading-tight ${textClass}`}>
            {words.map((word, i) => {
              // ပထမ 20% scroll ပြီးမှ စာသားတွေ စလင်းမယ်
              const start = 0.2 + (i / words.length) * 0.7;
              const end = 0.2 + ((i + 1) / words.length) * 0.7;

              return (
                <Word
                  key={i}
                  range={[start, end]}
                  progress={scrollYProgress}
                  textColour={textColour}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
