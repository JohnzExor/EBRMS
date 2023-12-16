import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="w-full p-2">
      <Link to="/admin">
        <button className="w-full border text-left p-2 rounded-md flex flex-col font-medium">
          Enter Admin
          <span className="font-normal">
            It appears that you have administrative privileges. Please click
            here to access the admin dashboard.
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Settings;
