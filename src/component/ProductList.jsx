import React from "react";
import ProductCard from "./ProductCard"; // Asegúrate de que la ruta sea correcta

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
