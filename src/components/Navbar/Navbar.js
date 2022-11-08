import React, { useState } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-2 py-3 lg:px-24 lg:py-4 bg-[#E84309] text-white">
        <div className="flex items-center space-x-1">
          <IoLogoBitcoin className="text-[35px] lg:text-[50px]"></IoLogoBitcoin>
          <p className="text-xl lg:text-3xl font-bold">BitBuy.com</p>
        </div>
        <div className="space-x-12 hidden lg:block font-medium">
          <span>Home</span>
          <span>Track My Order</span>
          <span>Customer Care</span>
          <span>Login</span>
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => setSidebar(!sidebar)}
        >
          <BiMenu size={"2em"}></BiMenu>
        </div>
      </div>
      <div
        className={`${styles.sidebar} ${
          sidebar && styles.sidebar_active
        } w-[320px] h-[89vh] bg-slate-600 px-20`}
      >
        <span className="block text-left py-2 my-2 ">Home</span>
        <span className="block text-left py-2 my-2 ">Track My Order</span>
        <span className="block text-left py-2 my-2 ">Customer Care</span>
        <span className="block text-left py-2 my-2 ">Login</span>
      </div>
    </>
  );
};

export default Navbar;
