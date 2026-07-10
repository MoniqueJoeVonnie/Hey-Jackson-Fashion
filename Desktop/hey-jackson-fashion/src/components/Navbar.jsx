import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="top-bar">
      <div className="logo-box">
        <img src={logo} alt="Hey Jackson Fashion Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">
          Shop
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/cart">
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;