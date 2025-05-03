import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "./ApiDataBase"; // Asegúrate de que la ruta sea correcta

function MiComponente() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "products", "zero"); // Reemplaza con tus colecciones y documentos
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("¡No se encontró el documento!");
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <div>
      {data && (
        <>
          <h1>{data.category}</h1>
          <p>{data.description}</p>
          <p>{data.nombre}</p>
          <p>{data.price}</p>
          <img
            src="https://ucarecdn.com/91a92020-be05-4d76-8721-de107e6b960b/gato1.webp"
            alt={data.altImage}
          />
          {/* Renderiza otros campos de tu documento */}
        </>
      )}
    </div>
  );
}

export default MiComponente;
