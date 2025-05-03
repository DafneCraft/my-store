import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import ProductPages from "../component/ProductsPages.jsx";

export default function About() {
  return (
    <>
      <Header />
      <div className="max-md:pt-40 pt-30 min-h-screen">
        <ProductPages />
      </div>
      <Footer />
    </>
  );
}
