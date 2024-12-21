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

  useEffect(() => {
    // Helper function to get the correct styles based on screen width
    const getAnimationStyles = () => {
      const isMobile = window.innerWidth <= 360;
      return isMobile
        ? animationStyles.smallScreen || animationStyles
        : animationStyles;
    };

    if (inView) {
      const currentStyles = getAnimationStyles();
      setStyle({
        opacity: 1,
        transform: currentStyles.enter || "translate(0, 0)", // Target transform
        transition: currentStyles.transition || "all 0.3s linear",
      });
    } else if (resetOnLeave) {
      const currentStyles = getAnimationStyles();
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
      const currentStyles =
        window.innerWidth <= 360
          ? animationStyles.smallScreen || animationStyles
          : animationStyles;
      setStyle((prevStyle) => ({
        ...prevStyle,
        transform: currentStyles.initial || "translate(0, 0)",
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [animationStyles]);

  return { ref, style };
};
