import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from "../../App";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [quantity, setQuantity] = useState(0);
  const { cartDetails, setCartDetails } = useContext(DataContext);

  const quantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const settings = {
    customPaging: function (i) {
      return (
        <img
          className="w-[100px] flex flex-row object-cover h-[80px]"
          src={`${productDetails.images[i]}`}
          alt={""}
        />
      );
    },
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "dotClass slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();
    console.log("quantity-added");
    const itemQuantity = quantity;
    const productID = productDetails.id;
    const cart = { productID, itemQuantity };
    setCartDetails([...cartDetails, cart]);
  };

  console.log(cartDetails);

  return (
    <>
      <Navbar></Navbar>
      <div className="pt-[120px] px-2 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-10">
          <div className="w-[400px]">
            <Slider {...settings}>
              {productDetails?.images?.map((image) => (
                <div className="mb-3">
                  <img
                    className="rounded-md object-cover h-[300px] lg:h-[450px]"
                    src={image}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="text-gray-800 px-4">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
              {productDetails?.title}
            </h1>
            <div className="flex justify-between items-center mb-2">
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
              <p className="text-sm lg:text-xl mb-2 max-w-[550px]">
                {productDetails.description}
              </p>
            </div>
            <div>
              <p className="text-sm lg:text-xl">
                <span className="font-bold">Brand:</span> {productDetails.brand}
              </p>
              <p className="text-sm lg:text-xl">
                <span className="font-bold">In Stock:</span>{" "}
                {productDetails.stock}
              </p>
            </div>
            <div className="">
              <p className="text-xl">
                Regular Price:{" "}
                <span className="font-bold line-through text-[#E84309]">
                  ${productDetails.price}
                </span>
              </p>
              <p className="text-2xl mb-4">
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
            <div className="">
              <form onSubmit={handleForm}>
                <p className="text-xl mr-3 inline">Quantity: </p>
                <input
                  name="plusButton"
                  className="w-[30px] text-center outline-none inline mr-3 px-2 py-1 bg-gray-300 text-[#E84309] hover:cursor-pointer"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 0}
                  value={"-"}
                  readOnly
                ></input>
                <input
                  type="number"
                  value={quantity}
                  onChange={quantityChange}
                  min="0"
                  max="5"
                  disabled={quantity === 5}
                  className="w-[50px] mb-4 px-2 py-1 text-center outline-none ring-1 ring-[#E84309]"
                />
                <input
                  name="minusButton"
                  className="w-[30px] text-center outline-none inline ml-3 px-2 py-1 bg-gray-300 text-[#E84309] hover:cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity === 5}
                  value="+"
                  readOnly
                ></input>

                <input
                  name="asc"
                  type="submit"
                  value={"Add to Cart"}
                  disabled={quantity === 0}
                  className="bg-[#E84309] block px-8 py-4 rounded text-white text-lg hover:cursor-pointer hover:bg-[#ba3200]"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
