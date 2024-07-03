import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaDollarSign, FaUserAlt } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiEventstore } from "react-icons/si";
import { TbReport } from "react-icons/tb";

const HomeBox = () => {
    const data = [
        {
            title: "Employee",
            number: "78",
            icon: <FaUserAlt className="text-orange-300" />,
            bg: "bg-[#ECF2FF]"
        },
        {
            title: "Clients",
            number: "34",
            icon: <BsClipboard2CheckFill color="#B0EBB4"/>,
            bg: "bg-[#FEF5E5]"
        },
        {
            title: "Projects",
            number: "3445",
            icon: <GoProjectSymlink className="text-[#5D87FF]" />,
            bg: "bg-[#E8F7FF]"
        },
        {
            title: "Events",
            number: "78",
            icon: <SiEventstore className="text-orange-300 " />,
            bg: "bg-[#FDEDE8]"
        },
        {
            title: "Payroll",
            number: "$78,989",
            icon: <FaDollarSign color="#B0EBB4" />,
            bg: "bg-[#E6FFFA]"
        },
        {
            title: "Reports",
            number: "989",
            icon: <TbReport className="text-[#5D87FF]" />,
            bg: "bg-[#EBF3FE]"
        },
    ]
    return (
        <div className={`grid md:grid-cols-3 xl:grid-cols-6 items-center w-full gap-4 h-[100px]  rounded-lg `}>
            {data.map((item, index) => (
                <div className={`grid grid-cols-3 shadow-sm items-center w-full gap-14 h-[100px] ${item?.bg} rounded-lg p-4`} key={index}>

                    <div className="bg-white shadow-sm w-[50px] h-[50px] rounded-full flex items-center justify-center">
                        {item?.icon}
                    </div>

                    <div className="flex flex-col col-span-2  w-full ">
                        <p className="text-[#777] font-semibold">{item?.title}</p>
                        <p className="text-xl font-semibold">{item?.number}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeBox
