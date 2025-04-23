import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Pérez",
    text: "¡Excelente servicio! Me ayudaron mucho con mi proyecto.",
  },
  {
    id: 2,
    name: "Carlos Gómez",
    text: "Muy profesionales, los recomiendo totalmente.",
  },
  {
    id: 3,
    name: "Luisa Martínez",
    text: "Increíble experiencia, volvería a trabajar con ellos.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Efecto para reproducción automática
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      nextTestimonial();
    }, 4000);
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white">
      <div className="text-center p-4">
        <p className="text-gray-600 italic mb-4">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="font-semibold text-gray-800">
          — {testimonials[currentIndex].name}
        </p>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevTestimonial}
        className="absolute left-10 transform -translate-y-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-10 transform -translate-y-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
