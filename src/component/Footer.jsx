import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

function Menu() {
  return (
    <nav>
      <ul className="flex space-x-4 p-2">
        <li>
          <a href="#" className="text-black hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-400">
            Store
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

function SocialMediaIcons() {
  return (
    <div className="flex items-center justify-center text-2xl p-2">
      <button className="text-black p-2 rounded hover:bg-gray-200">
        <FiFacebook />
      </button>
      <button className="text-black p-2 rounded hover:bg-gray-200">
        <FiInstagram />
      </button>
      <button className="text-black p-2 rounded hover:bg-gray-200">
        <FiTwitter />
      </button>
    </div>
  );
}

function EmailSubscription() {
  return (
    <div className="flex items-center justify-center p-2 space-x-2">
      <input
        type="email"
        placeholder="Subscribe to our newsletter"
        className="p-2 border bg-white border-gray-300 rounded"
      />
      <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Subscribe
      </button>
    </div>
  );
}

function Allrights() {
  return (
    <div className="text-center mt-4">
      <p>&copy; 2025 NekoTech. All rights reserved.</p>
      <p>
        {" "}
        <a href="" className="text-black hover:text-gray-400">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="" className="text-black hover:text-gray-400">
          Terms of Service
        </a>
      </p>
      <p>Designed by DafneCraft</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-6">
        <Menu />
        <SocialMediaIcons />
        <EmailSubscription />
        <hr className="w-full border-gray-300 my-4" />
        <Allrights />
      </div>
    </footer>
  );
}

export default Footer;
