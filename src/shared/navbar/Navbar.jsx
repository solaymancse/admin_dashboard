import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import MobileDrawer from "../../components/mobileDrawer/MobileDrawer";
import SearchModal from "../../components/searchModal/SearchModal";
import Language from "../../components/language/Language";
import {bool} from 'prop-types';

const Navbar = ({isClicked,setIsClicked}) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLarge = useMediaQuery({ query: "(max-width: 1023px)" });
  const showDrawer = () => {
    setOpen(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClicked = () => { 
    setIsClicked(!isClicked);
  }

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-6">
        {!isLarge ? (<div onClick={handleClicked} >
          <FiMenu />
        </div>) : (
          <div onClick={showDrawer}>
            <FiMenu />
          </div>
        )}

        <MobileDrawer open={open} setOpen={setOpen} />

        <div onClick={showModal}>
          {isLarge ? (
            <IoIosSearch />
          ) : (
            <div className="flex items-center border border-slate-200 py-1 rounded-md px-6">
              <input type="text" placeholder="Search" className="outline-none" />
              <IoIosSearch />
            </div>
          )}
        </div>
      </div>

      <SearchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="flex items-center gap-6">
        <Language />
        <IoMail color="#777" />
        <BsBellFill color="#777" />
        <div className="flex items-center gap-3">
          <p className="text-xs font-semibold hidden md:flex">Dilshad Jahin</p>
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src="https://i.pravatar.cc/300"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isClicked:bool,
  setIsClicked:bool
};
export default Navbar;
