import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import coverImg from "../../assets/cover.jpg";
import coverBottom from "../../assets/cover_bottom.gif";
import AllProducts from "../../components/AllProducts/AllProducts";

const Home = () => {
  return (
    <>
      
      <div>
        <img className="object-cover w-full pt-[70px] bg-[#E84309]" src={coverImg} alt="" />
      </div>
      <div className="py-4 lg:py-12">
        <img className="object-cover w-full" src={coverBottom} alt="" />
      </div>

      <AllProducts></AllProducts>
    </>
  );
};

export default Home;
