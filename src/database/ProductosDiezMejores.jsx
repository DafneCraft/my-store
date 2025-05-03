import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import db from "./ApiDataBase"; // Asegúrate de la ruta correcta

async function obtenerTopDiezProductosValorados() {
  try {
    const productosRef = collection(db, "products"); // Reemplaza 'productos' con el nombre de tu colección
    const q = query(
      productosRef,
      orderBy("rating", "desc"), // Ordena por valoración de mayor a menor (si es necesario)
      limit(10)
    );

    const querySnapshot = await getDocs(q);
    const topProductos = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const { name, price, image } = doc.data();
      topProductos.push({ id: doc.id, name, price, image });
    });
    return topProductos;
  } catch (error) {
    console.error("Error al obtener los productos mejor valorados:", error);
    return [];
  }
}

export default obtenerTopDiezProductosValorados;
