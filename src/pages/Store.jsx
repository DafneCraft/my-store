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
    <div className="flex flex-col items-center justify-center h-screen mt-30 p-100 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 mt-4">Store</h1>
      <p className="text-gray-700">Welcome to the store!</p>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {Category.map((item, index) => (
          <Section2Component
            key={index}
            name={item.title}
            imageUrl={item.image}
            flex-col
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
