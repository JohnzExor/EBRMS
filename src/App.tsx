import { Route, Routes } from "react-router-dom";
import Index from "./pages/user/Index";
import Home from "./pages/user/Home";
import Report from "./pages/user/Report";
import Status from "./pages/user/Status";
import { ThemeProvider } from "./components/theme/theme-provider";
import ReviewReport from "./pages/user/ReviewReport";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/reviewreport" element={<ReviewReport />} />
          <Route path="/status" element={<Status />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
