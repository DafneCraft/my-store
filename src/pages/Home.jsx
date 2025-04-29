import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import ImageCarousel from "../component/ImagesCarousel.jsx";
import HomeSections from "../component/HomeSections.jsx";

function Home() {
  return (
    <>
      <Header />
      <div className="max-md:pt-40 pt-30 min-h-screen">
        <ImageCarousel />
        <HomeSections />
      </div>
      <Footer />
    </>
  );
}
export default Home;
