import React, { useState, useEffect } from "react";
import { FaCcDiscover } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Billingpage = () => {
  let cartdata = useSelector((state) => state.product.cartitem);

  const { totalprice } = cartdata.reduce(
    (accumulator, item) => {
      accumulator.totalprice += item.price * item.qty;
      return accumulator;
    },
    { totalprice: 0 }
  );

  let [shippingCharge, setShippingCharge] = useState(0);
  let finalTotal = totalprice + shippingCharge;

  let handleShippingChange = (event) => {
    let value = event.target.value;
    if (value === "free") {
      setShippingCharge(0);
    } else if (value === "flat") {
      setShippingCharge(10);
    } else if (value === "local") {
      setShippingCharge(20);
    }
  };

  return (
    <div className="lg:py-[120px] lg:px-0 px-2 py-5">
      <div className="container mx-auto">
        <div className="h-[70px] bg-[#f4f4ff] border-t-2 border-[#3661fc] px-10 flex items-center gap-x-3">
          <FaCcDiscover />
          <h3 className="text-[18px] font-roboto">
            Have a coupon?
            <span className="text-[#3661fc] cursor-pointer">
              Click here to enter your code
            </span>
          </h3>
        </div>
        <div className="flex justify-between mt-24">
          <div className="w-[50%] bg-[#f4f4ff] p-14 rounded-xl h-[654px]">
            <h3 className="text-[26px] font-roboto font-bold">
              Billing Details
            </h3>
            <form action="" className="pt-10">
              <input
                type="text"
                placeholder="First Name*"
                className="font-roboto text-[13px] text-[#a4a4a4] bg-[#ffffff] py-4 pl-6 rounded-full w-[284px] h-[58px] mr-20"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="font-roboto text-[13px] text-[#a4a4a4] bg-[#ffffff] py-4 pl-6 rounded-full w-[284px] h-[58px]"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Email Address*"
                className="font-roboto text-[13px] text-[#a4a4a4] bg-[#ffffff] py-4 pl-6 rounded-full w-[284px] h-[58px] mr-20 my-5"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="font-roboto text-[13px] text-[#a4a4a4] bg-[#ffffff] py-4 pl-6 rounded-full w-[284px] h-[58px] my-5"
                name=""
                id=""
              />
              <select
                className="border-2 border-[#f4f4ff] text-[#a4a4a4] h-[58px] w-full lg:rounded-full rounded-lg pl-5  py-4  outline-none font-roboto text-[13px] appearance-none"
                name=""
                id=""
              >
                <option value="Default Sorting">Country*</option>
                <option value="20">United Kingdom</option>
                <option value="20">United Kingdom</option>
              </select>
              <input
                type="text"
                placeholder="Address*"
                className="font-roboto text-[13px] text-[#a4a4a4] bg-[#ffffff] py-4 pl-6 rounded-full w-full h-[58px] my-5"
                name=""
                id=""
              />
              <select
                className="border-2 border-[#f4f4ff] text-[#a4a4a4] h-[58px] w-full lg:rounded-full rounded-lg pl-5 py-4 outline-none font-roboto text-[13px] appearance-none"
                name=""
                id=""
              >
                <option value="Default Sorting">Postcode / ZIP</option>
                <option value="20">154235</option>
                <option value="20">9997</option>
              </select>
              <div className="mt-10 flex justify-between">
                <div className="">
                  <input type="radio" />
                  <label
                    htmlFor="radio1"
                    className="font-roboto text-[16px] ml-2 cursor-pointer"
                  >
                    Create an account?
                  </label>
                </div>
                <div className="">
                  <input type="radio" />
                  <label
                    htmlFor="radio1"
                    className="font-roboto text-[16px] ml-2 cursor-pointer"
                  >
                    Ship to a different address
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[40%]">
            <h4 className="text-[26px] font-roboto font-bold">Order Summary</h4>
            <div className="mt-6 border border-[#f4f4ff] px-7 py-7 rounded-lg">
              <div className="flex justify-between items-center border-b border-[#f4f4ff] pb-5">
                <h3 className="font-roboto text-[18px] font-medium">Product</h3>
                <h4 className="font-roboto text-[18px] font-medium text-[#3661fc]">
                  Total
                </h4>
              </div>
              {cartdata.map((cartdetail) => (
                <div className="my-5 flex justify-between">
                  <h4 className="font-roboto text-[16px] w-[300px] truncate">
                    {cartdetail.title}
                  </h4>
                  <h4 className="font-roboto text-[16px]">
                    ${cartdetail.price}
                  </h4>
                </div>
              ))}
              <div className="flex justify-between items-center pb-5">
                <h3 className="font-roboto text-[18px] font-medium">
                  Subtotal
                </h3>
                <h4 className="font-roboto text-[18px] font-medium text-[#3661fc]">
                  ${totalprice}
                </h4>
              </div>
              <h3 className="font-roboto text-[18px] font-medium py-5">
                Shipping
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center  cursor-pointer">
                  <input
                    type="radio"
                    value="free"
                    name="shipping"
                    onChange={handleShippingChange}
                  />
                  <label
                    htmlFor="free"
                    className="font-roboto text-[16px] ml-2"
                  >
                    Free Shipping
                  </label>
                </div>
                <p className="font-roboto text-[16px]">+$00.00</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center  cursor-pointer">
                  <input
                    type="radio"
                    value="flat"
                    name="shipping"
                    onChange={handleShippingChange}
                  />
                  <label
                    htmlFor="flat"
                    className="font-roboto text-[16px] ml-2"
                  >
                    Flat Rate
                  </label>
                </div>
                <p className="font-roboto text-[16px]">+$10.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center  cursor-pointer">
                  <input
                    type="radio"
                    value="local"
                    name="shipping"
                    onChange={handleShippingChange}
                  />
                  <label
                    htmlFor="local"
                    className="font-roboto text-[16px] ml-2"
                  >
                    Local Delivery
                  </label>
                </div>
                <p className="font-roboto text-[16px]">+$20.00</p>
              </div>
              <div className="flex justify-between items-center pb-5 pt-5 border-b border-[#f4f4ff]">
                <h3 className="font-roboto text-[18px] font-medium">Total</h3>
                <h4 className="font-roboto text-[18px] font-medium text-[#3661fc]">
                  ${finalTotal.toFixed(2)}
                </h4>
              </div>
              <div className="mt-5">
                <input type="radio" />
                <label
                  htmlFor="radio1"
                  className="font-roboto text-[16px] ml-3"
                >
                  Cash on Delivery
                </label>
              </div>
              <div className="mt-5">
                <input type="radio" />
                <label
                  htmlFor="radio1"
                  className="font-roboto text-[16px] ml-3"
                >
                  Credit/Debit Cards or Paypal
                </label>
              </div>
              <Link to="/checkout">
                <button className="w-full h-[60px] lg:rounded-full rounded-lg bg-sky-400 text-white font-roboto text-[18px] my-5">
                  Place Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billingpage;
