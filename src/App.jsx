import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginUser from "./pages/LoginUser";
import CreateUser from "./pages/CreateUser";
import ForgotPassword from "./pages/ForgotPassword";
import DataBaseP from "./database/PageDataBase";
import ProductDetailsPage from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<LoginUser />} />
        <Route exact path="/register" element={<CreateUser />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/database" element={<DataBaseP />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/product/:id" element={<ProductDetailsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
