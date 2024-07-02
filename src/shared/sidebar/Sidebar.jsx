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
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  </div>;
};

export default Sidebar;
