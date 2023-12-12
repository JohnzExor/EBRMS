import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import Sidebar from "@/components/user/Sidebar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="md:flex flex-col md:flex-row md:gap-14 w-full md:pt-10 justify-center md:px-3">
        <div className="h-full hidden md:block">
          <Sidebar />
        </div>
        <div className=" max-w-3xl w-full md:border md:rounded-xl">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
