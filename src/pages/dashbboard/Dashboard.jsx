import Navbar from "../../shared/navbar/Navbar";
import Sidebar from "../../shared/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import {Outlet} from "react-router-dom"

const Dashboard = () => {
  const isLarge = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className="w-full h-screen flex">
      <div className="w-[14%] bg-white hidden md:flex  h-screen  pb-4 px-4">
        {isLarge ? " " : <Sidebar />}
      </div>
      <div
        className={`${isLarge ? "w-full" : "w-[86%]"
          }   h-[80px] bg-white py-5 pl-4 pr-4 md:pr-8`}
      >
        <Navbar />

        <div className="w-full py-8 lg:p-8">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
