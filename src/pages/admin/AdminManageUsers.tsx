import { usersColumns } from "@/components/tables/UsersColumns";
import { DataTable } from "@/components/tables/data-table";

const AdminManageUsers = () => {
  const data = [
    {
      email: "admin@ibms.com",
      isRegistered: 1,
      isSuperUser: 1,
      password: "123456",
      status: 1,
      uid: "1701441511584",
    },
    {
      email: "user1@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "password123",
      status: 1,
      uid: "1701441511585",
    },
    {
      email: "user2@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "qwerty",
      status: 1,
      uid: "1701441511586",
    },
    {
      email: "user3@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "abc123",
      status: 1,
      uid: "1701441511587",
    },
    {
      email: "user4@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "passpass",
      status: 1,
      uid: "1701441511588",
    },
    {
      email: "user5@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "userpass",
      status: 1,
      uid: "1701441511589",
    },
    {
      email: "user6@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "secure123",
      status: 1,
      uid: "1701441511590",
    },
    {
      email: "user7@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "letmein",
      status: 1,
      uid: "1701441511591",
    },
    {
      email: "user8@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "test123",
      status: 1,
      uid: "1701441511592",
    },
    {
      email: "user9@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "123abc",
      status: 1,
      uid: "1701441511593",
    },
    {
      email: "user10@example.com",
      isRegistered: 1,
      isSuperUser: 0,
      password: "example",
      status: 1,
      uid: "1701441511594",
    },
  ];

  return (
    <div className="w-full">
      <DataTable columns={usersColumns} data={data} />
    </div>
  );
};

export default AdminManageUsers;
