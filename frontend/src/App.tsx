import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import DisplayPage from "@/pages/display";
import HistoryPage from "@/pages/history";
import AboutPage from "./pages/about";
import { toast } from "sonner";
import { useEffect, useRef } from "react";
import { useApiHelpers } from "./lib/api";
import Header from "@/components/ui/header";
import ThemeProvider from "@/lib/theme";

const App = () => {
  const apiHelpers = useApiHelpers();
  const hasRun = useRef(false);
  useEffect(() => {
    async function checkStatus() {
      const isAlive = await apiHelpers.getServerStatus();
      if (isAlive)
        toast.success("Server Connected", {
          position: "top-right",
        });
      else
        toast.error("Server Failure", {
          position: "top-right",
        });
    }
    if (!hasRun.current) {
      checkStatus();
      hasRun.current = true;
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="h-screen w-screen m-0 p-0 box-border">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<DisplayPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
