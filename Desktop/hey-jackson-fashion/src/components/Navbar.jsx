import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";


function Navbar() {
  const { cartCount } = useCart();

  const { wishlistCount } = useWishlist();

  const [cartIsPopping, setCartIsPopping] =
  useState(false);

  useEffect(() => {
  if (cartCount === 0) return;

  setCartIsPopping(false);

  const restartTimer = setTimeout(() => {
    setCartIsPopping(true);
  }, 20);

  const stopTimer = setTimeout(() => {
    setCartIsPopping(false);
  }, 600);

  return () => {
    clearTimeout(restartTimer);
    clearTimeout(stopTimer);
  };
}, [cartCount]);

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

        <Link
          to="/wishlist"
          className="navbar-wishlist-link"
        >
          <FaHeart className="navbar-wishlist-icon" />

          <span>Wishlist</span>

          {wishlistCount > 0 && (
            <span className="wishlist-count">
              {wishlistCount}
            </span>
          )}
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link
          to="/cart"
          className="navbar-cart-link"
        >
          🛒 Cart
          {cartCount > 0 && (
            <span
              className={`cart-count ${
                cartIsPopping ? "pop" : ""
              }`}
            >
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;