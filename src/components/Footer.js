import "../css/HeadBody.css";

export const Footer = () => {
  return (
    <div className="bg-lavender-800 p-5">
      <div className="footer-content text-center">
        <h2 className="footer-title text-white text-2xl mb-4">Stay Connected</h2>
        <ul className="footer-links flex justify-center space-x-6 mb-4">
          <li className="footer-item">
            <a href="#privacy" className="text-lavender-300 hover:text-white transition duration-300 transform hover:scale-105">Privacy Policy</a>
          </li>
          <li className="footer-item">
            <a href="#terms" className="text-lavender-300 hover:text-white transition duration-300 transform hover:scale-105">Terms of Service</a>
          </li>
          <li className="footer-item">
            <a href="#contact" className="text-lavender-300 hover:text-white transition duration-300 transform hover:scale-105">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-socials flex justify-center space-x-6 mb-4">
        <a href="#facebook" className="social-icon text-lavender-300 hover:text-white transition duration-300 transform hover:scale-105">Facebook</a>
        <a href="#twitter" className="social-icon text-lavender-300 hover:text-white transition duration-300 transform hover:scale-105">Twitter</a>
        <a href="#instagram" className="social-icon text-lavender-300 hover:text-white transition duration-300 transform hover:scale-105">Instagram</a>
      </div>
      <p className="footer-copy text-center text-lavender-200">&copy; 2023 Your Company. All Rights Reserved.</p>
    </div>
  );
}