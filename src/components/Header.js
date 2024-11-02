import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 bg-lavender-700">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="w-24" />
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-center space-x-8">
          <li className="nav-item">
            <Link to="/home" className="text-white hover:text-lavender-300 transition duration-300 transform hover:scale-105">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="text-white hover:text-lavender-300 transition duration-300 transform hover:scale-105">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="text-white hover:text-lavender-300 transition duration-300 transform hover:scale-105">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="text-white hover:text-lavender-300 transition duration-300 transform hover:scale-105">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        < input type="search" placeholder="Search" className="w-full p-2 pl-10 text-sm text-gray-700" />
      </div>
    </div>
  );
};