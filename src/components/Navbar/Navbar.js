import React, { useContext, useState } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

const Navbar = ({ cartQuantity }) => {
  const [sidebar, setSidebar] = useState(false);
  const { cartDetails } = useContext(DataContext);
  const cartNumber = cartDetails.reduce(function(prev, cur) {
    return prev + cur.itemQuantity;
  }, 0);

  return (
    <>
      <div className="fixed w-full flex justify-between items-center px-2 h-[10%] lg:px-24  bg-[#E84309] text-white shadow-lg z-30">
        <Link to={"/"} className="flex items-center space-x-1">
          <IoLogoBitcoin className="text-[35px] lg:text-[50px]"></IoLogoBitcoin>
          <p className="text-xl lg:text-3xl font-bold">BitBuy.com</p>
        </Link>
        <div className="space-x-12 hidden lg:block font-medium">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Track My Order</Link>
          <Link to={"/"}>Customer Care</Link>
          <Link to={"/"}>Login</Link>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart size={"1.5em"}></AiOutlineShoppingCart>
            {cartNumber > 0 && (
              <p className="absolute top-[-12px] left-4 bg-white text-[#E84309] px-2 py-1 rounded-full text-xs w-fit h-fit font-bold">
                {cartNumber}
              </p>
            )}
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          >
            <BiMenu size={"2em"}></BiMenu>
          </div>
        </div>
      </div>
      <div
        className={`${styles.sidebar} ${
          sidebar && styles.sidebar_active
        } w-[320px] h-[90vh] bg-[#E84309] px-20 z-10`}
      >
        <Link to={"/"} className="block text-left py-2 my-2 ">
          Home
        </Link>
        <Link to={"/"} className="block text-left py-2 my-2 ">
          Track My Order
        </Link>
        <Link to={"/"} className="block text-left py-2 my-2 ">
          Customer Care
        </Link>
        <Link to={"/"} className="block text-left py-2 my-2 ">
          Login
        </Link>
      </div>
    </>
  );
};

export default Navbar;
