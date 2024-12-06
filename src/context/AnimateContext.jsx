import { createContext } from "react";

export const AnimatedContext = createContext();

export const AnimatedProvider = ({ children }) => {
  const animated = {
    animateY: {
      opacity: 1,
      y: 0,
    },
    animateX: {
      opacity: 1,
      x: 0,
    },
    initialValTop: {
      opacity: 0,
      y: -300,
    },
    initialValLeft: {
      opacity: 0,
      x: -500,
    },
    initialValRight: {
      opacity: 0,
      x:"50vw"
    },
    initialValBottom: {
      opacity: 0,
      y: 50
    }
  };

  return (
    <AnimatedContext.Provider value={animated}>
      {children}
    </AnimatedContext.Provider>
  );
};
