import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner"
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster 
      position="top-right"
      theme="dark"
      richColors
      duration={3000}
      // closeButton
      toastOptions={{ className: "p-4 rounded-lg" }}
    />  
    <App />
  </StrictMode>,
);
