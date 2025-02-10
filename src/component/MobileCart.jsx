"use client";

import { useState } from "react";
import { CheckoutModal } from "./CheckoutModal";

const MobileCart = ({ totalItems = 4, totalPrice = 127500 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed m-4 rounded-xl bottom-0 left-0 right-0 bg-primary text-white  z-40">
        <div className="container  flex items-center justify-between max-w-7xl">
          <div className="flex">
            <div className="bg-slate-300 rounded-s-xl  flex items-center p-5 sm:p-4 gap-2 sm:gap-3">
              <div className="relative">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-[#4CAF50] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
            </div>
            <div className="flex items-center px-5 gap-2 sm:gap-3">
              <div>
                <div className="text-xs sm:text-sm">Total</div>
                <div className="text-base sm:text-lg font-bold">
                  Rp{totalPrice.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm sm:text-base text-white font-semibold"
          >
            CHECK OUT ({totalItems})
          </button>
        </div>
      </div>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
    </>
  );
};

export default MobileCart;
