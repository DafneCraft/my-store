import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import { Section2Component } from "../component/HomeSections.jsx";

export default function Store() {
  return (
    <>
      <Header />
      <StoreContent />
      <Footer />
    </>
  );
}

function StoreContent() {
  const Category = [
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
  return (
    <div className="pt-35 min-h-screen w-full bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-gray-900 mb-2">
            Store
          </h1>
          <p className="text-gray-600 sm:text-lg">Welcome to the store!</p>
        </div>

        {/* Grid de categorías - responsive */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {Category.map((item, index) => (
            <Section2Component
              key={index}
              name={item.title}
              imageUrl={item.image}
              link={item.link}
              className="w-full h-full" // Asegura que el componente hijo sea responsive
            />
          ))}
        </div>
      </div>
    </div>
  );
}
