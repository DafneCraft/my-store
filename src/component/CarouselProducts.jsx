import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductCarousel() {
  const products = [
    { id: 1, name: "Camiseta 1", price: "$20" },
    { id: 2, name: "Pantalón 2", price: "$30" },
    { id: 3, name: "Camiseta 3", price: "$20" },
    { id: 4, name: "Pantalón 4", price: "$30" },
    { id: 5, name: "Camiseta 5", price: "$20" },
    { id: 6, name: "Pantalón 6", price: "$30" },
    { id: 7, name: "Camiseta 7", price: "$20" },
    { id: 8, name: "Pantalón 8", price: "$30" },
    { id: 9, name: "Camiseta 9", price: "$20" },
    { id: 10, name: "Pantalón 10", price: "$30" },
    { id: 11, name: "Camiseta 11", price: "$20" },
    { id: 12, name: "Pantalón 12", price: "$30" },
    { id: 13, name: "Camiseta 13", price: "$20" },
    { id: 14, name: "Pantalón 14", price: "$30" },
    { id: 15, name: "Camiseta 15", price: "$20" },
    { id: 16, name: "Pantalón 16", price: "$30" },
    // ... más productos
  ];

  return (
    <div className="relative px-4 py-8">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20} // Espacio entre productos
        slidesPerView={4} // Número de productos visibles al mismo tiempo
        breakpoints={{
          320: { slidesPerView: 1 }, // Móvil: 1 producto
          768: { slidesPerView: 3 }, // Tablet: 3 productos
          1024: { slidesPerView: 4 }, // Desktop: 4 productos
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación personalizados (opcional) */}
    </div>
  );
}
