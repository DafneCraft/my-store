import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoizamos el array de imágenes
  const images = useMemo(
    () => [
      {
        src: "/Images1.jpg",
        alt: "Hombre sonriendo con un telefono móvil y unos auriculares",
      },
      {
        src: "/Images2.jpg",
        alt: "Mesa con varias cosas, telefeono, mando, auriculares y laptop",
      },
      {
        src: "/Images3.jpg",
        alt: "Mujer hablando atraves de un microfono frente a una laptop con auriculares",
      },
    ],
    []
  ); // El array de dependencias está vacío porque las imágenes son estáticas

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

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
  }, [nextSlide]);

  return (
    <div className="max-w-10xl mx-auto">
      <div className="relative overflow-hidden shadow-lg">
        <div className="relative h-200">
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
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 cursor-pointer focus:outline-none z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 cursor-pointer focus:outline-none z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
