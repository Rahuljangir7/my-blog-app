import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useAnimationContext } from "./useAnimationContext";

export const useInViewAnimation = (elementKey, resetOnLeave = true) => {
  const animations = useAnimationContext(); // Get animations from context
  const animationStyles = animations[elementKey] || {}; // Get specific animation by key

  const { ref, inView } = useInView({ threshold: 0.3 }); // Trigger at 50% visibility
  const [style, setStyle] = useState({
    opacity: 0,
    transform: animationStyles.initial || "translate(0, 0)", // Default initial transform
    transition: "all 0.1s linear",
  });

  useEffect(() => {
    if (inView) {
      setStyle({
        opacity: 1,
        transform: animationStyles.enter || "translate(0, 0)", // Target transform on enter
        transition: animationStyles.transition || "all 0.1s linear",
      });
    } else if (resetOnLeave) {
      setStyle({
        opacity: 0,
        transform: animationStyles.initial || "translate(0, 0)", // Reset to initial transform
        transition: animationStyles.transition || "all 0.1s linear",
      });
    }
  }, [inView, animationStyles, resetOnLeave]);

  return { ref, style };
};
