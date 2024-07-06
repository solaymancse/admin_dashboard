import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaDollarSign, FaRegFolderOpen, FaUserAlt } from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { RiPassPendingFill } from "react-icons/ri";
import { SiEventstore, SiVirustotal } from "react-icons/si";
import { TbReport } from "react-icons/tb";

export const countries = [
    {
      name: "United States",
      dialCode: "+1",
      isoCode: "US",
      lan: "en",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/us.svg",
    },
  
    {
      name: "Bangladesh",
      dialCode: "+880",
      isoCode: "BD",
      lan: "bn",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/bd.svg",
    },
    {
      name: "Saudi Arabia",
      dialCode: "+966",
      isoCode: "SA",
      lan: "ar",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/sa.svg",
    },
    {
      name: "India",
      dialCode: "+91",
      isoCode: "IN",
      lan: "hi",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
    },
  ];


  export const HomeBoxdata = [
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
  export const ticketBoxdata = [
    {
        title: "Total Tickets",
        number: "8",
        icon: <SiVirustotal className="text-orange-300" />,
        bg: "bg-[#ECF2FF]"
    },
    {
        title: "Pending Tickets",
        number: "4",
        icon: <RiPassPendingFill color="#B0EBB4"/>,
        bg: "bg-[#FEF5E5]"
    },
    {
        title: "Open Tickets",
        number: "5",
        icon: <FaRegFolderOpen className="text-[#5D87FF]" />,
        bg: "bg-[#E8F7FF]"
    },
    {
        title: "Closed Tickets",
        number: "7",
        icon: <FaRegFolderClosed className="text-orange-300 " />,
        bg: "bg-[#FDEDE8]"
    },
    
]