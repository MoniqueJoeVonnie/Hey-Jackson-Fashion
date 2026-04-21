import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/Library.svg";

const Nav = ({ cart = [] }) => {
  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function openMenu() {
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="Library Logo" className="logo" />
        </Link>

        <ul className="nav_links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>

          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            {cartQuantity > 0 && (
              <span className="cart__length">{cartQuantity}</span>
            )}
          </li>
        </ul>

        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link" onClick={closeMenu}>
                Cart {cartQuantity > 0 ? `(${cartQuantity})` : ""}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;