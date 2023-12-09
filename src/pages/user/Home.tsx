import { Link } from "react-router-dom";
import { TbReportMedical } from "react-icons/tb";

const Home = () => {
  return (
    <div className="p-3 flex flex-col gap-10 w-full">
      <h1 className="text-5xl font-medium">
        Employee Behavior Reporting and Monitoring System
      </h1>
      <div className="flex flex-col items-center">
        <Link
          to="/report"
          className=" border w-full rounded-xl py-3 bg-black text-white font-semibold flex items-center justify-between px-5 dark:bg-transparent"
        >
          Report Now
          <TbReportMedical size={20} />
        </Link>
        <span className="text-xs">
          *Reporting someone will greatly help in an institution.
        </span>
      </div>
    </div>
  );
};

export default Home;
