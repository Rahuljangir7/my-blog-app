import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AnimationProvider } from "./useAnimationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimationProvider >
      <App />
    </AnimationProvider>
  </StrictMode>
);
