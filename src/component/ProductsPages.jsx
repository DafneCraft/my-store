import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
  orderBy,
} from "firebase/firestore";
import db from "../database/ApiDataBase"; // Importa tu instancia de Firestore

import "../styles/Pagination.css"; // Asegúrate de tener estilos para la paginación

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [lastDocument, setLastDocument] = useState(null);
  const productsPerPage = 12;
  const productsCollectionRef = collection(db, "products"); // Referencia a tu colección de productos

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let queryRef;
        if (currentPage === 0) {
          queryRef = query(
            productsCollectionRef,
            orderBy("name"),
            limit(productsPerPage)
          );
        } else {
          queryRef = query(
            productsCollectionRef,
            orderBy("name"),
            startAfter(lastDocument),
            limit(productsPerPage)
          );
        }

        const querySnapshot = await getDocs(queryRef);
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(fetchedProducts);

        if (fetchedProducts.length > 0) {
          setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1]);
        } else {
          setLastDocument(null); // No hay más documentos
        }

        // Obtener el total de documentos para la paginación
        const countQuery = query(productsCollectionRef);
        const countSnapshot = await getDocs(countQuery);
        setTotalPages(Math.ceil(countSnapshot.size / productsPerPage));
      } catch (error) {
        console.error("Error fetching products from Firestore:", error);
      }
    };

    fetchProducts();
  }, [currentPage, productsPerPage]);

  const handlePageClick = async ({ selected }) => {
    const newPage = selected; // El índice de la página seleccionada (comienza en 0)

    // Obtener el último documento de la página actual
    let newLastDocument = null;
    if (newPage > 0) {
      const queryRef = query(
        productsCollectionRef,
        orderBy("name"),
        limit(productsPerPage * newPage) // Obtiene todos los documentos hasta la página actual
      );
      const querySnapshot = await getDocs(queryRef);
      if (querySnapshot.docs.length > 0) {
        newLastDocument = querySnapshot.docs[querySnapshot.docs.length - 1];
      }
    }

    setCurrentPage(newPage);
    setLastDocument(newLastDocument); // Actualiza lastDocument para la nueva página
    setProducts([]); // Limpia los productos anteriores para cargar los nuevos
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Todos los Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"previous"}
          nextClassName={"next"}
        />
      )}
    </div>
  );
};

export default ProductsPage;
