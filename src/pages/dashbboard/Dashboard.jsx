import Navbar from "../../shared/navbar/Navbar";
import Sidebar from "../../shared/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import SettingDrawer from "../../components/SettingDrawer/SettingDrawer";
import { useState } from "react";

const Dashboard = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const isLarge = useMediaQuery({ query: "(max-width: 1023px)" });

  const showDrawer = () => {
    setOpen(true);
  };


  return (
    <div className="w-full h-screen relative flex overflow-hidden">
      <div className={`${isClicked ? "w-[5%]" : "w-[14%]"} transition-all duration-300 ease-in-out bg-white dark:bg-dark hidden xl:flex shadow-md  flex-col h-full pb-4 pl-0 pr-4 ${isLarge ? " " : "overflow-y-auto"} no-scrollbar`}>
        {!isLarge && <Sidebar isClicked={isClicked} />}
      </div>
      <div className={`${isLarge ? "w-full" : "w-full"} flex flex-col h-full`}>
        <div className="h-[80px] bg-white py-5 pl-4 pr-4 md:pr-8 sticky top-0 z-10 shadow-sm">
          <Navbar isClicked={isClicked} setIsClicked={setIsClicked} />
        </div>
        <div className="w-full px-3 py-8 lg:p-8 overflow-y-auto no-scrollbar flex-grow">
          <Outlet />
          <div onClick={showDrawer} className="w-[50px] h-[50px] cursor-pointer flex justify-center items-center z-20 absolute right-8 bottom-[10%]  rounded-full bg-[#687EFF]">
            <IoSettingsOutline color="#fff" size={20} />
          </div>
        </div>

        <SettingDrawer open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Dashboard;
