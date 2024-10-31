
import "../css/HeadBody.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">Stay Connected</h2>
        <ul className="footer-links">
          <li className="footer-item"><a href="#privacy">Privacy Policy</a></li>
          <li className="footer-item"><a href="#terms">Terms of Service</a></li>
          <li className="footer-item"><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-socials">
        <a href="#facebook" className="social-icon">Facebook</a>
        <a href="#twitter" className="social-icon">Twitter</a>
        <a href="#instagram" className="social-icon">Instagram</a>
      </div>
      <p className="footer-copy">&copy; 2023 Your Company. All Rights Reserved.</p>
    </div>
  )
}
