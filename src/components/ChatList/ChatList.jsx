import { RiPushpinFill } from "react-icons/ri"

const ChatList = () => {
    return (
        <>
            <div className="mt-8 h-[60px]  flex gap-4">

                <div className="w-[60px] rounded-md">
                    <div className="w-[60px]  h-[60px] rounded-md overflow-hidden">
                        <img src="https://i.pravatar.cc" className="w-full h-full  object-cover" alt="" />
                    </div>
                </div>

                <div className="w-full flex flex-col h-full py-1 justify-between">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-base font-semibold">Jonh</p>
                        <p className="text-xs text-[#777] font-medium">4m</p>
                    </div>
                    <div className="flex w-full  items-center justify-between">
                        <p className="text-blue-400 text-sm font-medium">Hello john , how are you ?...</p>
                        <p className="text-xs flex justify-center items-center w-[20px] h-[20px] rounded-full text-[#fff] font-medium bg-red-400">4</p>
                        <RiPushpinFill size={24} color="#7678ED" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatList
