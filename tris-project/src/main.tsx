import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <div
    style={{
      display: "grid",
      placeContent: "center",
      width: "100vw",
    }}
  >
    <App />
  </div>
  // </StrictMode>
);
