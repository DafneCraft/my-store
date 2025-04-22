import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes de ejemplo (usando placeholders)
  const images = [
    {
      src: "/Images1.jpg",
      alt: "Hermoso paisaje natural",
    },
    {
      src: "/Images2.jpg",
      alt: "Ciudad moderna al atardecer",
    },
    {
      src: "/Images3.jpg",
      alt: "Playa tropical paradisíaca",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Efecto para reproducción automática
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex]);

  return (
    <div className="max-w-10xl mx-auto">
      <div className="relative overflow-hidden shadow-lg">
        {/* Container principal */}
        <div className="relative h-250">
          {/* Carrusel de imágenes */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicadores y controles */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
