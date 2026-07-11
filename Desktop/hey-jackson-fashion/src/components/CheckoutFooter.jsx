import { Link } from "react-router-dom";
import "../styles/CheckoutFooter.css";

function CheckoutFooter() {
  return (
    <footer className="checkout-footer">
      <div className="checkout-footer-container">
        <p className="checkout-footer-help">
          Need help with your order?
        </p>

        <nav className="checkout-footer-links">
          <Link to="/shipping">Shipping</Link>
          <Link to="/returns">Returns</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </nav>

        <p className="checkout-footer-copyright">
          © 2026 Hey Jackson! Fashion
        </p>
      </div>
    </footer>
  );
}

export default CheckoutFooter;