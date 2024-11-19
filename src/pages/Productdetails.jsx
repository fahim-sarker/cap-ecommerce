import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiLoader3Fill } from "react-icons/ri";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useParams } from "react-router-dom";
import { apidata } from "../components/ContextApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from 'react-redux'
import {addtocart} from "../components/slice/Productslice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// Arrow Components for the slider
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#efebef] rounded-full text-center flex justify-center items-center absolute -top-[15%] lg:right-0 right-0 z-40 cursor-pointer"
      onClick={onClick}
    >
      <FaLongArrowAltRight className="inline-block lg:text-[20px] text-sky-400" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#efebef] rounded-full text-center flex justify-center items-center absolute -top-[15%]  right-16 z-40 cursor-pointer"
      onClick={onClick}
    >
      <FaLongArrowAltLeft className="inline-block lg:text-[20px] text-sky-400" />
    </div>
  );
}

const Productdetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let capdata = useContext(apidata);
  let navigate = useNavigate();
  let Relatedproduct = capdata.filter(
    (product) => product.id >= 10 && product.id <= 20
  );

  let [singleData, setSingleData] = useState([]);
  let productid = useParams();
  let dispatch = useDispatch();

  let getdata = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productid.id}`)
      .then((response) => {
        setSingleData(response.data);
      });
  };

  useEffect(() => {
    getdata();
  }, [productid]);

  let rating = Array.from({ length: 5 }, (element, index) => {
    const ratingNumber = index + 1;
    const rate = singleData.rating?.rate || 0;

    if (rate >= ratingNumber) {
      return <FaStar key={index} />;
    }

    if (rate >= ratingNumber - 0.5) {
      return <FaStarHalfAlt key={index} />;
    }

    return <FaRegStar key={index} />;
  });

  let handleaddtocat = (item) => {
    dispatch(addtocart({...item, qty: 1}))
    toast("succesfully added!")
    setTimeout(()=>{
      navigate("/cart")
    },2000)
  }

  return (
    <div className="lg:py-[110px] py-[30px] lg:px-0 px-2">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-[45%] w-full lg:flex gap-x-3">
            <div className="lg:static flex flex-wrap justify-between items-center">
              <div className="w-[144px] h-[134px] bg-[#f2f7f8] rounded-lg flex justify-center items-center">
                <div className="bg-[#cccccc]">
                  <img
                    src={singleData.image}
                    alt=""
                    className="w-[72px] h-[90px]"
                  />
                </div>
              </div>
              <div className="w-[144px] h-[134px] bg-[#f2f7f8] rounded-lg flex justify-center items-center my-3">
                <div className="bg-[#cccccc] ">
                  <img
                    src={singleData.image}
                    alt=""
                    className="w-[78px] h-[54px]"
                  />
                </div>
              </div>
              <div className="w-[144px] h-[134px] bg-[#f2f7f8] rounded-lg flex justify-center items-center">
                <div className="bg-[#cccccc]">
                  <img
                    src={singleData.image}
                    alt=""
                    className="w-[53px] h-[95px]"
                  />
                </div>
              </div>
              <div className="w-[144px] h-[134px] bg-[#f2f7f8] rounded-lg flex justify-center items-center my-3">
                <div className="bg-[#cccccc]">
                  <img
                    src={singleData.image}
                    alt=""
                    className="w-[50px] h-[90px]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#f2f7f8] flex justify-center items-center lg:h-[568px] h-[300px] w-[300px] lg:mx-0 mx-auto lg:w-[496px] rounded-md">
                <div className="lg:w-[364px] lg:h-[455px] bg-[#cccccc]">
                  <img src={singleData.image} alt="" className="h-[455px]"/>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full">
            <h4 className="font-roboto lg:text-[30px] text-[16px] lg:py-0 pt-5 lg:text-start text-center font-medium">
              {singleData.title}
            </h4>
            <ul className="flex gap-x-2 items-center pt-5 text-[#fcc013] lg:justify-start justify-center">
              {rating}
            </ul>
            <div className="flex gap-x-3 lg:pt-8 pt-2 lg:pb-2 lg:justify-start justify-center">
              <h3 className="font-roboto lg:text-[20px] text-[16px] text-[#6b6161] line-through">
                $200
              </h3>
              <h4 className="font-roboto lg:text-[20px] text-[16px] text-[#6b6161]">
                ${singleData.price}
              </h4>
            </div>
            <div className="flex gap-x-1 items-center lg:justify-start justify-center">
              <h5 className="font-roboto text-[18px] text-[#0ca640]">45</h5>
              <p className="font-roboto text-[17px] text-[#0ca640]">stock</p>
            </div>
            <p className="font-roboto lg:text-[20px] text-[16px] lg:text-start text-center text-[#6b6161] lg:py-8 py-3">
              {singleData.description}
            </p>
            <div className="lg:flex gap-x-8">
              <div className="w-[144px] h-[50px] flex items-center justify-center gap-x-5 border-2 border-sky-500 rounded-full mx-auto lg:mx-0">
                <h5 className="text-[18px] font-semibold cursor-pointer">+</h5>
                <h5 className="text-[18px] font-semibold cursor-pointer">1</h5>
                <h5 className="text-[20px] font-semibold cursor-pointer">-</h5>
              </div>
                <button onClick={()=>handleaddtocat(singleData)} className="flex gap-x-3 items-center bg-sky-500 lg:rounded-full rounded-lg px-3 py-3 lg:w-[377px] w-[200px] justify-center font-roboto text-[18px] font-medium text-white lg:my-0 my-3 lg:mx-0 mx-auto">
                  <IoCartOutline className="text-[22px] text-white" />
                  Add to Cart
                </button>
                <ToastContainer />
            </div>
            <div className="flex gap-x-5 items-center lg:justify-start justify-center py-10 border-b-2 border-gray-300">
              <h4 className="flex gap-x-2 font-roboto text-[18px] items-center">
                <CiHeart className="text-[22px]" />
                Add to Wish List
              </h4>
              <div className="flex gap-x-3 text-[#1a3d75]">
                <FaFacebookF />
                <FaTwitter />
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <h3 className="text-[30px] font-medium font-roboto">
            Related Products
          </h3>
          <Slider {...settings}>
            {Relatedproduct.map((item) => (
              <div key={item.id} className="flex justify-center gap-x-5 my-10 cursor-pointer">
                <div className="w-[500px] h-[500px] pt-5 px-2 bg-white border-2 border-gray-200 rounded-md shadow-md">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[300px] object-cover rounded-t-md"
                  />
                  <div className="p-4">
                    <h4 className="font-roboto font-medium text-[18px] text-[#333]">
                      {item.title}
                    </h4>
                    <div className="flex gap-x-2 items-center pt-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <h5 className="font-roboto text-[18px] text-[#ff5e00] pt-3">
                      ${item.price}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
