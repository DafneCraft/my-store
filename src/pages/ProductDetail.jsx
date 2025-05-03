import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import ProductDetailsPage from "../component/ProductPageDetail.jsx";

export default function About() {
  return (
    <>
      <Header />
      <div className="max-md:pt-40 pt-30 min-h-screen">
        <ProductDetailsPage />
      </div>
      <Footer />
    </>
  );
}
