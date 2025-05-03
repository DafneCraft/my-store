import { Link } from "react-router-dom";
import React, { useState } from "react";
import MobileMenu from "./MenuMobile";
import { FiSearch, FiUser, FiHeart } from "react-icons/fi";
import CartButton from "./Cart";
import BarIcon from "./SearchIcon";
import ProductList from "./ProductList";
{
  /*This component is above the header and is used to display a message
    It is a simple component that takes a text prop and displays it*/
}
function MessageAboveHeader(props) {
  return (
    <div className="text-center bg-blue-500 text-white p-1">
      <p>{props.text}</p>
    </div>
  );
}

{
  /*This component is used to display the logo of the website*/
}
function Logo({ ShowOnMobile = false }) {
  return (
    <Link
      to={"/"}
      className={`${
        ShowOnMobile ? "flex md:hidden" : "hidden md:flex"
      } items-center justify-center`}
    >
      <img src="/NekoTechLogo.png" alt="Logo" className="w-40 h-15" />
    </Link>
  );
}

{
  /*This component is used to display the menu icons on the right side of the header*/
}
function MenuIcons() {
  return (
    <div className="flex items-center justify-center text-2xl">
      <BarIcon onSearch={Search} />
      <Link to="/login" className="text-black p-2 rounded hover:bg-gray-100">
        <FiUser />
      </Link>
      <button className="text-black p-2 rounded cursor-pointer hover:bg-gray-100">
        <FiHeart />
      </button>
      <CartButton />
    </div>
  );
}

{
  /*This component is used to display the navigation menu on the header*/
}
function Navigation() {
  return (
    <nav className="hidden md:flex items-center justify-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-black hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-black hover:text-gray-400">
            Store
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchTerm) => {
    setIsSearching(true);
    // Example usage of searchTerm in search logic
    const results = await fetch(
      `/api/search?query=${encodeURIComponent(searchTerm)}`
    ).then((res) => res.json());
    setSearchResults(results);
    setIsSearching(false);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />{" "}
      {/* Aquí pasamos handleSearch como la prop onSearch */}
      <div className="container mx-auto mt-8">
        {isSearching && <p>Buscando productos...</p>}
        {!isSearching && searchResults.length > 0 && (
          <ProductList products={searchResults} />
        )}
        {!isSearching && searchResults.length === 0 && (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

{
  /*This component is used to display the header of the website*/
}
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <MessageAboveHeader text="Buy products more than $50, shipping is free!" />
      <div>
        <Logo ShowOnMobile={true} />
      </div>
      <div className="flex items-center justify-between p-4">
        <MobileMenu />
        <Navigation />
        <Logo ShowOnMobile={false} />
        <MenuIcons />
      </div>
    </header>
  );
}

export default Header;
