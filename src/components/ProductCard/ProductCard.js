import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 rounded hover:ring-1 hover:ring-[#E84309] transition-transform ease-in-out duration-300 hover:shadow-xl p-5">
      <div>
        <img
          className="rounded-md w-full object-cover h-[200px]"
          src={product.thumbnail}
          alt=""
        />
      </div>
      <div className="space-y-3">
        <h2 className="font-bold text-lg text-gray-800 normal-case">
          {product.title}
        </h2>
        {/* <p className="text-sm">{product.description}</p> */}
        <div className="space-y-0">
          <p className="text-base">
            Regular Price:{" "}
            <span className="font-bold line-through text-[#E84309]">
              ${product.price}
            </span>
          </p>
          <p className="text-xl">
            Discounted Price:{" "}
            <span className="font-bold text-[#E84309]">
              $
              {Math.round(
                product.price -
                  product.price * (parseFloat(product.discountPercentage) / 100)
              )}
            </span>
            <span className="text-xs ml-2">
              ({product.discountPercentage}%)
            </span>
          </p>
        </div>
        <div
          className="flex justify-end text-[#E84309] cursor-pointer"
          onClick={() => handleDelete(product.id)}
        >
          <AiFillDelete></AiFillDelete>
        </div>
        <div className="flex justify-between items-center">
          <div
            className="bg-[#E84309] px-4 py-2 rounded text-white text-sm hover:cursor-pointer hover:bg-[#ba3200]"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            More Details
          </div>
          <div className="flex text-[#E84309]">
            {[...Array(Math.round(product.rating))].map((item, index) => (
              <AiFillStar key={index} />
            ))}
            {[...Array(5 - Math.round(product.rating))].map((item, index) => (
              <BsStarHalf key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
