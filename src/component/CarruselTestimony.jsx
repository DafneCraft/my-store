import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialCarousel({ testimonials }) {
  const testimonial = testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonial.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonial.length - 1 : prevIndex - 1
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
  }, [currentIndex, nextTestimonial]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-blue-300">
      <div className="text-center p-4">
        <p className="text-black italic mb-4">
          "{testimonial[currentIndex].text}"
        </p>
        <p className="font-semibold text-black">
          — {testimonial[currentIndex].name}
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
