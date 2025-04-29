import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

export default function About() {
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
}

function AboutContent() {
  return (
    <div className="pt-35 min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contenedor principal - cambia a columna en móviles */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Sección de imagen - orden primero en móviles, tamaño adaptable */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/AboutUs.jpg"
                alt="About Us"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Sección de texto - orden segundo en móviles, padding adaptable */}
          <div className="w-full lg:w-1/2 order-2 lg:order-none px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Us
            </h1>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">Welcome to the about page!</p>

              <p className="text-base sm:text-lg">
                We are a company dedicated to providing the best products and
                services for our customers. Our mission is to deliver
                high-quality products that meet the needs of our customers.
              </p>

              <p className="text-base sm:text-lg">
                We value customer satisfaction and strive to exceed expectations
                in everything we do. Thank you for visiting our website and
                learning more about us!
              </p>

              <p className="text-base sm:text-lg">
                If you have any questions or feedback, feel free to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
