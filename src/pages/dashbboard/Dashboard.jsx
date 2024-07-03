import Navbar from "../../shared/navbar/Navbar";
import Sidebar from "../../shared/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const isLarge = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className={`w-[14%] bg-white hidden md:flex shadow-md  flex-col h-full pb-4 px-4 ${isLarge ? " " : "overflow-y-auto"} no-scrollbar`}>
        {!isLarge && <Sidebar />}
      </div>
      <div className={`${isLarge ? "w-full" : "w-[86%]"} flex flex-col h-full`}>
        <div className="h-[80px] bg-white py-5 pl-4 pr-4 md:pr-8 sticky top-0 z-10 shadow-sm">
          <Navbar />
        </div>
        <div className="w-full px-3 py-8 lg:p-8 overflow-y-auto no-scrollbar flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
