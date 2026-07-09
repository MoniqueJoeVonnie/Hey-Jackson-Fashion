import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="top-bar">
      <div className="logo-box">
        <img src={logo} alt="Hey Jackson Fashion Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
        <a href="#">🛒 Cart</a>
      </nav>
    </header>
  );
}

export default Navbar;