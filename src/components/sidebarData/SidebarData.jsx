import { CgProfile } from "react-icons/cg";
import { FaBlogger, FaUsers } from "react-icons/fa";
import { HiOutlineCurrencyDollar, HiOutlineMail } from "react-icons/hi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineLogout, MdWidgets } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <RiDashboardHorizontalFill />,
        cName: "nav-text",
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <CgProfile />,
        cName: "nav-text",
    },
    {
        title: "Blogs",
        path: "/blogs",
        icon: <FaBlogger />,
        cName: "nav-text",
    },
    {
        title: "Contacts",
        path: "/contacts",
        icon: <TiContacts />,
        cName: "nav-text",
    },
    {
        title: "Ecommerce",
        path: "/ecommerce",
        icon: <LuShoppingCart />,
        cName: "nav-text",
    },
    {
        title: "Users",
        path: "/users",
        icon: <FaUsers />,
        cName: "nav-text",
    },
 
    {
        title: "Email",
        path: "/email",
        icon: <HiOutlineMail />,
        cName: "nav-text",
    },
    {
        title: "Maintanence",
        path: "/maintanence",
        icon: <IoMdSettings />,
        cName: "nav-text",
    },
    {
        title: "Widgets",
        path: "/widgets",
        icon: <MdWidgets />,
        cName: "nav-text",
    },
    {
        title: "Chat",
        path: "/dashboard/chat",
        icon: <HiOutlineCurrencyDollar />,
        cName: "nav-text",
    },
    {
        title: "Pricing",
        path: "/dashboard/pricing",
        icon: <HiOutlineCurrencyDollar />,
        cName: "nav-text",
    },
    {
        title: "Charts",
        path: "/charts",
        icon: <IoBarChartSharp />,
        cName: "nav-text",
    },
    {
        title: "Notifications",
        path: "/notifications",
        icon: <IoMdNotifications />,
        cName: "nav-text",
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <IoMdSettings />,
        cName: "nav-text",
    },
    {
        title: "Logout",
        path: "/logout",
        icon: <MdOutlineLogout />,
        cName: "nav-text",
    }
]