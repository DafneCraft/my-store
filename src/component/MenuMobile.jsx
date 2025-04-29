import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 focus:outline-none"
        aria-expanded={isOpen}
        aria-label="Menú móvil"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menú solo se renderiza cuando isOpen es true */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/store"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Store
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
