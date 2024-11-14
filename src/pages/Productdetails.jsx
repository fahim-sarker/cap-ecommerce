import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiLoader3Fill } from "react-icons/ri";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Productdetails = () => {
  return (
    <div className="lg:py-[110px] py-[30px] lg:px-0 px-2">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[45%] flex gap-x-3">
            <div className="">
              <div className="w-[144px] h-[134px] bg-[#f2f7f8] rounded-lg flex justify-center items-center">
                <div className="bg-[#cccccc] w-[72px] h-[90px]"></div>
              </div>
              <div className="w-[144px] h-[134px] bg-[#f2f7f8] rounded-lg flex justify-center items-center my-3">
                <div className="bg-[#cccccc] w-[78px] h-[54px]"></div>
              </div>
              <div className="w-[144px] h-[134px] bg-[#f2f7f8] rounded-lg flex justify-center items-center">
                <div className="bg-[#cccccc] w-[53px] h-[95px]"></div>
              </div>
              <div className="w-[144px] h-[134px] bg-[#f2f7f8] rounded-lg flex justify-center items-center my-3">
                <div className="bg-[#cccccc] w-[50px] h-[90px]"></div>
              </div>
            </div>
            <div className="">
              <div className="bg-[#f2f7f8] flex justify-center items-center h-[568px] w-[496px] rounded-md">
                <div className="w-[364px] h-[455px] bg-[#cccccc]"></div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <h4 className="font-roboto text-[30px] font-medium">
              Apple iPhone 14 Pro Max 128 GB Deep Purple
            </h4>
            <ul className="flex gap-x-2 items-center pt-5 text-[#fcc013]">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
            <div className="flex gap-x-3 pt-8 pb-2">
              <h3 className="font-roboto text-[20px] text-[#6b6161] line-through">
                $2000
              </h3>
              <h4 className="font-roboto text-[20px] text-[#6b6161]">$1800</h4>
            </div>
            <div className="flex gap-x-1 items-center">
              <h5 className="font-roboto text-[18px] text-[#0ca640]">45</h5>
              <p className="font-roboto text-[17px] text-[#0ca640]">stock</p>
            </div>
            <p className="font-roboto text-[20px] text-[#6b6161] py-8">
              There are many variations of passages of Lorem Ipsum available,
              but our athe majority have suffered alteration in some form, by
              injected humour, or randomised our words which don't look even
              slightly believable.
            </p>
            <div className="flex gap-x-8">
              <div className="w-[144px] h-[50px] flex items-center justify-center gap-x-5 border-2 border-sky-500 rounded-full">
                <h5 className="text-[18px] font-semibold cursor-pointer">+</h5>
                <h5 className="text-[18px] font-semibold cursor-pointer">1</h5>
                <h5 className="text-[20px] font-semibold cursor-pointer">-</h5>
              </div>
              <button className="flex gap-x-3 items-center bg-sky-500 rounded-full px-3 py-3 w-[377px] justify-center font-roboto text-[18px] font-medium text-white">
                <IoCartOutline className="text-[22px] text-white" />
                Add to Cart
              </button>
            </div>
            <div className="flex gap-x-5 items-center py-5 border-b-2 border-gray-300">
              <h4 className="flex gap-x-2 font-roboto text-[18px] items-center">
                <CiHeart className="text-[22px]" />
                add to wishlist
              </h4>
              <h4 className="flex gap-x-2 font-roboto text-[18px] items-center">
                <RiLoader3Fill className="text-[22px]" />
                Compare
              </h4>
            </div>
            <div className="my-5">
              <p className="font-roboto text-[18px] font-medium">
                Category :{" "}
                <span className="font-roboto text-[16px]">Mobile</span>
              </p>
              <ul className="flex gap-x-3 pt-3 items-center">
                <li className="font-roboto text-[18px] font-medium">Share :</li>
                <li className="text-sky-500">
                  <FaFacebookF />
                </li>
                <li className="text-red-700">
                  <FaPinterest />
                </li>
                <li className="text-sky-500">
                  <FaTwitter />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-[120px]">
          <div className="px-10 py-9 border border-gray-200 rounded-md">
            <Tabs>
              <TabList className="flex gap-x-10 border-b-2 border-gray-300">
                <Tab className="outline-none cursor-pointer pb-5 font-roboto text-[20px] font-medium ">Description</Tab>
                <Tab className="outline-none cursor-pointer pb-5 font-roboto text-[20px] font-medium ">Additional information</Tab>
                <Tab className="outline-none cursor-pointer pb-5 font-roboto text-[20px] font-medium ">Reviews 04</Tab>
              </TabList>
              <TabPanel>
                <p className="py-10 font-roboto text-[18px]">
                  Curabitur egestas malesuada volutpat. Nunc vel vestibulum
                  odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est
                  impexrdiet, a maleuada sem rutrum. Sed sed vehicula ipsum
                  dapibusetqua metus urna, eu luctus velit placerat ut. Cras at
                  porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero
                  tncidunt sit amet. Morbxi sodales femaentum our as nibh nice
                  facilisis.que auctor varius lectus, lacinia rhoncus velit
                  posuere vel. Cras condimentum tincidunt urna, sed vehicula
                  ipsum
                </p>
                <ul className="pl-4 gap-y-5">
                  <li className="list-disc font-roboto text-[18px]"> Aenean auctor sem ac ex efficitur</li>
                  <li className="list-disc font-roboto text-[18px]"> Non mattis odio bibendum</li>
                  <li className="list-disc font-roboto text-[18px]"> Sed vitae enim at tortor finibus</li>
                  <li className="list-disc font-roboto text-[18px]"> Integer facilisis eleifend vehicula</li>
                  <li className="list-disc font-roboto text-[18px]">   In hac habitasse platea dictumst</li>
                </ul>
                <p className="py-5 font-roboto text-[18px]">Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh non eros loboxrts Ut porta et ex maximus malesuada. temp
                endisse at dui euismod, rhoncus eros non, imperdiet ipsum. Vestibulum vehicula vel turpis et vestibulum. Ut porta et ex maximus malesuada.</p>
              </TabPanel>
              <TabPanel>
                <p className="py-10 font-roboto text-[18px]">
                  Curabitur egestas malesuada volutpat. Nunc vel vestibulum
                  odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est
                  impexrdiet, a maleuada sem rutrum. Sed sed vehicula ipsum
                  dapibusetqua metus urna, eu luctus velit placerat ut. Cras at
                  porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero
                  tncidunt sit amet. Morbxi sodales femaentum our as nibh nice
                  facilisis.que auctor varius lectus, lacinia rhoncus velit
                  posuere vel. Cras condimentum tincidunt urna, sed vehicula
                  ipsum
                </p>
                <ul className="pl-4 gap-y-5">
                  <li className="list-disc font-roboto text-[18px]"> Aenean auctor sem ac ex efficitur</li>
                  <li className="list-disc font-roboto text-[18px]"> Non mattis odio bibendum</li>
                  <li className="list-disc font-roboto text-[18px]"> Sed vitae enim at tortor finibus</li>
                  <li className="list-disc font-roboto text-[18px]"> Integer facilisis eleifend vehicula</li>
                  <li className="list-disc font-roboto text-[18px]">   In hac habitasse platea dictumst</li>
                </ul>
                <p className="py-5 font-roboto text-[18px]">Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh non eros loboxrts Ut porta et ex maximus malesuada. temp
                endisse at dui euismod, rhoncus eros non, imperdiet ipsum. Vestibulum vehicula vel turpis et vestibulum. Ut porta et ex maximus malesuada.</p>
              </TabPanel>
              <TabPanel>
                <p className="py-10 font-roboto text-[18px]">
                  Curabitur egestas malesuada volutpat. Nunc vel vestibulum
                  odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est
                  impexrdiet, a maleuada sem rutrum. Sed sed vehicula ipsum
                  dapibusetqua metus urna, eu luctus velit placerat ut. Cras at
                  porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero
                  tncidunt sit amet. Morbxi sodales femaentum our as nibh nice
                  facilisis.que auctor varius lectus, lacinia rhoncus velit
                  posuere vel. Cras condimentum tincidunt urna, sed vehicula
                  ipsum
                </p>
                <ul className="pl-4 gap-y-5">
                  <li className="list-disc font-roboto text-[18px]"> Aenean auctor sem ac ex efficitur</li>
                  <li className="list-disc font-roboto text-[18px]"> Non mattis odio bibendum</li>
                  <li className="list-disc font-roboto text-[18px]"> Sed vitae enim at tortor finibus</li>
                  <li className="list-disc font-roboto text-[18px]"> Integer facilisis eleifend vehicula</li>
                  <li className="list-disc font-roboto text-[18px]">   In hac habitasse platea dictumst</li>
                </ul>
                <p className="py-5 font-roboto text-[18px]">Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh non eros loboxrts Ut porta et ex maximus malesuada. temp
                endisse at dui euismod, rhoncus eros non, imperdiet ipsum. Vestibulum vehicula vel turpis et vestibulum. Ut porta et ex maximus malesuada.</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
