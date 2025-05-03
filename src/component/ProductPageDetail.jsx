import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../database/ApiDataBase"; // Importa tu instancia de Firestore

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      setProduct(null);

      try {
        const productDocRef = doc(db, "products", id); // Referencia al documento del producto por su ID
        const docSnap = await getDoc(productDocRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Producto no encontrado.");
        }
      } catch (error) {
        console.error("Error fetching product details from Firestore:", error);
        setError("Hubo un error al cargar los detalles del producto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain bg-gray-100"
          />
        )}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="font-bold text-green-500 text-xl">${product.price}</p>
          {/* Puedes agregar más detalles aquí */}
          <Link
            to="/products"
            className="inline-block mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
