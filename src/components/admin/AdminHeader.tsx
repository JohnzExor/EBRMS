import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PiHouseSimple } from "react-icons/pi";
import AdminSidebar from "./AdminSidebar";
import AdminProfile from "./AdminProfile";
import { ModeToggle } from "../theme/mode-toggle";

const AdminHeader = () => {
  return (
    <div className="flex items-center justify-between md:justify-center border-b w-full">
      <Sheet>
        <SheetTrigger className="p-2 md:hidden">
          <HiOutlineBars3BottomRight size={30} />
        </SheetTrigger>
        <SheetContent side="left">
          <AdminSidebar />
        </SheetContent>
      </Sheet>
      <div className="flex md:items-center md:justify-between md:w-full md:max-w-6xl">
        <div className="flex items-center gap-1">
          <Link to="/admin/">
            <label className="font-medium p-2 cursor-pointer">
              EBRMS <span className="font-normal">Admin</span>
            </label>
          </Link>
          <ModeToggle />
        </div>

        <div className="hidden md:block py-1">
          <AdminProfile />
        </div>
      </div>

      <Link to="/admin/" className="p-2 md:hidden">
        <PiHouseSimple size={25} />
      </Link>
    </div>
  );
};

export default AdminHeader;
