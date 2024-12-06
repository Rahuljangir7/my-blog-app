import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimateOnScroll = ({ tag, initialVal, animated }) => {
  const ref = useRef(null);

  // Hook to detect if the element is in view
  const isInView = useInView(ref, { threshold: 0.5 }); // 50% visibility

  return (
    <motion.div
      ref={ref}
      initial={initialVal} // Initial state (hidden and below)
      animate={isInView ? animated : initialVal} // Animate when in view
      transition={{ duration: 2 }}
    >
      {tag}
    </motion.div>
  );
};

export default AnimateOnScroll;
