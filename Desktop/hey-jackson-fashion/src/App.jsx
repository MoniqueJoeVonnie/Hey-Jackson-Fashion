import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import petBoots from "./assets/Pet boots.png";
import petBowls from "./assets/Pet Bowls.png";
import petHarnesses from "./assets/Pet harnesses.png";
import stylishPoodle from "./assets/Stylish Poodle.png";
import sneakerCollection from "./assets/Sneaker collection.png";
import sportyJersey from "./assets/Sporty jersey.png";
import combo from "./assets/Combo.png";
import petSofa from "./assets/Pet sofa.png";
import petCarriers from "./assets/pet-carrier.png";
import newComboDeals from "./assets/New Combo Deals.png";
import recentReelVideo from "./assets/Splash Page_Doggie Fashion Runway.mp4";
import tiktokShowcaseVideo from "./assets/EatSleepPlayPoopRepeat_Finished.mp4";
import { FaPaw } from "react-icons/fa";
import { useState, useEffect } from "react";
import ProductDetail from "./Pages/ProductDetail";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import CheckoutReview from "./Pages/CheckoutReview";
import OrderConfirmation from "./Pages/OrderConfirmation";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";



function App() {

  const [hideScrollGuide, setHideScrollGuide] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setHideScrollGuide(window.scrollY > 40);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    const bestSellerSlides = [
    sneakerCollection,
    sportyJersey,
    combo,
    petSofa,
  ];

  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />

            <div className={`scroll-guide ${hideScrollGuide ? "hidden" : ""}`}>
        <div className="scroll-bars">
          {[...Array(12)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        <div className="scroll-arrow">↓</div>
      </div>

      <div className="search-section">
        <input
          type="text"
          className="homepage-search"
          placeholder="Search products..."
        />
        <button className="search-button">
          <FaPaw />
        </button>
      </div>

      {/* Best Sellers */}

      <div className="page-background">
  <section className="best-seller-carousel">
  <h2 className="section-heading">Best Sellers</h2>

  <div className="carousel-track">
  {[...bestSellerSlides, ...bestSellerSlides].map((slide, index) => (
    <img src={slide} alt={`Best seller ${index + 1}`} key={index} />
  ))}
</div>
</section>

    <section className="collections">
  <h2 className="section-heading">Shop By Collection</h2>

    <div className="collection-grid">
      <div className="collection-card">
        <img src={stylishPoodle} alt="Pet Clothing" />
        <h3>Pet Clothing</h3>
        <Link to="/products/category/clothing">
          <button>Shop Clothing</button>
        </Link>
      </div>

      <div className="collection-card">
        <img src={petBoots} alt="Paw Protectors" />
        <h3>Paw Protectors</h3>
        <Link to="/products/category/shoes">
          <button>Shop Shoes</button>
        </Link>
      </div>

      <div className="collection-card">
        <img src={petHarnesses} alt="Harnesses" />
        <h3>Harnesses</h3>
        <Link to="/products/category/harnesses">
          <button>Shop Harnesses</button>
        </Link>
      </div>

      <div className="collection-card">
        <img src={petBowls} alt="Pet Accessories" />
        <h3>Accessories</h3>
        <Link to="/products/category/accessories">
          <button>Shop Accessories</button>
        </Link>
      </div>
    </div>
  </section>

  <section className="why-shop">
  <h2 className="section-heading">Why Pet Parents Love Us</h2>

    <div className="why-grid">
      <div>🛡 Secure Checkout</div>
      <div>💳 Pay In 4 With Shop Pay</div>
      <div>🚚 Fast U.S. Shipping</div>
      <div>❤️ Made With Love</div>
    </div>
  </section>

  <section className="promo-showcase">
  <h2 className="section-heading">Shop What’s New & Watch Us On TikTok</h2>

  <div className="promo-grid">
    <div className="promo-card image-card">
      <h3>New Arrivals</h3>
      <img src={petCarriers} alt="New Arrivals" />
      <button>Shop New</button>
    </div>

    <div className="promo-card image-card">
      <h3>New Combo Deals</h3>
      <img src={newComboDeals} alt="New Combo Deals" />
      <button>Shop Combos</button>
    </div>

    <div className="promo-card video-card">
      <h3>Recent Reels</h3>

      <video
        src={recentReelVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <button>Watch Reels</button>
    </div>

    <div className="promo-card video-card">
      <h3>TikTok Showcase</h3>

      <video
      className="promo-video"
      src={tiktokShowcaseVideo}
      autoPlay
      muted
      loop
      playsInline
    />

      <button>Watch TikTok</button>
    </div>
  </div>
</section>

  <section className="vip-club">
  <h2 className="section-heading">🐾 Join the VIP Pup Club</h2>

    <p>
      Be first to know about new arrivals, exclusive combo deals,
      special discounts, and adorable fashion drops.
    </p>

    <div className="vip-form">
      <input type="email" placeholder="Enter your email" />
      <button>Join Now</button>
    </div>
  </section>

  </div>

  <Footer />

  
            </>
          }
        />

          <Route
            path="/products"
            element={
              <>
                <Navbar />
                <ProductPage />
              </>
            }
          />

          <Route
            path="/products/category/:categoryName"
            element={
              <>
                <Navbar />
                <CategoryPage />
              </>
            }
          />

          <Route
            path="/products/:productId"
            element={
              <>
                <Navbar />
                <ProductDetail />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
              </>
            }
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/orders/:orderId"
            element={<OrderDetails />}
          />

          <Route
            path="/checkout/review"
            element={<CheckoutReview />}
          />

          <Route
            path="/checkout/confirmation/:orderId"
            element={<OrderConfirmation />}
          />

          <Route 
            path="/contact" 
            element={<Contact />} 
          />

      </Routes>
    </>
  );
}

export default App;


