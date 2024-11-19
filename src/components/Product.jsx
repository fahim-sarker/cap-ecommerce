import React, { useContext, useEffect, useState } from "react";
import {IoCheckmarkCircle,IoListCircleSharp,IoCartOutline,} from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { apidata } from "./ContextApi";
import { MdArrowForwardIos } from "react-icons/md";
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Product = () => {
  let capdata = useContext(apidata);
  let [page, setPage] = useState(1);
  let [perpage, setPerpage] = useState(6);
  let lastpage = page * perpage;
  let firstpage = lastpage - perpage;
  let capfulldata = capdata.slice(firstpage, lastpage);
  let pagenumber = [];
  let [category, setCategory] = useState ();

  for (let i = 0; i < Math.ceil(capdata.length / perpage); i++) {
    pagenumber.push(i);
  }

  let handlechange = (pagenumber) => {
    setPage(pagenumber + 1);
  };

  let next = () => {
    if (page < pagenumber.length) {
      setPage((state) => state + 1);
    }
  };

  useEffect(()=>{
    setCategory([...new Set(capdata.map((item)=>item.category))])
  })
  

  return (
    <div className="lg:py-28 py-5 lg:px-0 px-2">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-[25%] w-full">
            <div className="border-2 border-sky-400 lg:py-5 py-2 lg:px-5 px-2 rounded-2xl">
              <h3 className="font-roboto text-[20px] font-medium capitalize border-b-4 border-sky-400 pb2 w-[100px] rounded-sm">
                search
              </h3>
              <input
                type="text"
                placeholder="search"
                className="w-full py-4 pl-5 border-none outline-none text-[18px] text-white placeholder:text-white font-roboto rounded-full capitalize bg-sky-400 my-5"
              />
            </div>
            <div className="border-2 border-sky-400 lg:py-5 py-2 lg:px-5 px-2 rounded-2xl my-10">
              <h3 className="font-roboto text-[20px] font-medium capitalize border-b-4 border-sky-400 pb2 w-[150px] rounded-sm">
                Price Range
              </h3>
              <div className="flex justify-between bg-gray-400 my-5 rounded-xl">
                <div className="bg-sky-400 w-[70%] py-1 rounded-xl"></div>
              </div>
              <p className="flex gap-x-5 font-roboto text-[18px]">
                Prices :
                <span className="font-semibold font-roboto text-[18px]">
                  $100.00 - $1200.00
                </span>
              </p>
            </div>
            <div className="border-2 border-sky-400 lg:py-5 py-2 lg:px-5 px-2 rounded-2xl">
              <h3 className="font-roboto text-[20px] font-medium capitalize border-b-4 border-sky-400 pb2 w-[200px] rounded-sm">
                Product categories
              </h3>
              <div className="mt-5">
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Accessories
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (65)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Books
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (08)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Computer & Gaming
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (55)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Office Appliances
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (41)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Laptops
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (21)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Mobiles
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (32)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Tablets
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (47)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Televisions
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (36)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Uncategorized
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (22)
                  </p>
                </div>
                <div className="flex justify-between group py-2">
                  <h4 className="flex gap-x-2 items-center font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    <IoCheckmarkCircle />
                    Washing Machine
                  </h4>
                  <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                    (18)
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 border-sky-400 lg:py-5 py-2 lg:px-5 px-2 rounded-2xl my-10">
              <h3 className="font-roboto text-[20px] font-medium capitalize border-b-4 border-sky-400 pb2 w-[150px] rounded-sm">
                Availability
              </h3>
              <div className="flex justify-between group py-2">
                <h4 className="flex gap-x-2 items-center font-roboto  text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                  <IoListCircleSharp /> Stock
                </h4>
                <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                  (3560)
                </p>
              </div>
              <div className="flex justify-between group py-2">
                <h4 className="flex gap-x-2 items-center font-roboto  text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                  <IoListCircleSharp />
                  Out of Stock
                </h4>
                <p className="font-roboto text-[18px] group-hover:text-sky-400 duration-300 ease-in-out">
                  (260)
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[70%] w-full">
            <div className="flex lg:justify-end justify-center">
              <select
                className="border-2 border-sky-400 h-[55px] lg:w-[200px] w-[250px] px-2 outline-none font-roboto text-[18px] font-medium"
                name=""
                id=""
              >
                <option value="Default Sorting">Default Sorting</option>
                <option value="20">New Arrival</option>
                <option value="20">Latest Product</option>
              </select>
            </div>
            <div className="lg:flex lg:flex-wrap gap-y-6 justify-between mt-10">
              {capfulldata.map((capitem) => (
                <div className="lg:w-[32%] w-full lg:mb-0 mb-3 bg-[#F4F4FF] lg:p-5 p-3 rounded-lg group">
                  <Link to={`/${capitem.id}`}>
                  <div className="">
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                    <button className="bg-sky-400 px-3 py-2 rounded-full text-white font-roboto text-[18px]">
                      New
                    </button>
                    {console.log(capitem.id)
                    }
                    <div className="">
                      <p className="font-roboto text-[18px]">Reviews (18)</p>
                      <ul className="flex gap-x-3 items-center pt-2">
                        <li className="text-sky-400">
                          <FaStar />
                        </li>
                        <li className="text-sky-400">
                          <FaStar />
                        </li>
                        <li className="text-sky-400">
                          <FaStar />
                        </li>
                        <li className="text-sky-400">
                          <FaStar />
                        </li>
                        <li className="text-sky-400">
                          <FaStar />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="my-10 mx-10 group-hover:scale-110 duration-500 ease-in-out">
                    <img
                      src={capitem.image}
                      alt="product"
                      className="lg:h-[300px] h-[150px] w-full rounded-lg"
                    />
                  </div>
                  <button className="flex gap-x-3 items-center my-5 bg-[#fff] rounded-full px-3 py-3 w-full justify-center font-roboto text-[18px] font-medium text-sky-400">
                    <IoCartOutline className="text-[22px] text-sky-400" />
                    Add to Cart
                  </button>
                  <h3 className="py-2 font-roboto lg:text-[18px] text-[16px] font-normal">
                    {capitem.title}
                  </h3>
                  <p className="font-roboto lg:text-[18px] text-[16px] font-medium">
                    ${capitem.price}
                  </p>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 text-right">
          <nav aria-label="Page navigation example">
            <ul className="flex gap-x-3 items-center justify-end">
              {pagenumber.map((item, i) => (
                <li
                  onClick={() => handlechange(i)}
                  className={
                    page === i + 1
                      ? "lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] bg-[#f4f4ff] rounded-full flex items-center justify-center text-[#6b6b61] cursor-pointer lg:text-[20px] text-[16px]"
                      : "lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] bg-[#ffffff]  rounded-full flex items-center justify-center text-[#6b6b61] cursor-pointer lg:text-[20px] text-[16px]"
                  }
                >
                  0{item + 1}
                </li>
              ))}
              <li
                onClick={next}
                className="lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] bg-[#3661fc] rounded-full flex items-center justify-center text-white cursor-pointer"
              >
                <MdArrowForwardIos />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Product;
