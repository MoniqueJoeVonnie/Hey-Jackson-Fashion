import { Link } from "react-router-dom";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Hey Jackson! Fashion</h2>
          <p>Luxury fashion and accessories for stylish pups.</p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Shop</h3>

            <Link to="/products">New Arrivals</Link>
            <Link to="/products">Best Sellers</Link>
            <Link to="/products">Combo Deals</Link>
            <Link to="/category/accessories">
              Accessories
            </Link>
          </div>

          <div>
            <h3>Help</h3>

            <Link to="/shipping">Shipping</Link>
            <Link to="/returns">Returns</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h3>Follow Us</h3>

            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
              <span>TikTok</span>
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Hey Jackson! Fashion.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;