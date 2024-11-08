import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {  LOGO } from "../../../assets";
import { motion } from "framer-motion";

export default function Header({ isHeaderFixed }) {

    const [totalPrice, setTotalPrice] = useState(0);
  
  const textHoverVariants = {
    hover: { scale: 1.1, color: "#B1F4F4" }, // Scale up and change text color
  };

 
  console.log("isHeaderFixedxxxxxxxx in desktop", isHeaderFixed);

  return (
    <div className="bg-[#dacbef] px-8 h-auto w-auto flex justify-between py-2">
   <div className="h-auto w-[40%]">
    <div className=" h-auto w-auto flex  ">
        <div className="">
            <button className="bg-white rounded-xl p-1 flex items-center justify-between">
                <div className=" rounded-full bg-[#420a6b] h-auto w-auto p-2">
                <img src={LOGO.CAT} alt="" srcset="" />

                </div>
                <p className="text-[15px] px-1 font-poppins font-medium">All Categories</p>
            </button>
        </div>
        <div className=" w-auto h-auto flex justify-between pl-7 ">
            <p className="px-3 text-[15px] py-3 font-poppins font-medium">Deals</p>
            <p className="px-3 text-[15px] py-3 font-poppins font-medium">Shop</p>
            <p className="px-3 text-[15px] py-3 font-poppins font-medium">Our shop</p>
            <p className="px-3 text-[15px] py-3 font-poppins font-medium">Stores</p>
        </div>
    </div>
   </div>
   <div className=" h-auto w-[20%] flex justify-between items-center">
    <div className="bg-white h-auto w-auto   rounded-full p-3 ">
        <img src={LOGO.HUMAN} alt="" className="w-5 h-5" srcset="" />
    </div>
    <div className="bg-white h-auto w-auto   rounded-full p-3 ">
        <img src={LOGO.SHARE} alt="" className="w-5 h-5" srcset="" />
    </div>
    <div className="bg-white h-auto w-auto   rounded-full p-3 ">
        <img src={LOGO.LIKE} alt="" className="w-5 h-5" srcset="" />
    </div>
    <div className="bg-[#420a6b] h-auto w-auto   rounded-full p-3 ">
        <img src={LOGO.CART} alt="" className="w-5 h-5" srcset="" />
    </div>
    <div className=" h-auto w-auto p-3 ">
    <p className=""> ₹ {totalPrice}.00</p>
    </div>
   
   </div>

    </div>
  );
}

