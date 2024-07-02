import { FaDollarSign, FaUserAlt } from "react-icons/fa";

const HomeBox = () => {
    const data = [
        {
            title: "Employees",
            number: "78",
            icon: <FaUserAlt />,
            bg: "bg-[#ECF2FF]"
        },
        {
            title: "Clients",
            number: "34",
            icon: <FaUserAlt />,
            bg: "bg-[#FEF5E5]"
        },
        {
            title: "Projects",
            number: "3445",
            icon: <FaUserAlt />,
            bg: "bg-[#E8F7FF]"
        },
        {
            title: "Events",
            number: "78",
            icon: <FaUserAlt />,
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
            icon: <FaUserAlt />,
            bg: "bg-[#EBF3FE]"
        },
    ]
    return (
        <div className={`grid md:grid-cols-3 lg:grid-cols-6 items-center w-full gap-4 h-[100px]  rounded-lg `}>
            {data.map((item, index) => (
                <div className={`grid grid-cols-3 shadow-sm items-center w-full  h-[100px] ${item?.bg} rounded-lg p-4`} key={index}>

                    <div className="bg-white shadow-sm w-[50px] h-[50px] rounded-full flex items-center justify-center">
                        {item?.icon}
                    </div>

                    <div className="flex flex-col col-span-2  w-full ">
                        <p className="text-[#777] font-semibold">{item?.title}</p>
                        <p className="text-2xl font-semibold">{item?.number}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeBox
