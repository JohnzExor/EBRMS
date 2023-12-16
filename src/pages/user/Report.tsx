import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters, AiOutlineEdit } from "react-icons/ai";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { reportSchema } from "@/lib/types";
import { useSqlServices } from "@/store/useSql";
import { useState } from "react";

const Report = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [hideName, setHideName] = useState(true);

  const { postReport } = useSqlServices();
  const { register, handleSubmit, watch } = useForm<
    z.infer<typeof reportSchema>
  >({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      uid: Number(""),
      createTimeAt: "",
      createdDateAt: "",
      dateAndTime: "",
      details: "",
      fileStatus: Number(""),
      nameToReport: "",
      placeOfTheEvent: "",
      status: Number(""),
      violation: "",
    },
  });

  const onSubmit = (values: z.infer<typeof reportSchema>) => {
    setIsLoading(true);
    postReport(values).then(() => {
      navigate("/status");
    });
  };

  return (
    <div className="p-3 w-full">
      <h1 className="font-semibold text-2xl pb-3">Report</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 text-sm"
      >
        <div className="flex items-center">
          <input
            disabled={isConfirmed}
            type={hideName ? "password" : "text"}
            placeholder="Full name"
            className=" disabled:opacity-50 w-full border p-2 rounded-xl bg-transparent"
            {...register("nameToReport")}
          />
          <span
            onClick={() => setHideName(!hideName)}
            className=" disabled:opacity-50 text-4xl  p-2 "
          >
            {!hideName ? <VscEye /> : <VscEyeClosed />}
          </span>
        </div>

        <input
          disabled={isConfirmed}
          type="text"
          placeholder="Violation"
          className=" disabled:opacity-50 w-full border p-2 rounded-xl bg-transparent"
          {...register("violation")}
        />
        <input
          disabled={isConfirmed}
          type="text"
          placeholder="Place of the event"
          className=" disabled:opacity-50 w-full border p-2 rounded-xl bg-transparent"
          {...register("placeOfTheEvent")}
        />
        <input
          disabled={isConfirmed}
          type="text"
          placeholder="Date (mm/dd/yy)"
          className=" disabled:opacity-50 w-full border p-2 rounded-xl bg-transparent"
          {...register("dateAndTime")}
        />
        <textarea
          disabled={isConfirmed}
          placeholder="Details"
          className=" disabled:opacity-50 w-full border p-2 rounded-xl bg-transparent h-52"
          {...register("details")}
        />
        <div className="flex items-center gap-2 mt-2">
          <Link
            to="/"
            className=" border w-14 rounded-xl py-3 font-semibold flex items-center justify-center"
          >
            <IoIosArrowBack size={20} />
          </Link>
          {isConfirmed ? (
            <>
              <span
                onClick={() => setIsConfirmed(false)}
                className=" cursor-pointer disabled:bg-opacity-50 border rounded-xl py-3 font-semibold flex items-center justify-center px-4 dark:bg-transparent"
              >
                <AiOutlineEdit size={20} />
              </span>
              <button
                disabled={isLoading}
                type="submit"
                className=" disabled:bg-opacity-50 border w-full rounded-xl py-3 bg-black text-white font-semibold flex items-center justify-center px-5 dark:bg-transparent"
              >
                {isLoading ? (
                  <AiOutlineLoading3Quarters
                    size={20}
                    className=" animate-spin"
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </>
          ) : (
            <Dialog>
              <DialogTrigger className=" border w-full rounded-xl py-3 bg-black text-white font-semibold flex items-center justify-center px-5 dark:bg-transparent">
                Next
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col w-full">
                  <h1 className="font-medium text-2xl">Review</h1>
                  <span className="font-semibold">
                    Name:{" "}
                    <span className="font-normal">
                      {watch("nameToReport").substring(0, 1)}*****
                    </span>
                  </span>
                  <span className="font-semibold">
                    Violation:{" "}
                    <span className="font-normal">{watch("violation")}</span>
                  </span>
                  <span className="font-semibold">
                    Location:{" "}
                    <span className="font-normal">
                      {watch("placeOfTheEvent")}
                    </span>
                  </span>
                  <span className="font-semibold">
                    Date:{" "}
                    <span className="font-normal">{watch("dateAndTime")}</span>
                  </span>
                  <span className="font-semibold">
                    Details:{" "}
                    <span className="font-normal">{watch("details")}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <DialogClose className=" border w-14 rounded-xl py-3 font-semibold flex items-center justify-center">
                    <IoIosArrowBack size={20} />
                  </DialogClose>
                  <DialogClose
                    onClick={() => setIsConfirmed(true)}
                    className=" border w-full rounded-xl py-3 bg-black text-white font-semibold flex items-center justify-center px-5 dark:bg-transparent"
                  >
                    Confirm
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </form>
    </div>
  );
};

export default Report;
