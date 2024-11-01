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
            <a href="#home" className="text-white hover:text-lavender-300 transition duration-300 transform hover:scale-105">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="text-white hover:text-lavender-300 transition duration-300 transform hover:scale-105">About</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="text-white hover:text-lavender-300 transition duration-300 transform hover:scale-105">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="text-white hover:text-lavender-300 transition duration-300 transform hover:scale-105">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-lavender-600 rounded  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lavender-300"
        />
      </div>
    </div>
  );
}