import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="w-full p-2">
      <Link to="/admin">
        <button className="w-full border text-left p-2 rounded-md">
          Enter Admin
        </button>
      </Link>
    </div>
  );
};

export default Settings;
