import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="src/pages/Home" element={<Home />} />
        <Route path="/src/pages/About" element={<About />} />
        <Route path="/src/pages/Store" element={<Store />} />
        <Route path="/src/pages/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
