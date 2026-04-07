import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/Library.svg";

const Nav = () => {
  function openMenu() {
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={LibraryLogo} alt="Library Logo" className="logo" />
        </a>

        <ul className="nav_links">
          <li className="nav__list">
            <a href="/" className="nav__link">Home</a>
          </li>

          <li className="nav__list">
            <a href="/" className="nav__link">Books</a>
          </li>


          <li className="nav__icon">
            <a href="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
            <span className="cart__length">2</span>
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
              <a href="/" className="menu__link">Home</a>
            </li>
            <li className="menu__list">
              <a href="/" className="menu__link">Books</a>
            </li>
            <li className="menu__list">
              <a href="/cart" className="menu__link">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;