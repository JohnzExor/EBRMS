import { usersColumns } from "@/components/tables/UsersColumns";
import { DataTable } from "@/components/tables/data-table";
import { useSqlServices } from "@/store/useSql";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const AdminManageUsers = () => {
  const { getUsers, users } = useSqlServices();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getUsers().then(() => setIsLoading(false));
  }, []);

  return (
    <div className="w-full">
      {isLoading ? (
        <AiOutlineLoading size={20} className=" animate-spin mt-10 m-auto" />
      ) : (
        <DataTable columns={usersColumns} data={users} />
      )}
    </div>
  );
};

export default AdminManageUsers;
