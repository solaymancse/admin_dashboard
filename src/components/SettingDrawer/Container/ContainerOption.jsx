import { CgMenuBoxed } from "react-icons/cg"
import Box from "../box/Box"
import { GoScreenFull } from "react-icons/go"


const ContainerOption = () => {
  return (

    <>

            <p className="text-sm font-medium my-4 ">Container Option</p>

            <div className="grid grid-cols-2 gap-2">
                <Box icon={<CgMenuBoxed />} title="Boxed" />
                <Box icon={<GoScreenFull />} title="Full" />
                
            </div>

        </>
  )
}

export default ContainerOption