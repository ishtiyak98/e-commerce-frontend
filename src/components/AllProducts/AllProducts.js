import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  console.log(allProducts);
  return (
    <div className="p-4 lg:px-24">
      <h2 className="text-xl lg:text-4xl text-center text-[#E9440A] border-b-4 border-[#E9440A] pb-4 mb-8 font-semibold">
        All Our Products
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {allProducts?.products?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
