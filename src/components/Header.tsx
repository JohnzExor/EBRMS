import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { PiHouseSimple } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-2 border-b">
      <Sheet>
        <SheetTrigger className="p-2">
          <HiOutlineBars3BottomRight size={30} />
        </SheetTrigger>
        <SheetContent side="left">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <label className="font-medium">EBRMS</label>
      <Link to="/" className="p-2">
        <PiHouseSimple size={25} />
      </Link>
    </div>
  );
};

export default Header;
