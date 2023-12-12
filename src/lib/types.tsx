export type ReportDetails = {
  uid?: String;
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
  fileStatus?: string;
};

export type UsersDetails = {
  isSuperUser: number;
  email: string;
  password: string;
  uid?: string;
  isRegistered: number;
  status: number;
};
