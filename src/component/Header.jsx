import { Link } from "react-router-dom";
import MobileMenu from "./MenuMobile";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

function MessageHeader(props) {
  return (
    <div className="text-center bg-gray-500 text-white p-1">
      <p>{props.text}</p>
    </div>
  );
}

function Logo({ ShowOnMobile = false }) {
  return (
    <div
      className={`${
        ShowOnMobile ? "flex md:hidden" : "hidden md:flex"
      } items-center justify-center`}
    >
      <img
        src="../../public/NekoTechLogo.png"
        alt="Logo"
        className="w-40 h-15"
      />
    </div>
  );
}

function MenuBurguer({ ShowOnMobile = false }) {
  return (
    <div className={`md:hidden ${ShowOnMobile ? "block" : "hidden"}`}>
      <button className="text-black p-2 rounded">
        <FiMenu />
      </button>
    </div>
  );
}

function MenuIcons() {
  return (
    <div className="flex items-center justify-center text-2xl">
      <button className="text-black p-2 rounded">
        <FiSearch />
      </button>
      <button className="text-black p-2 rounded">
        <FiUser />
      </button>
      <button className="text-black p-2 rounded">
        <FiHeart />
      </button>
      <button className="text-black p-2 rounded">
        <FiShoppingCart />
      </button>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="hidden md:flex items-center justify-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/src/pages/Home" className="text-black hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/src/pages/Store"
            className="text-black hover:text-gray-400"
          >
            Store
          </Link>
        </li>
        <li>
          <Link
            to="/src/pages/About"
            className="text-black hover:text-gray-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/src/pages/Contact"
            className="text-black hover:text-gray-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <MessageHeader text="Hola . olaH" />
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
