import AdminHeader from "@/components/admin/AdminHeader";
import Footer from "@/components/user/Footer";
import { Outlet } from "react-router-dom";

const AdminIndex = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <AdminHeader />
      <div className=" max-w-7xl w-full px-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AdminIndex;
