import { MdArrowForwardIos } from "react-icons/md";
import Ban from "../assets/banner2.jpg";
import Ban1 from "../assets/elec.png";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirection
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect, useState } from "react";
import { apidata } from "./ContextApi";

const Banner = () => {
  const navigate = useNavigate(); // Hook to navigate between pages
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
  };

  let capdata = useContext(apidata);
  let [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory([...new Set(capdata.map((item) => item.category))]);
  }, [capdata]);

  let handleCategory = (citem) => {
    navigate(`/category/${citem}`);
  };

  return (
    <div className="bg-[#f8f9fa]">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[20%] pt-10 pr-5 bg-[#f8f9fa] lg:block hidden">
            <ul className="cursor-pointer">
              {category?.map((item) => (
                <li
                  key={item}
                  onClick={() => handleCategory(item)}
                  className="flex justify-between capitalize items-center font-roboto text-[18px] font-normal py-5 hover:text-sky-400 duration-300 ease-in-out px-2"
                >
                  {item}
                  <MdArrowForwardIos />
                </li>
              ))}
              <li className="flex justify-between capitalize items-center font-roboto text-[18px] font-normal py-5 hover:text-sky-400 duration-300 ease-in-out px-2">mobile Accessories<MdArrowForwardIos /></li>
              <li className="flex justify-between capitalize items-center font-roboto text-[18px] font-normal py-5 hover:text-sky-400 duration-300 ease-in-out px-2">laptop<MdArrowForwardIos /></li>
              <li className="flex justify-between capitalize items-center font-roboto text-[18px] font-normal py-5 hover:text-sky-400 duration-300 ease-in-out px-2">home Appliances<MdArrowForwardIos /></li>
            </ul>
          </div>

          <div className="lg:w-[80%] w-full">
            <Slider {...settings}>
              <div>
                <img src={Ban} alt="Banner" className="lg:h-[500px] h-[200px]" />
              </div>
              <div>
                <img
                  src={Ban1}
                  alt="Banner"
                  className="lg:h-[500px] h-[200px] w-full"
                />
              </div>
              <div>
                <img src={Ban} alt="Banner" className="lg:h-[500px] h-[200px]" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
