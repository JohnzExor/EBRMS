import { z } from "zod";

export const textStatus = [
  "Requesting",
  "Reviewing",
  "Accepted",
  "Complete",
  "Denied",
];
export type useSqlTypes = {
  personalReports: ReportDetails[];
  reports: ReportDetails[];
  users: UsersDetails[];
  getPersonalReports: () => Promise<void>;
  getReports: () => Promise<void>;
  getUsers: () => Promise<void>;
  postReport: (values: z.infer<typeof reportSchema>) => Promise<void>;
  deleteReport: (documentID: string) => Promise<void>;
};

export type ReportDetails = {
  uid?: String | Number;
  nameToReport: String;
  violation: String;
  placeOfTheEvent: String;
  dateAndTime: String;
  details: String;
  createdDateAt?: string;
  createdTimeAt?: string;
  status?: number | string;
  statusNo?: string;
  documentID?: string;
  fileStatus?: string | number;
};

export type UsersDetails = {
  isSuperUser: number;
  email: string;
  password: string;
  uid?: string;
  isRegistered: number;
  status: number;
};

export const reportSchema = z.object({
  uid: z.number(),
  createTimeAt: z.string(),
  createdDateAt: z.string(),
  dateAndTime: z.string(),
  details: z.string(),
  fileStatus: z.number(),
  nameToReport: z.string(),
  placeOfTheEvent: z.string(),
  status: z.number(),
  violation: z.string(),
});
