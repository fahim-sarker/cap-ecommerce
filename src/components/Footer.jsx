import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
  } from "react-icons/fa";
  import { BsFillTelephoneFill } from "react-icons/bs";
  import { IoMdMail } from "react-icons/io";
  import { FaLocationDot } from "react-icons/fa6";
  import Blg from "../assets/blog.png";

const Footer = () => {
  return (
    <div className="lg:py-28 py-3 lg:px-0 px-2 bg-sky-500">
      <div className="container mx-auto">
        <div className="lg:flex justify-between border-b-2 border-[#393939] lg:pb-20 pb-3">
          <div className="lg:w-2/5 w-full">
            <h3 className="text-white font-sans lg:text-[20px] text-[16px] font-medium lg:text-start text-center">
              For Digital Marketing Agency
            </h3>
            <h2 className="text-white lg:text-[40px] text-[20px] font-bold font-sans lg:text-start text-center">
              Join Our Agency Community
            </h2>
          </div>
          <div className="lg:w-2/5 w-full bg-[#FFF] px-3 rounded-full flex justify-between items-center lg:mt-0 mt-3">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
              className="rounded-full py-5 outline-none border-none pl-3 lg:text-[16px] text-[12px] capitalize font-sans"
            />
            <button className="py-4 lg:px-10 px-6 text-white font-sans lg:text-[16px] text-[12px] bg-blue-600 rounded-full">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="lg:mt-20 mt-3 lg:flex justify-between">
          <div className="lg:w-1/4 w-full">
            <h2 className="text-white lg:text-[30px] text-[20px] font-bold font-sans relative after:absolute after:content-[''] after:-bottom-[10px] after:left-0 after:h-[3px] after:w-[10%] after:bg-red-500 after:hover:w-[65%] after:duration-500 after:ease-in-out after:rounded-xl">
              About Company
            </h2>
            <p className="pt-10 pb-5 font-sans text-[18px] text-white lg:w-[400px] w-full">
              There are many variations of passages of Lore Ipsum availab but
              the majority have suffereds alteration in some form, by injected
              humour a randomised words which
            </p>
            <ul className="flex gap-x-5 items-center py-5 cursor-pointer">
              <li className="flex justify-center items-center bg-[#FFF] h-[50px] w-[50px] rounded-full">
                <FaFacebookF className="text-blue-700 text-[25px]" />
              </li>
              <li className="flex justify-center items-center bg-[#FFF] h-[50px] w-[50px] rounded-full">
                <FaTwitter className="text-blue-700 text-[25px]" />
              </li>
              <li className="flex justify-center items-center bg-[#FFF] h-[50px] w-[50px] rounded-full">
                <FaLinkedinIn className="text-blue-700 text-[25px]" />
              </li>
              <li className="flex justify-center items-center bg-[#FFF] h-[50px] w-[50px] rounded-full">
                <FaInstagram className="text-blue-700 text-[25px]" />
              </li>
            </ul>
          </div>
          <div className="lg:w-1/5 w-full">
            <h2 className="text-white lg:text-[30px] text-[20px] font-bold font-sans relative after:absolute after:content-[''] after:-bottom-[10px] after:left-0 after:h-[3px] after:w-[10%] after:bg-red-500 after:hover:w-[85%] after:duration-500 after:ease-in-out after:rounded-xl">
              Featured Services
            </h2>
            <ul className="pt-10 pb-5">
              <li className="text-white text-[18px] hover:text-blue-600 duration-500 ease-in-out  pb-1">
                Social Media Marketing
              </li>
              <li className="text-white text-[18px] hover:text-blue-600 duration-500 ease-in-out  py-2">
                Pay Per Click Management
              </li>
              <li className="text-white text-[18px] hover:text-blue-600 duration-500 ease-in-out  py-2">
                Search Engine Optimization
              </li>
              <li className="text-white text-[18px] hover:text-blue-600 duration-500 ease-in-out  py-2">
                Free SEO Analysis
              </li>
              <li className="text-white text-[18px] hover:text-blue-600 duration-500 ease-in-out  py-2">
                Case Studies
              </li>
            </ul>
          </div>
          <div className="lg:w-1/5 w-full">
            <h2 className="text-white lg:text-[30px] text-[20px] font-bold font-sans relative after:absolute after:content-[''] after:-bottom-[10px] after:left-0 after:h-[3px] after:w-[10%] after:bg-red-500 after:hover:w-[55%] after:duration-500 after:ease-in-out after:rounded-xl">
              Recent Post
            </h2>
            <div className="flex gap-x-5 pt-10 pb-5">
              <div className="bg-gray-500 py-2 px-2 rounded-xl">
                <img src={Blg} alt="" className="w-full h-[70px]" />
              </div>
              <div className="">
                <h3 className="text-white text-[18px] font-sans py-2">
                  Thoughtful man using laptop pondering{" "}
                </h3>
                <p className="font-sans text-[16px] text-white">09 Dec 2022</p>
              </div>
            </div>
            <div className="flex gap-x-5 pt-3 pb-5">
              <div className="bg-gray-500 py-2 px-2 rounded-xl">
                <img src={Blg} alt="" className="w-full h-[70px]" />
              </div>
              <div className="">
                <h3 className="text-white text-[18px] font-sans py-2">
                  Young man with a lap top in a business
                </h3>
                <p className="font-sans text-[16px] text-white">09 Dec 2022</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 w-full">
            <h2 className="text-white lg:text-[30px] text-[20px] font-bold font-sans relative after:absolute after:content-[''] after:-bottom-[10px] after:left-0 after:h-[3px] after:w-[10%] after:bg-red-500 after:hover:w-[55%] after:duration-500 after:ease-in-out after:rounded-xl">
              Contact Us
            </h2>
            <ul className="pt-10 pb-5">
              <li className="flex gap-x-3 items-center text-white text-[18px] pb-1">
                <BsFillTelephoneFill />
                +(323) 750-1234
              </li>
              <li className="flex gap-x-3 items-center text-white text-[18px] py-2">
                <IoMdMail />
                infoyourortencey@gmail.com
              </li>
              <li className="flex gap-x-3 items-center text-white text-[18px] py-2">
                <FaLocationDot />
                374 FA Tower, William S Blvd, Melbourne 2721, IL, USA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
