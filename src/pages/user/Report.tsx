import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReviewReport from "./ReviewReport";

const Report = () => {
  return (
    <div className="p-3">
      <h1 className="font-semibold text-2xl pb-3">Report</h1>
      <form className="flex flex-col gap-2 text-sm">
        <input
          type="text"
          placeholder="Full name"
          className="w-full border p-2 rounded-xl bg-transparent"
        />
        <input
          type="text"
          placeholder="Violation"
          className="w-full border p-2 rounded-xl bg-transparent"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded-xl bg-transparent"
        />
        <input
          type="text"
          placeholder="Date (mm/dd/yy)"
          className="w-full border p-2 rounded-xl bg-transparent"
        />
        <textarea
          placeholder="Details"
          className="w-full border p-2 rounded-xl bg-transparent h-52"
        />
      </form>
      <div className="flex items-center gap-2 mt-2">
        <Link
          to="/"
          className=" border w-14 rounded-xl py-3 font-semibold flex items-center justify-center"
        >
          <IoIosArrowBack size={20} />
        </Link>
        <Dialog>
          <DialogTrigger className=" border w-full rounded-xl py-3 bg-black text-white font-semibold flex items-center justify-center px-5 dark:bg-transparent">
            Next
          </DialogTrigger>
          <DialogContent>
            <ReviewReport />
            <div className="flex items-center gap-2 mt-2">
              <DialogClose className=" border w-14 rounded-xl py-3 font-semibold flex items-center justify-center">
                <IoIosArrowBack size={20} />
              </DialogClose>
              <button className=" border w-full rounded-xl py-3 bg-black text-white font-semibold flex items-center justify-center px-5 dark:bg-transparent">
                Next
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Report;
