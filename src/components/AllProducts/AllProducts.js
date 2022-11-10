import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.products));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete the item?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://dummyjson.com/products/1", {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.isDeleted === true) {
              const restProducts = allProducts?.filter(
                (product) => product.id !== id
              );
              setAllProducts(restProducts);
              Swal.fire("Product Deleted!", "", "success");
            }
          });
      }
    });
  };

  return (
    <div className="p-4 lg:px-24">
      <h2 className="text-xl lg:text-4xl text-center text-[#E9440A] border-b-4 border-[#E9440A] pb-4 mb-8 font-semibold">
        All Our Products
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {allProducts?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
