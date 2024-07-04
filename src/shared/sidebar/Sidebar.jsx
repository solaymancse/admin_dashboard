import { SidebarData } from "../../components/sidebarData/SidebarData";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const locationHandler = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return <div className="w-full">
    <div className="w-full h-[80px]  items-center flex justify-center">
      <img className="w-[120px] h-full" src={logo} alt="" />
    </div>

    <div className="mt-4">
      {/* sidebar content */}
      {SidebarData.map((item, index) => (

        <Link to={item?.path} key={index} className={`flex justify-start text-start items-center px-2 rounded-lg ${locationHandler(item?.path)} hover:bg-blue-100`}>
          <div className="w-[50px] h-[45px] rounded-full flex items-center justify-center">
            {item?.icon}
          </div>
          <div className="flex justify-start text-start"> {item.title}</div>
        </Link>

      ))}
    </div>
  </div>;
};

export default Sidebar;
