import { ReportDetails, textStatus } from "@/lib/types";
import CancelReport from "./CancelReport";

type Props = {
  data: ReportDetails;
};

const Reports = ({ data }: Props) => {
  return (
    <div className="flex flex-col border rounded-xl p-2">
      <span className="flex items-center justify-between font-medium">
        <span>{textStatus[Number(data.status)]}</span>
        <span>{data.createdDateAt}</span>
      </span>
      <span className=" text-sm pt-1 flex flex-col">
        <span className="font-medium">
          Reported for: <span className=" font-normal">{data.violation}</span>
        </span>
        <span className="font-medium">
          Details: <span className="font-normal">{data.details}</span>
        </span>
      </span>
      <div className="flex flex-col items-center">
        <CancelReport documentID={data.documentID ? data.documentID : ""} />
      </div>
    </div>
  );
};

export default Reports;
