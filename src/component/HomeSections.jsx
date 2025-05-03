import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { PiMoneyWavyBold } from "react-icons/pi";
import { BsDatabaseLock } from "react-icons/bs";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { GrUserExpert, GrDocumentText } from "react-icons/gr";
import { CiDiscount1 } from "react-icons/ci";
import TestimonialCarousel from "./CarruselTestimony";
import ProductCarousel from "./CarouselProducts";
import obtenerTopDiezProductosValorados from "../database/ProductosDiezMejores";

export default function HomeSections() {
  const [topProductos, setTopProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarTopProductos = async () => {
      try {
        const productos = await obtenerTopDiezProductosValorados();
        setTopProductos(productos);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    cargarTopProductos();
  }, []);

  if (loading) {
    return console.log("Cargando los mejores productos...");
  }

  if (error) {
    return console.log("Error al cargar los productos: ", error.message);
  }

  const Section1Variable = [
    {
      icon: FiLock,
      title: "Secure payments",
      content:
        "At NekoTech, your payments are 100% protected with SSL encryption. We accept credit cards, PayPal, wire transfers and more, risk free.",
    },
    {
      icon: PiMoneyWavyBold,
      title: "Returns Policy",
      content:
        "Didn't like it or had a problem? We'll give you your money back with no hassle in 30 days.",
    },
    {
      icon: BsDatabaseLock,
      title: "Protection of personal data",
      content:
        "We take your privacy seriously. Your personal data is protected and will not be shared with third parties.",
    },
    {
      icon: TfiCommentsSmiley,
      title: "Social trust",
      content:
        "We have a community of satisfied customers who trust us. Join them and enjoy the best shopping experience.",
    },
  ];

  const Section2Variable = [
    {
      image: "/Cat1Image.jpg",
      title: "Accessories and Peripherals",
      link: "/category/cat1",
    },
    {
      image: "/Cat2Image.webp",
      title: "Cats",
      link: "/category/cat2",
    },
    {
      image: "/Cat3Image.jpg",
      title: "IoT",
      link: "/category/cat3",
    },
    {
      image: "/Cat4Image.jpg",
      title: "Gadgets for Travel",
      link: "/category/cat4",
    },
  ];

  const Section3Variable = [
    {
      icon: GrUserExpert,
      title: "Expertise in Technology and Personalized Consulting",
      content:
        "We have a team of experts ready to help you find the perfect product for your needs.",
    },
    {
      icon: GrDocumentText,
      title: "100% Original Products with Extended Warranty",
      content:
        "All our products are 100% original and come with an extended warranty for your peace of mind.",
    },
    {
      icon: CiDiscount1,
      title: "Competitive Prices + Exclusive Benefits",
      content:
        "We offer competitive prices and exclusive benefits for our customers, including discounts and promotions.",
    },
  ];

  const Section4Variable = [
    {
      image: "/Cat1Image.jpg",
      name: "Accessories and Peripherals",
      price: "$100",
      starts: "4.5",
    },
    {
      image: "/Cat2Image.webp",
      name: "Cats",
      price: "$200",
      starts: "4.0",
    },
    {
      image: "/Cat3Image.jpg",
      name: "IoT",
      price: "$300",
      starts: "5.0",
    },
    {
      image: "/Cat4Image.jpg",
      name: "Gadgets for Travel",
      price: "$400",
      starts: "3.5",
    },
    {
      image: "/Cat1Image.jpg",
      name: "Accessories and Peripherals1",
      price: "$100",
      starts: "4.5",
    },
    {
      image: "/Cat2Image.webp",
      name: "Cats2",
      price: "$200",
      starts: "4.0",
    },
    {
      image: "/Cat3Image.jpg",
      name: "IoT3",
      price: "$300",
      starts: "5.0",
    },
    {
      image: "/Cat4Image.jpg",
      name: "Gadgets for Travel4",
      price: "$400",
      starts: "3.5",
    },
  ];

  const Section5Variable = [
    {
      id: 1,
      name: "Ana Pérez",
      text: "Excellent service! They helped me a lot with my project.",
    },
    {
      id: 2,
      name: "Carlos Gómez",
      text: "Very professional, I highly recommend them.",
    },
    {
      id: 3,
      name: "Luisa Martínez",
      text: "Incredible experience, I would work with them again.",
    },
  ];

  const Section6Variable = [
    {
      question: "What is the return policy?",
      answer:
        "You can return any product within 30 days of purchase for a full refund. The product must be in its original condition.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes between 3-5 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Simply add the products to your cart and proceed to checkout. You can pay with credit card, PayPal, or bank transfer.",
    },
    {
      question: "What are the payment methods?",
      answer:
        "We accept credit cards, PayPal, and bank transfers. All payments are secure.",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-blue-300">
        {Section1Variable.map((item, index) => (
          <Section1Component
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      {/*Section 2 */}
      <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Section2Variable.map((item, index) => (
              <Section2Component
                key={index}
                name={item.title}
                imageUrl={item.image}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
      {/*Section 3 */}
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-blue-300">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Why choose us?
          </h2>

          <div className="flex flex-col justify-center lg:flex-row gap-6 sm:gap-8">
            {Section3Variable.map((item, index) => (
              <Section1Component
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
                className="flex-1" // Para que ocupen igual espacio
              />
            ))}
          </div>
        </div>
      </div>
      {/*Section 4 */}
      <div className="flex flex-col items-left justify-center p-10">
        <h2 className="text-3xl ml-4">Best Sellers</h2>
        <p className="text-2xl ml-4">
          Take a look at our best selling products
        </p>
        <ProductCarousel products={topProductos} />
      </div>
      {/*Section 5 */}
      <div className="flex flex-col items-center justify-center p-10 bg-blue-300">
        <h2 className="text-3xl">What our Customers Say</h2>
        <TestimonialCarousel testimonials={Section5Variable} />
      </div>
      {/*Section 6 */}
      <div className="flex flex-col items-center justify-center p-10">
        <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            F.A.Q. - Frequently Asked Questions
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {Section6Variable.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
            <div className="p-4 bg-gray-100 text-center">
              <p className="text-gray-600">
                If you have more questions, feel free to{" "}
                <Link to="/contact" className="text-blue-500 underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section1Component({ icon: IconComponent, title, content }) {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-2rem)] p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {IconComponent && (
        <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
      )}
      <h2 className="mt-3 font-bold text-xl sm:text-2xl text-center text-gray-800">
        {title}
      </h2>
      <p className="mt-2 text-center text-base sm:text-lg text-gray-600">
        {content}
      </p>
    </div>
  );
}

export const Section2Component = ({ name, imageUrl, link }) => {
  return (
    <Link
      to={link}
      className="group relative block w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
    >
      {/* Imagen de fondo */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay semitransparente */}
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"
      />

      {/* Texto */}
      <div className="absolute inset-0 flex items-center justify-center p-2">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center px-3 py-2 transform group-hover:scale-105 transition-transform duration-300">
          {name}
        </h3>
      </div>
    </Link>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-4 px-2 text-left flex justify-between items-center hover:bg-gray-100 cursor-pointer transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg text-gray-800">{question}</span>
        <span className="ml-4 transform transition-transform duration-200">
          {isOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4 px-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-600">{answer}</div>
      </div>
    </div>
  );
};
