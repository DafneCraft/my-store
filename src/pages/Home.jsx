import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";
import ImageCarousel from "../component/ImagesCarousel.jsx";
import HomeSections from "../component/HomeSections.jsx";

function Home() {
  return (
    <>
      <Header />
      <ImageCarousel />
      <HomeSections />
      <Footer />
    </>
  );
}
export default Home;
