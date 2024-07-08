import { SidebarData } from "../../components/sidebarData/SidebarData";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { bool } from "prop-types";
import { Collapse } from "antd";
import { useState } from "react";
const { Panel } = Collapse;

const Sidebar = ({ isClicked }) => {
  const [handleIsActiveIndex, setHandleIsActiveIndex] = useState(null);
  const location = useLocation();

  const locationHandler = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const onChange = (key) => {
    if (Array.isArray(key)) {
      setHandleIsActiveIndex(key[0]);
    } else {
      setHandleIsActiveIndex(key);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-[80px] items-center flex justify-center">
        <img className={`${isClicked ? "w-[80px] h-[40px]" : "w-[120px] h-full"} `} src={logo} alt="logo" />
      </div>

      <div className="mt-4">
        {/* sidebar content */}
        {SidebarData.map((item, index) => (
          <div className="sidebar" key={index}>
            {item?.isDropdown ? (
              <Collapse
                expandIconPosition="right"
                onChange={onChange}
                className={`${index.toString() === handleIsActiveIndex ? 'sidebar2' : 'bg-white'}`}
              >
                <Panel
                  header={
                    <div className={`flex gap-4  justify-start text-start items-center px-2 rounded-lg`}>
                      {item?.icon}
                      <p className="ml-1">{item?.title}</p>
                    </div>
                  }
                  key={index.toString()}
                >
                  {item?.subItems?.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem?.path}
                      className={`flex mb-4 justify-start text-start items-center px-2 rounded-lg ${locationHandler(subItem?.path)} hover:bg-blue-100`}
                    >
                      {subItem?.icon}
                      <span className="ml-2">{subItem?.title}</span>
                    </Link>
                  ))}
                </Panel>
              </Collapse>
            ) : (
              <Link
                to={item?.path}
                className={`flex justify-start text-start items-center px-2 rounded-lg ${locationHandler(item?.path)} hover:bg-blue-100`}
              >
                <div className="w-[50px] h-[45px] rounded-full flex items-center justify-center">
                  {item?.icon}
                </div>
                {!isClicked && <div className="flex justify-start text-start">{item.title}</div>}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isClicked: bool,
};

export default Sidebar;
