import { columns } from "@/components/tables/Columns";
import { DataTable } from "@/components/tables/data-table";

const AdminReports = () => {
  const data = [
    {
      email: "admin@ibms.com",
      isRegistered: 1,
      isSuperUser: 1,
      password: "123456",
      status: 1,
      uid: "1701441511584",
      createTimeAt: "7:07:06 AM",
      createdDateAt: "12/1/2023",
      dateAndTime: "2023-12-28T22:30",
      details: "Nanguha ng keyboard sa loob ng president's office",
      documentID: "1701443226907",
      fileStatus: "",
      nameToReport: "Francis",
      placeOfTheEvent: "Earth - 308",
      violation: "greed",
    },
    {
      email: "user1@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "password123",
      status: 1,
      uid: "1701441511585",
      createTimeAt: "8:15:30 AM",
      createdDateAt: "12/2/2023",
      dateAndTime: "2023-12-28T23:45",
      details: "Lorem ipsum dolor sit amet.",
      documentID: "1701443226908",
      fileStatus: "",
      nameToReport: "Alice",
      placeOfTheEvent: "Mars - 123",
      violation: "disorderly conduct",
    },
    {
      email: "user2@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "qwerty",
      status: 1,
      uid: "1701441511586",
      createTimeAt: "9:30:45 AM",
      createdDateAt: "12/3/2023",
      dateAndTime: "2023-12-29T10:20",
      details: "Incident at the space station.",
      documentID: "1701443226909",
      fileStatus: "",
      nameToReport: "Bob",
      placeOfTheEvent: "Moon - 789",
      violation: "reckless behavior",
    },
    {
      email: "user3@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "abc123",
      status: 1,
      uid: "1701441511587",
      createTimeAt: "10:45:00 AM",
      createdDateAt: "12/4/2023",
      dateAndTime: "2023-12-29T15:05",
      details: "Stolen moon rocks.",
      documentID: "1701443226910",
      fileStatus: "",
      nameToReport: "Charlie",
      placeOfTheEvent: "Saturn - 456",
      violation: "theft",
    },
    {
      email: "user4@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "passpass",
      status: 1,
      uid: "1701441511588",
      createTimeAt: "11:00:15 AM",
      createdDateAt: "12/5/2023",
      dateAndTime: "2023-12-30T05:45",
      details: "Illegal asteroid mining.",
      documentID: "1701443226911",
      fileStatus: "",
      nameToReport: "David",
      placeOfTheEvent: "Jupiter - 012",
      violation: "environmental violation",
    },
    {
      email: "user5@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "userpass",
      status: 1,
      uid: "1701441511589",
      createTimeAt: "12:15:30 PM",
      createdDateAt: "12/6/2023",
      dateAndTime: "2023-12-30T14:30",
      details: "Lost communication with the space probe.",
      documentID: "1701443226912",
      fileStatus: "",
      nameToReport: "Eva",
      placeOfTheEvent: "Neptune - 789",
      violation: "communication failure",
    },
    {
      email: "user6@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "secure123",
      status: 1,
      uid: "1701441511590",
      createTimeAt: "1:30:45 PM",
      createdDateAt: "12/7/2023",
      dateAndTime: "2023-12-31T08:15",
      details: "Unauthorized space travel.",
      documentID: "1701443226913",
      fileStatus: "",
      nameToReport: "Frank",
      placeOfTheEvent: "Pluto - 234",
      violation: "space travel violation",
    },
    {
      email: "user7@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "letmein",
      status: 1,
      uid: "1701441511591",
      createTimeAt: "2:45:00 PM",
      createdDateAt: "12/8/2023",
      dateAndTime: "2023-12-31T18:50",
      details: "Collision with an unidentified object.",
      documentID: "1701443226914",
      fileStatus: "",
      nameToReport: "Grace",
      placeOfTheEvent: "Uranus - 567",
      violation: "collision",
    },
    {
      email: "user8@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "test123",
      status: 1,
      uid: "1701441511592",
      createTimeAt: "3:00:15 PM",
      createdDateAt: "12/9/2023",
      dateAndTime: "2024-01-01T09:35",
      details: "Missing astronaut.",
      documentID: "1701443226915",
      fileStatus: "",
      nameToReport: "George",
      placeOfTheEvent: "Mercury - 890",
      violation: "missing person",
    },
    {
      email: "user9@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "123abc",
      status: 1,
      uid: "1701441511593",
      createTimeAt: "4:15:30 PM",
      createdDateAt: "12/10/2023",
      dateAndTime: "2024-01-01T17:20",
      details: "Disturbance on the space station.",
      documentID: "1701443226916",
      fileStatus: "",
      nameToReport: "Helen",
      placeOfTheEvent: "Venus - 123",
      violation: "disturbance",
    },
    {
      email: "user10@example.com",
      isRegistered: 1,
      isSuperUser: "",
      password: "example",
      status: 1,
      uid: "1701441511594",
      createTimeAt: "5:30:45 PM",
      createdDateAt: "12/11/2023",
      dateAndTime: "2024-01-02T06:05",
      details: "Interference with communication signals.",
      documentID: "1701443226917",
      fileStatus: "",
      nameToReport: "Ivan",
      placeOfTheEvent: "Mars - 456",
      violation: "communication interference",
    },
  ];

  return (
    <div className="w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AdminReports;