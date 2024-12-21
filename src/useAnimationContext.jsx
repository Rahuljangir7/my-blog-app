import React, { createContext, useContext } from "react";

// Create a Context
const AnimationContext = createContext();

const animations = {
  elementLeft: {
    initial: "translateX(-300px)", // Start position
    enter: "translateX(0)", // End position
    transition: "all 1s linear",
    smallScreen: {
      initial: "translateX(-100px)", // Adjusted for smaller screens
      enter: "translateX(0)",
    },
  },
  elementRight: {
    initial: "translateX(300px)", // Start position
    enter: "translateX(0)", // End position
    transition: "all 1s linear",
    smallScreen: {
      initial: "translateX(100px)", // Adjusted for smaller screens
      enter: "translateX(0)",
    },
  },
  elementTop: {
    initial: "translateY(-50px)", // Start position
    enter: "translateY(0)", // End position
    transition: "all 0.8s linear",
    smallScreen: {
      initial: "translateY(-20px)", // Adjusted for smaller screens
      enter: "translateY(0)",
    },
  },
  elementBottom: {
    initial: "translateY(50px)", // Start position
    enter: "translateY(0)", // End position
    transition: "all 0.8s linear",
    smallScreen: {
      initial: "translateY(10px)", // Adjusted for smaller screens
      enter: "translateY(0)",
    },
  },
  element: {
    initial: "translate(-50px, -50px)", // Start position
    enter: "translate(0, 0)", // End position
    transition: "all 1s linear",
    smallScreen: {
      initial: "translate(-20px, -20px)", // Adjusted for smaller screens
      enter: "translate(0, 0)",
    },
  },
  opacity: {
    initial: "opacity(0)", // Start position
    enter: "opacity(1)", // End position
    transition: "all 0.5s linear",
    smallScreen: {
      initial: "opacity(0)", // Adjusted for smaller screens
      enter: "opacity(1)",
    },
  },
};

// Provide the Context
export const AnimationProvider = ({ children }) => {
  return (
    <AnimationContext.Provider value={animations}>
      {children}
    </AnimationContext.Provider>
  );
};

// Hook to use the Context
export const useAnimationContext = () => {
  return useContext(AnimationContext);
};
