import Reports from "@/components/user/Reports";
import { useSqlServices } from "@/store/useSql";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Status = () => {
  const { getPersonalReports, personalReports } = useSqlServices();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPersonalReports().then(() => setIsLoading(false));
  }, []);
  return (
    <div className="p-3 flex flex-col gap-2 w-full">
      <h1 className="text-2xl font-semibold pb-2">Report Status</h1>
      {isLoading ? (
        <AiOutlineLoading size={20} className=" animate-spin" />
      ) : personalReports.length > 0 ? (
        personalReports.map((data, index) => (
          <Reports data={data} key={index} />
        ))
      ) : (
        <p>No Reports</p>
      )}
    </div>
  );
};

export default Status;
