import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [id]);

  console.log(productDetails);

  return (
    <>
      <Navbar></Navbar>
      <div className="pt-[120px] px-2 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-x-10">
          <div>
            <img
              className="rounded-md w-full object-cover h-[300px] lg:h-[450px]"
              src={productDetails.thumbnail}
              alt=""
            />
          </div>
          <div className="text-gray-800 space-y-3 lg:space-y-4 px-4">
            <h1 className="text-3xl lg:text-5xl font-bold">{productDetails?.title}</h1>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-[#E84309] space-x-2">
                {productDetails.rating > 0 && (
                  <span className="flex">
                    {[...Array(Math.round(productDetails.rating))].map(
                      (item, index) => (
                        <AiFillStar key={index} />
                      )
                    )}
                    {[...Array(5 - Math.round(productDetails.rating))].map(
                      (item, index) => (
                        <BsStarHalf key={index} />
                      )
                    )}
                  </span>
                )}
                <p className="text-gray-800">({productDetails.rating})</p>
              </div>
              <div className="flex space-x-6 text-[#E84309]">
                <BsShareFill
                  size={"1.3em"}
                  className="hover:cursor-pointer"
                ></BsShareFill>
                <BsFillBookmarkFill
                  size={"1.3em"}
                  className="hover:cursor-pointer"
                ></BsFillBookmarkFill>
              </div>
            </div>
            <div>
              <p className="text-sm lg:text-xl">{productDetails.description}</p>
            </div>
            <div>
            <p className="text-sm lg:text-xl"><span className="font-bold">Brand:</span> {productDetails.brand}</p>
            <p className="text-sm lg:text-xl"><span className="font-bold">In Stock:</span> {productDetails.stock}</p>
            </div>
            <div className="">
              <p className="text-xl">
                Regular Price:{" "}
                <span className="font-bold line-through text-[#E84309]">
                  ${productDetails.price}
                </span>
              </p>
              <p className="text-2xl">
                Discounted Price:{" "}
                <span className="font-bold text-[#E84309]">
                  $
                  {Math.round(
                    productDetails.price -
                      productDetails.price *
                        (parseFloat(productDetails.discountPercentage) / 100)
                  )}
                </span>
                <span className="text-xs ml-2">
                  ({productDetails.discountPercentage}%)
                </span>
              </p>
            </div>
            <div className="bg-[#E84309] inline-block px-8 py-4 rounded text-white text-lg hover:cursor-pointer hover:bg-[#ba3200]">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
