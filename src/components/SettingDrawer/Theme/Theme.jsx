import { CiLight } from "react-icons/ci"
import { MdNightlightRound } from "react-icons/md"
import { VscSettings } from "react-icons/vsc"
import Box from "../box/Box"
import { BsFillSignTurnLeftFill, BsSignTurnRightFill } from "react-icons/bs"
import {  useTheme } from "../../../context/ThemeContext"

const Theme = () => {
    const {toggleDarkMode } = useTheme();


    return (
        <div>
            <p className={`text-sm font-medium mb-4 `}>Theme</p>
            <div className="grid grid-cols-3 gap-2">
            <Box icon={<CiLight />} title="Light" onClick={() => toggleDarkMode(false)} />
            <Box icon={<MdNightlightRound />} title="Dark" onClick={() => toggleDarkMode(true)} />
                <Box icon={<VscSettings />} title="Custom" />
            </div>

            <p className="text-sm font-medium mb-4 mt-4 ">Theme Direction </p>
            <div className="grid grid-cols-2 gap-2">
                <Box icon={<BsFillSignTurnLeftFill />} title="LTR" />
                <Box icon={<BsSignTurnRightFill />} title="RTL" />
            </div>

        </div>
    )
}

export default Theme
