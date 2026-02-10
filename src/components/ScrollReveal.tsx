"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  title: string;
  detail: string[];
  description: string;
}

export default function ScrollReveal({ title, detail, description }: ScrollRevealProps) {
  const container = useRef(null);

  // ၁။ Scroll Progress ကို ခြေရာခံမယ် (Element ရဲ့ ထိပ်ကနေ အောက်ခြေထိ)
  const { scrollYProgress } = useScroll({
    target: container,
    
    offset: ["start 0.8", "start 0.2"], // မျက်နှာပြင်ရဲ့ ၈၀% မှာ စပြီး ၂၀% မှာ ပြီးမယ်
  });

  return (
    <div ref={container} className=" flex justify-center mb-20 ">
      
        <motion.div
      
          style={{ opacity: scrollYProgress }} // Scroll progress အလိုက် လင်းလာမယ်
          className=" border-white pb-10 w-full border-b "
        >
            <div className=" flex flex-col text-4xl md:text-5xl uppercase mb-6 md:mb-10">{title}</div>
            <div className="flex font-sharp flex-col md:flex-row gap-x-10 gap-y-6">
                <p className="md:w-1/2 text-white  md:text-lg">{description}</p>
                <div className="w-1/2">
                    <p className="uppercase mb-6 font-sharp text-lg">service detail</p>
                    <p className="text-white md:text-lg">{detail.map((d,i) => <span className="block" key={i}>{d}</span>)}</p>
                </div>
            </div>
          
        </motion.div>
      
    </div>
  );
}
