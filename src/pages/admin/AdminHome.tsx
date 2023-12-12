import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-3 md:gap-10 max-w-2xl">
        <h1 className="font-semibold md:text-6xl text-5xl">
          Employee Behavior Reporting and Monitoring System
        </h1>
        <div className="flex flex-col gap-2">
          <Link to="/admin/reports/">
            <button className="border rounded-xl p-2 w-full">Reports</button>
          </Link>
          <Link to="/admin/manageusers/">
            <button className="border rounded-xl p-2 w-full">
              Manage Users
            </button>
          </Link>
          <Link to="/">
            <button className="border rounded-xl p-2 w-full">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
