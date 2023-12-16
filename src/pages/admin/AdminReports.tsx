import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/data-table";
import { useSqlServices } from "@/store/useSql";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const AdminReports = () => {
  const { getReports, reports } = useSqlServices();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReports().then(() => setIsLoading(false));
  }, []);
  return (
    <div className="w-full">
      {isLoading ? (
        <AiOutlineLoading size={20} className=" animate-spin mt-10 m-auto" />
      ) : (
        <DataTable columns={columns} data={reports} />
      )}
    </div>
  );
};

export default AdminReports;
