"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

export default function AnimatedCounter({ targetValue } : { targetValue: number }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true }); // Triggers once
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, targetValue, { duration: 1 });
    }
  }, [isInView, count, targetValue]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}
