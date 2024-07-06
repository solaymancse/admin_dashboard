import { element, string } from "prop-types"

const Box = ({ icon, title }) => {
    return (
        <div className=" flex  border border-slate-200 hover:bg-slate-100 cursor-pointer flex-col justify-evenly items-center  w-full h-[60px] rounded-md ">
            <div className=" text-[20px] text-[#687EFF]">
                {icon}
            </div>
            <p className="text-xs text-[#777] font-medium">{title}</p>
        </div>
    )
}

Box.propTypes = {
    icon: element,
    title: string
}
export default Box
