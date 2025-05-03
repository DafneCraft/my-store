import React from "react";
import { Link } from "react-router-dom"; // Necesitarás react-router-dom

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-300"
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-2 font-bold text-blue-500">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
