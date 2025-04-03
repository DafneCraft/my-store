function MessageHeader(props) {
  return (
    <div className="text-center bg-red-500 text-white p-1 shadow-lg">
      <p>{props.text}</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img src="logo.png" alt="Logo" className="w-16 h-16" />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="bg-gray-800 p-3">
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <MessageHeader text="Hola Mundo!" />
      <Navigation />
    </header>
  );
}

export default Header;
