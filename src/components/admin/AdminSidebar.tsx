import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/mode-toggle";
import AdminProfile from "./AdminProfile";

const AdminSidebar = () => {
  return (
    <div className=" h-full flex flex-col gap-2">
      <label className="font-medium p-2">
        EBRMS <span className="font-normal">Admin</span>
      </label>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <span>Theme</span>
      </div>
      <Link to="/admin/" className=" border p-2 rounded-xl">
        Home
      </Link>
      <Link to="/admin/reports" className=" border p-2 rounded-xl">
        Reports
      </Link>
      <Link to="/admin/manageusers" className=" border p-2 rounded-xl">
        Manage Users
      </Link>
      <Link to="/" className=" border p-2 rounded-xl">
        Go Back
      </Link>
      <div className="mt-auto">
        <AdminProfile />
      </div>
    </div>
  );
};

export default AdminSidebar;
