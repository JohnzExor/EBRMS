import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
