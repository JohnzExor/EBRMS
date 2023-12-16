import { toast } from "@/components/ui/use-toast";
import { useSqlTypes } from "@/lib/types";
import { create } from "zustand";

const apiURL = "https://ebrms-backend.vercel.app";

export const useSqlServices = create<useSqlTypes>((set) => ({
  personalReports: [],
  reports: [],
  users: [],
  getPersonalReports: async () => {
    try {
      const response = await fetch(`${apiURL}/reports/1`);
      const data = await response.json();
      set({ personalReports: data });
    } catch (e: any) {
      toast({ description: e.message });
    }
  },
  getReports: async () => {
    try {
      const response = await fetch(`${apiURL}/reports`);
      const data = await response.json();
      set({ reports: data });
    } catch (e: any) {
      toast({ description: e.message });
    }
  },
  getUsers: async () => {
    try {
      const response = await fetch(`${apiURL}/users`);
      const data = await response.json();
      set({ users: data });
    } catch (e: any) {
      toast({ description: e.message });
    }
  },

  postReport: async (data) => {
    try {
      const currentDate = new Date();
      await fetch(`${apiURL}/reports/`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          uid: 1,
          createTimeAt: currentDate.toLocaleTimeString(),
          createdDateAt: currentDate.toLocaleDateString(),
          dateAndTime: data.dateAndTime,
          details: data.details,
          fileStatus: 0,
          nameToReport: data.nameToReport,
          placeOfTheEvent: data.placeOfTheEvent,
          status: 0,
          violation: data.violation,
        }),
      }).then(() => toast({ description: "Report Submitted" }));
    } catch (e: any) {
      toast({ description: e.message });
    }
  },
  deleteReport: async (documentID) => {
    try {
      const { getPersonalReports } = useSqlServices.getState();
      const response = await fetch(`${apiURL}/reports/${documentID}`, {
        method: "DELETE",
      });
      await response.json().then(() => {
        toast({ description: "Report canceled/deleted" });
        getPersonalReports();
      });
      console.log("fdsafd");
    } catch (e: any) {
      toast({ description: e.message });
    }
  },
}));
