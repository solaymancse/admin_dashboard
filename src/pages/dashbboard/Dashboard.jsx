import Navbar from "../../shared/navbar/Navbar";
import Sidebar from "../../shared/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  const isLarge = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className="w-full h-screen flex">
      <div className="w-[14%] hidden md:flex bg-red-300 h-screen p-4">
        {isLarge ? " " : <Sidebar />}
      </div>
      <div
        className={`${
          isLarge ? "w-full" : "w-[86%]"
        }  border-b h-[80px] py-5 pl-4 pr-4 md:pr-8`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
