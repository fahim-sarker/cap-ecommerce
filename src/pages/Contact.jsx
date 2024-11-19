import React from 'react'
import Ct from "../assets/ct.png"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="lg:py-28 py-3 lg:px-0 px-2">
        <div className="container mx-auto">
          <div className="lg:flex justify-between bg-white py-10">
            <div className="lg:w-1/2 w-full bg-[#F4F4FF] py-10 pl-5 rounded-lg">
              <h2 className="font-sans text-[35px] font-semibold">
                Contact With Us
              </h2>
              <p className="font-sans text-[18px] font-normal py-3">
                Send us a message and we' ll respond as soon as possible
              </p>
              <form action="" className="mt-10">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="first name"
                  className="font-sans text-[18px] pl-3 rounded-full py-3 bg-[#FFF] w-[300px] outline-none border-none capitalize mr-2 lg:mb-0 mb-2"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="last name"
                  className="font-sans text-[18px] pl-3 rounded-full py-3 bg-[#FFF] w-[300px] outline-none border-none capitalize"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email address"
                  className="font-sans text-[18px] pl-3 rounded-full py-3 bg-[#FFF] w-[300px] outline-none border-none capitalize mr-2 my-3"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="phone number"
                  className="font-sans text-[18px] pl-3 rounded-full py-3 bg-[#FFF] w-[300px] outline-none border-none capitalize"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="subject"
                  className="font-sans text-[18px] pl-3 rounded-full py-3 bg-[#FFF] lg:w-[600px] w-[300px] outline-none border-none capitalize mt-2"
                />
                <textarea
                  name=""
                  id=""
                  placeholder="message"
                  className="py-3 pl-3 font-sans text-[18px]  rounded-lg bg-[#FFF] lg:w-[600px] w-[300px] outline-none border-none capitalize h-[200px] mt-5"
                ></textarea>
              </form>
              <button className="lg:px-10 px-5 lg:mt-5 lg:py-3 py-2 lg:w-[600px] w-[300px] text-white font-sans lg:text-[18px] text-[16px] rounded-full border-2 bg-sky-400 mx-auto">
                Set Free Quotes
              </button>
            </div>
            <div className="lg:w-1/2 w-full bg-sky-400 py-10 px-8 rounded-lg">
              <h2 className="font-sans text-[35px] font-semibold text-white">
                Need Any Help?
              </h2>
              <p className="font-sans lg:text-[18px] text-[16px] font-normal py-3 text-white">
                Call us or message and we' ll respond as soon as possible
              </p>
              <div className="lg:flex justify-between items-center pt-10">
                <div className="lg:flex gap-x-5 items-center">
                  <div className="lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] rounded-full flex justify-center items-center bg-red-400 lg:mx-0 mx-auto">
                    <FaPhoneAlt className="text-white text-[25px]" />
                  </div>
                  <div className="">
                    <h4 className="font-sans text-center lg:text-start text-[18px] font-semibold text-white">
                      Phone
                    </h4>
                    <p className="font-sans text-center lg:text-start text-[18px] py-3 text-white">
                      +(434) 5466 5467 443
                    </p>
                    <p className="font-sans text-center lg:text-start text-[18px] text-white">
                      +(434) 5466 5467 443
                    </p>
                  </div>
                </div>
                <div className="lg:flex gap-x-5 items-center">
                  <div className="lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] rounded-full flex justify-center items-center bg-red-400 lg:mx-0 mx-auto">
                    <IoMdMail className="text-white text-[25px]" />
                  </div>
                  <div className="">
                    <h4 className="font-sans text-center lg:text-start text-[18px] font-semibold text-white">
                      Email
                    </h4>
                    <p className="font-sans text-center lg:text-start text-[18px] py-3 text-white">
                      infoyour@gmail.com
                    </p>
                    <p className="font-sans text-center lg:text-start text-[18px] text-white">
                      infoyour@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex gap-x-5 items-center mt-10">
                <div className="lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] rounded-full flex justify-center lg:mx-0 mx-auto items-center bg-red-400">
                  <FaLocationDot className="text-white text-[25px]" />
                </div>
                <div className="">
                  <h4 className="font-sans text-center lg:text-start lg:text-[18px] text-[16px] font-semibold text-white">
                    Location
                  </h4>
                  <p className="font-sans text-center lg:text-start lg:text-[18px] text-[16px] py-3 text-white">
                    4517 Washington Ave. 32 King Street, Melbourne
                  </p>
                  <p className="font-sans text-center lg:text-start lg:text-[18px] text-[16px] text-white">
                    Manchester, Road USA
                  </p>
                </div>
              </div>
              <div className="bg-[#F4F4FF] py-4 px-5 rounded-xl flex justify-center mt-14">
                <img src={Ct} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
