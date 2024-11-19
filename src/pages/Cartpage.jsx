import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { itemdecrement, itemincrement, removecartitem } from "../components/slice/Productslice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate()
  let cartdata = useSelector((state) => state.product.cartitem);

  const [shippingCharge, setShippingCharge] = useState(0);

  let handleincrement = (index) => {
    dispatch(itemincrement(index));
  };

  let handledecrement = (index) => {
    dispatch(itemdecrement(index));
  };

  let handleremoveproduct = (index) => {
    dispatch(removecartitem(index));
  };

  const { totalprice } = cartdata.reduce(
    (accumulator, item) => {
      accumulator.totalprice += item.price * item.qty;
      return accumulator;
    },
    { totalprice: 0 }
  );

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

  let handletoast = () => {
    toast("please wait!")
    setTimeout(()=>{
      navigate("/bill")
    },2000)
  }

  return (
    <div className="lg:py-[120px] py-10 lg:px-0 px-2">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-[70%] w-full">
            <div className="bg-[#f4f4ff] lg:px-10 px-2 py-6 lg:flex justify-between items-center">
              <div className="lg:w-[45%]">
                <h3 className="font-roboto lg:text-[20px] text-[16px] font-medium lg:block hidden">
                  Products
                </h3>
              </div>
              <ul className="lg:w-[55%] flex justify-between">
                <li className="font-roboto lg:text-[20px] text-[16px] font-medium">
                  Price
                </li>
                <li className="font-roboto lg:text-[20px] text-[16px] font-medium">
                  Quantity
                </li>
                <li className="font-roboto lg:text-[20px] text-[16px] font-medium">
                  Total
                </li>
                <li className="font-roboto lg:text-[20px] text-[16px] font-medium">
                  Action
                </li>
              </ul>
            </div>
            {cartdata.map((Cartitem, index) => (
              <div className="py-4 lg:pl-10 lg:pr-16 pl-2 pr-2 lg:flex justify-between border border-[#f4f4ff]">
                <div className="lg:w-[45%] w-full flex gap-x-4 items-center">
                  <div className="bg-[#f4f4ff] h-[80px] w-[80px] flex justify-center items-center">
                    <div className="bg-[#cccccc] w-[46px] h-[56px]">
                      <img
                        src={Cartitem.image}
                        alt=""
                        className="w-[46px] h-[56px]"
                      />
                    </div>
                  </div>
                  <h3 className="font-roboto text-[16px] text-[#6b6161] w-[300px]">
                    {Cartitem.title}
                  </h3>
                </div>
                <div className="lg:w-[55%] w-full flex justify-between items-center lg:pt-0 pt-5">
                  <h4 className=" text-[16px] font-roboto lg:pl-3">
                    ${(Cartitem.price).toFixed(0)}
                  </h4>
                  <div className="">
                    <div className="lg:w-[144px] w-[100px] lg:h-[50px] h-[40px] flex items-center justify-center gap-x-5">
                      <h5
                        onClick={() => handledecrement(index)}
                        className="text-[20px] font-semibold cursor-pointer"
                      >
                        -
                      </h5>
                      <h5 className="text-[18px] font-semibold cursor-pointer">
                        {Cartitem.qty}
                      </h5>
                      <h5
                        onClick={() => handleincrement(index)}
                        className="text-[18px] font-semibold cursor-pointer"
                      >
                        +
                      </h5>
                    </div>
                  </div>
                  <h3 className="pr-10 text-[16px] font-roboto">
                    ${(Cartitem.price * Cartitem.qty).toFixed(0)}
                  </h3>
                  <i className="text-[16px] font-roboto cursor-pointer">
                    <RxCross2 onClick={() => handleremoveproduct(index)} />
                  </i>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-[25%] w-full lg:pt-0 pt-5">
            <div className="flex justify-between">
              <button className="w-[192px] h-[56px] lg:rounded-full rounded-lg bg-[#f4f4ff] font-roboto text-[18px]">
                Continue Shopping
              </button>
              <button className="w-[140px] h-[56px] lg:rounded-full rounded-lg bg-[#f4f4ff] font-roboto text-[18px]">
                Update Cart
              </button>
            </div>
            <div className="mt-6 border border-[#f4f4ff] px-7 py-7 rounded-lg">
              <div className="flex justify-between items-center border-b border-[#f4f4ff] pb-5">
                <h3 className="font-roboto text-[18px] font-medium">
                  Subtotal
                </h3>
                <h4 className="font-roboto text-[18px] font-medium text-[#3661fc]">
                  ${(totalprice).toFixed(0)}
                </h4>
              </div>
              <h3 className="font-roboto text-[18px] font-medium py-5">
                Shipping
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="free"
                    name="shipping"
                    onChange={handleShippingChange}
                  />
                  <label htmlFor="free" className="font-roboto text-[16px] ml-2">
                    Free Shipping
                  </label>
                </div>
                <p className="font-roboto text-[16px]">+$00.00</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="flat"
                    name="shipping"
                    onChange={handleShippingChange}
                   />
                  <label htmlFor="flat" className="font-roboto text-[16px] ml-2 cursor-pointer">
                    Flat Rate
                  </label>
                </div>
                <p className="font-roboto text-[16px]">+$10.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    value="local"
                    name="shipping"
                    onChange={handleShippingChange}
                  />
                  <label htmlFor="local" className="font-roboto text-[16px] ml-2">
                    Local Delivery
                  </label>
                </div>
                <p className="font-roboto text-[16px]">+$20.00</p>
              </div>
              <h3 className="font-roboto text-[18px] font-medium py-5">
                Calculate Shipping
              </h3>
              <select
                className="border-2 border-[#f4f4ff] h-[55px] w-full lg:rounded-full rounded-lg pl-5 outline-none font-roboto text-[18px] appearance-none cursor-pointer"
                name=""
                id=""
              >
                <option value="Default Sorting">Select Country</option>
                <option value="20">Bangladesh</option>
                <option value="20">Australia</option>
              </select>
              <select
                className="border-2 border-[#f4f4ff] text-[#a4a4a4] h-[55px] w-full lg:rounded-full rounded-lg pl-5 cursor-pointer outline-none font-roboto text-[18px] my-4 appearance-none"
                name=""
                id=""
              >
                <option value="Default Sorting">Postcode / ZIP</option>
                <option value="20">154235</option>
                <option value="20">9997</option>
              </select>
              <button className="w-full h-[56px] lg:rounded-full rounded-lg bg-[#f4f4ff] font-roboto text-[18px]">
                Update Cart
              </button>
              <div className="flex justify-between items-center py-5">
                <h3 className="font-roboto text-[18px] font-medium">Total</h3>
                <h4 className="font-roboto text-[18px] font-medium text-[#3661fc]">
                  ${(finalTotal).toFixed(0)}
                </h4>
              </div>
                <button onClick={handletoast} className="w-full h-[60px] lg:rounded-full rounded-lg bg-sky-400 text-white font-roboto text-[18px]">
                  Proceed to Checkout
                </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
