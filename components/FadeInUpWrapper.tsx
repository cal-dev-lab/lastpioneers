"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface FadeInUpWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInUpWrapper: React.FC<FadeInUpWrapperProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // Detects when the element enters/leaves
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isInView); // Update visibility state based on scroll direction
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }} // Reverses on scroll up
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpWrapper;
