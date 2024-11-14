import React, { useEffect, useRef, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "../assets/logo1.jpg";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import {Link} from "react-router-dom"

const Navbar = () => {
  let [show, setShow] = useState(false); 
  let menuref = useRef(false); 

  useEffect(() => {
    let handleClickOutside = (e) => {
      if (menuref.current && !menuref.current.contains(e.target)) {
        setShow(false); 
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  let Menu = () => {
    setShow(!show);
  };

  return (
    <div className="bg-sky-500 lg:py-5 py-3 lg:px-0 px-2 relative z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="lg:w-[20%] w-[50%] flex lg:gap-x-8 gap-x-3 items-center">
            <div className="border-2 border-white px-1 py-1" ref={menuref}>
              <FaBarsStaggered
                className="lg:text-[25px] text-[20px] text-white cursor-pointer"
                onClick={Menu}
              />
            </div>
            <div className="">
              <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="lg:h-[50px] h-[40px] w-[150px] rounded-lg"
              />
              </Link>
            </div>
          </div>

          <div className="w-[50%] relative lg:block hidden">
            <input
              type="text"
              placeholder="search for product, brands and more"
              className="w-full py-3 pl-3 border-none outline-none text-[18px] font-roboto rounded-sm capitalize"
            />
            <div className="absolute top-0 right-0 bg-blue-50 h-[51px] w-[60px] rounded-l-lg hover:bg-[#fd7e14] flex items-center justify-center duration-300 ease-in-out">
              <CiSearch className="text-[25px] font-semibold text-[#007bff] hover:text-white duration-300 ease-in-out mx-auto" />
            </div>
          </div>

          <div className="lg:w-[30%] w-[40%] flex lg:gap-x-10 gap-x-3 justify-end">
            <button className="lg:border-2 lg:border-[#FFF] lg:font-semibold font-normal lg:px-12 lg:py-3 lg:rounded-md lg:text-[20px] text-[16px] font-roboto text-white lg:hover:bg-[#fff] lg:hover:text-[#007bff] capitalize duration-500 ease-in-out order-3 lg:order-2">
              login
            </button>
            <div className="flex items-center gap-x-5 lg:order-3 order-2 border-r-2 lg:border-0 pr-3">
              <FaShoppingCart className="lg:text-[20px] text-[18px] text-white" />
              <h4 className=" text-[20px] font-roboto font-medium cursor-pointer text-white capitalize lg:block hidden">
                cart
              </h4>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:hidden block mt-2 relative">
          <input
            type="text"
            placeholder="search for product, brands and more"
            className="w-full lg:py-3 py-2 pl-3 border-none outline-none lg:text-[18px] text-[14px] font-roboto rounded-sm capitalize"
          />
        </div>
        <div
          className={`lg:hidden fixed top-0 left-0 w-[250px] h-full bg-sky-500 transition-all duration-300 ease-in-out z-50 transform ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="cursor-pointer text-white px-2 my-5">
            <li className="flex justify-between items-center font-roboto text-[18px] font-normal py-5 hover:bg-sky-400 duration-300 ease-in-out px-2">
              Smartphones
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-roboto text-[18px] font-normal py-5 hover:bg-sky-400 duration-300 ease-in-out px-2">
              Electronics & Appliances
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-roboto text-[18px] font-normal py-5 hover:bg-sky-400 duration-300 ease-in-out px-2">
              Mobile Accessories
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-roboto text-[18px] font-normal py-5 hover:bg-sky-400 duration-300 ease-in-out px-2">
              Computers
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-roboto text-[18px] font-normal py-5 hover:bg-sky-400 duration-300 ease-in-out px-2">
              Computer Accessories
              <MdArrowForwardIos />
            </li>
            <li className="flex justify-between items-center font-roboto text-[18px] font-normal py-5 hover:bg-sky-400 duration-300 ease-in-out px-2">
              Lifestyle
              <MdArrowForwardIos />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
