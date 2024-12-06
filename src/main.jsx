import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AnimatedProvider } from "./context/AnimateContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatedProvider>
      <App />
    </AnimatedProvider>
  </StrictMode>
);
