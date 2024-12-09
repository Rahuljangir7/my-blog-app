import React, { createContext, useContext } from "react";

// Create a Context
const AnimationContext = createContext();

const animations = {
  elementLeft: {
    initial: "translateX(-300px)", // Start position
    enter: "translateX(0)", // End position
    transition: "all 1s linear",
  },
  elementRight: {
    initial: "translateX(300px)", // Start position
    enter: "translateX(0)", // End position
    transition: "all 1s linear",
  },
  elementTop: {
    initial: "translateY(-50px)",
    enter: "translateY(0)",
    transition: "all 0.8s linear",
  },
  elementBottom: {
    initial: "translateY(50px)",
    enter: "translateY(0)",
    transition: "all 0.8s linear",
  },
  element: {
    initial: "translate(-50px, -50px)",
    enter: "translate(0, 0)",
    transition: "all 1s linear",
  },
  opacity: {
    initial: "translate(0)",
    enter: "translate(0)",
    transition: "all 0.5s linear",
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
