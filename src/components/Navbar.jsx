import { useState } from "react";
import { HiMenu, HiMenuAlt4 } from "react-icons/hi";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className=" md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className=" w-32 cursor-pointer " />
        {/* <h1 className="text-white text-2xl">Tolcoin</h1> */}
      </div>
      <ul className=" text-white md:flex hidden list-none flex-row flex-initial justify-center items-center">
        {["P2P Market", "Services", "Transactions", "Tutorials"].map(
          (item, index) => (
            <NavBarItem key={item + index} title={item} />
          )
        )}
        <li className="bg-indigo-600 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-indigo-900">
          Login
        </li>
      </ul>
      <div className="flx relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className=" z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl list-none md:hidden
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className=" text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["P2P Market", "Services", "Transactions", "Tutorials"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classProps=" my-2 text-lg text-white"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
