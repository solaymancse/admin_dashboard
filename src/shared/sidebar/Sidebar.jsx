import { SidebarData } from "../../components/sidebarData/SidebarData";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { bool } from "prop-types";
import { Collapse } from "antd";
const Sidebar = ({ isClicked }) => {
  const location = useLocation();

  const locationHandler = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const onChange = (key) => {
    console.log(key);
  };

  return <div className="w-full">
    <div className="w-full h-[80px]  items-center flex justify-center">
      <img className={`${isClicked ? "w-[80px] h-[40px]" : "w-[120px] h-full"} `} src={logo} alt="" />
    </div>

    <div className="mt-4">
      {/* sidebar content */}
      {SidebarData.map((item, index) => {
        console.log('item', item)

        return (
          <div key={index}>
            {item?.isDropdown ? (
              <Collapse items={item} defaultActiveKey={['1']} onChange={onChange}>

                <p>{item?.title}</p>
                {item?.subItems?.map((subItem, index) => (

                  <Link key={index} to={subItem?.path} className={`flex justify-start text-start items-center px-2 rounded-lg ${locationHandler(subItem?.path)} hover:bg-blue-100`} />

                ))}
              </Collapse>

            ) : (

              <Link to={item?.path} className={`flex justify-start text-start items-center px-2 rounded-lg ${locationHandler(item?.path)} hover:bg-blue-100`}>
                <div className="w-[50px] h-[45px] rounded-full flex items-center justify-center">
                  {item?.icon}
                </div>
                {isClicked ? " " : <div className="flex justify-start text-start"> {item.title}</div>}
              </Link>

            )}
          </div>
        )

      })}
    </div>
  </div>;
};

Sidebar.propTypes = {
  isClicked: bool
};
export default Sidebar;
