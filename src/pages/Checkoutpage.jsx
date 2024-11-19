import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

const Checkoutpage = () => {
  return (
    <div>
      <div className="container mx-auto py-[150px]">
        <div className="text-center">
          <div className="flex justify-center">
            <GiCheckMark className="h-[50px] w-[50px] border-[2px] text-[#FF1788] rounded-full" />
          </div>
          <h2 className="font-joss text-[36px] font-semibold text-[#101750] py-8">
            Your Order Is Completed!
          </h2>
          <p className="text-[16px] font-normal text-[#8D92A7] font-joss leading-7 w-[625px] mx-auto">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <div className="flex justify-center">
            <Link to="/">
              <button className="py-[14px] px-[36px] bg-sky-400 mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-sm">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
