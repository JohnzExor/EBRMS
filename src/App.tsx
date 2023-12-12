import { Route, Routes } from "react-router-dom";
import Index from "./pages/user/Index";
import Home from "./pages/user/Home";
import Report from "./pages/user/Report";
import Status from "./pages/user/Status";
import { ThemeProvider } from "./components/theme/theme-provider";
import ReviewReport from "./pages/user/ReviewReport";
import AdminIndex from "./pages/admin/AdminIndex";
import Settings from "./pages/user/Settings";
import AdminHome from "./pages/admin/AdminHome";
import AdminReports from "./pages/admin/AdminReports";
import AdminManageUsers from "./pages/admin/AdminManageUsers";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/reviewreport" element={<ReviewReport />} />
          <Route path="/status" element={<Status />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/admin" element={<AdminIndex />}>
          <Route path="/admin/" element={<AdminHome />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/manageusers" element={<AdminManageUsers />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
