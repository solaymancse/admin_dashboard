import { CiSearch } from "react-icons/ci"
import ChatList from "../ChatList/ChatList"


const ChatSidebar = () => {

    return (
        <div>
            <div className=" shadow-sm px-3 flex items-center gap-4 rounded-md bg-[#F3F6FD] py-2">
                <CiSearch size={30} color="#777" />
                <input type="text" placeholder="Search" className="w-full bg-[#F3F6FD] outline-none " />
            </div>
            <ChatList/>
           
        </div>
    )
}

export default ChatSidebar
