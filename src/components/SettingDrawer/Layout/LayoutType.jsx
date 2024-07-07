import { MdHorizontalSplit, MdVerticalShades } from "react-icons/md"
import Box from "../box/Box"


const LayoutType = () => {
    return (
        <>

            <p className="text-sm font-medium my-4 ">Layout Type</p>

            <div className="grid grid-cols-2 gap-2">
                <Box icon={<MdVerticalShades />} title="Vertical" />
                <Box icon={<MdHorizontalSplit />} title="Horizontal" />
                
            </div>

        </>
    )
}

export default LayoutType