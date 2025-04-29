import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductCarousel({ products }) {
  const product0 = products;
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
        {product0.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md border border-gray-100">
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
    </div>
  );
}
