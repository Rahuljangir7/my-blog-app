import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useAnimationContext } from "./useAnimationContext";

export const useInViewAnimation = (elementKey, resetOnLeave = true) => {
  const animations = useAnimationContext(); // Get animations from context
  const animationStyles = animations[elementKey] || {}; // Get specific animation by key

  const { ref, inView } = useInView({ threshold: 0.1 }); // Trigger at 10% visibility

  const [style, setStyle] = useState({
    opacity: 0,
    transform: animationStyles.initial || "translate(0, 0)", // Default transform
    transition: animationStyles.transition || "all 0.3s linear",
  });

  const getAnimationStyles = () => {
    const isMobile = window.innerWidth <= 360;
    return isMobile
      ? animationStyles.smallScreen || animationStyles
      : animationStyles;
  };

  useEffect(() => {
    // Apply animation styles based on inView
    const currentStyles = getAnimationStyles();

    if (inView) {
      setStyle({
        opacity: 1,
        transform: currentStyles.enter || "translate(0, 0)", // Target transform
        transition: currentStyles.transition || "all 0.3s linear",
      });
    } else if (resetOnLeave) {
      setStyle({
        opacity: 0,
        transform: currentStyles.initial || "translate(0, 0)", // Reset to initial transform
        transition: currentStyles.transition || "all 0.3s linear",
      });
    }
  }, [inView, animationStyles, resetOnLeave]);

  useEffect(() => {
    // Listen to screen resize and adjust animations accordingly
    const handleResize = () => {
      const currentStyles = getAnimationStyles();

      setStyle({
        opacity: 0, // Reset opacity
        transform: currentStyles.initial || "translate(0, 0)", // Reset transform
        transition: currentStyles.transition || "all 0.3s linear",
      });

      // Trigger re-render manually by toggling inView
      setTimeout(() => {
        if (inView) {
          setStyle({
            opacity: 1,
            transform: currentStyles.enter || "translate(0, 0)",
            transition: currentStyles.transition || "all 0.3s linear",
          });
        }
      }, 50); // Delay to allow DOM update
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [animationStyles, inView]);

  return { ref, style };
};
