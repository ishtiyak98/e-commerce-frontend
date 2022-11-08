import React, { useState } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-2 py-3 lg:px-24 lg:py-4 bg-orange-500 text-white">
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
        } w-[320px] h-[89vh] bg-slate-600`}
      >
        asc
      </div>
    </>
  );
};

export default Navbar;
