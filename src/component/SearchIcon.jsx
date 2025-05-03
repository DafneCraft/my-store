import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Importa un icono de búsqueda (react-icons)
import SearchBar from "./SearchBar";

const BarIcon = ({ onSearch }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="bg-gray-100 py-4 px-6 flex items-center justify-between">
      <div className="text-xl font-bold">Mi Tienda</div>
      <div className="flex items-center">
        <button
          onClick={toggleSearch}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <FiSearch size={20} />
        </button>
        {isSearchVisible && (
          <div className="ml-4">
            <SearchBar onSearch={onSearch} />
          </div>
        )}
        {/* Otros elementos de navegación */}
      </div>
    </nav>
  );
};

export default BarIcon;
