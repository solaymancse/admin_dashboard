import { SidebarData } from "../../components/sidebarData/SidebarData";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return <div className="w-full">
    <div className="w-full h-[80px]  items-center flex justify-center">
      <img className="w-[120px] h-full" src={logo} alt="" />
    </div>

    <div className="mt-4">
      {/* sidebar content */}
      {SidebarData.map((item, index) => {
        return <div key={index} className="flex justify-start text-start items-center ">
          
          <div className="bg-white shadow-sm w-[50px] h-[50px] rounded-full flex items-center justify-center">
            {item?.icon}
          </div>
          <div  className="flex justify-start text-start"> {item.title}</div>
        </div>
          ;
      })}
    </div>
  </div>;
};

export default Sidebar;
