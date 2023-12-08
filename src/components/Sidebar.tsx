import { Link } from "react-router-dom";
import Profile from "./Profile";
import { ModeToggle } from "./theme/mode-toggle";

const Sidebar = () => {
  return (
    <div className=" h-full flex flex-col gap-2">
      <ModeToggle />

      <Link to="/" className=" border p-2 rounded-xl">
        Home
      </Link>
      <Link to="/status" className=" border p-2 rounded-xl">
        Report Status
      </Link>
      <div className="mt-auto">
        <Profile />
      </div>
    </div>
  );
};

export default Sidebar;
