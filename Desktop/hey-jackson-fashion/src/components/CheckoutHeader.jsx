import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/CheckoutHeader.css";

function CheckoutHeader() {
  return (
    <header className="checkout-header">
      <div className="checkout-header-container">
        <Link to="/" className="checkout-logo">
          <img
            src={logo}
            alt="Hey Jackson! Fashion"
          />
        </Link>

        <h1 className="checkout-title">
          Checkout
        </h1>
        <p>Your information is protected with secure encryption.</p>
      </div>
    </header>
  );
}

export default CheckoutHeader;