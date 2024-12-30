import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apidata } from "../components/ContextApi"
import {Link} from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {IoCartOutline,} from "react-icons/io5";



const Categoryproduct = () => {
  const { category } = useParams();
  const capdata = useContext(apidata);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const products = capdata.filter((item) => item.category === category);
    setFilteredProducts(products);
  }, [category, capdata]);

  return (
    <div className="container mx-auto my-20">
      <h2 className="font-roboto text-[45px] text-center font-semibold py-5 capitalize">{category} Products</h2>
      <div className="lg:flex lg:flex-wrap gap-y-6 justify-between mt-10">
              {filteredProducts.map((capitem) => (
                <div className="lg:w-[24%] w-full lg:mb-0 mb-3 bg-[#F4F4FF] lg:p-5 p-3 rounded-lg group">
                  <Link to={`/${capitem.id}`}>
                  <div className="">
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                    <button className="bg-sky-400 px-3 py-2 rounded-full text-white font-roboto text-[18px]">
                      New
                    </button>
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
  );
};

export default Categoryproduct;