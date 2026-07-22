import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { HiArrowLongDown } from "react-icons/hi2";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import petBoots from "../assets/Pet boots.png";
import petBowls from "../assets/Pet Bowls.png";
import petHarnesses from "../assets/Pet harnesses.png";
import stylishPoodle from "../assets/Stylish Poodle.png";
import sneakerCollection from "../assets/Sneaker collection.png";
import sportyJersey from "../assets/Sporty jersey.png";
import combo from "../assets/Combo.png";
import petSofa from "../assets/Pet sofa.png";
import petCarriers from "../assets/pet-carrier.png";
import newComboDeals from "../assets/New Combo Deals.png";

import recentReelVideo from "../assets/Splash Page_Doggie Fashion Runway.mp4";
import tiktokShowcaseVideo from "../assets/EatSleepPlayPoopRepeat_Finished.mp4";

import "../App.css";






function Home() {
  const [hideScrollGuide, setHideScrollGuide] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const trimmedSearch = searchTerm.trim();

    if (!trimmedSearch) {
      navigate("/search");
      return;
    }

    navigate(
      `/search?q=${encodeURIComponent(
        trimmedSearch
      )}`
    );
  }

  useEffect(() => {
    function handleScroll() {
      setHideScrollGuide(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


    const bestSellerSlides = [
    sneakerCollection,
    sportyJersey,
    combo,
    petSofa,
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

   return (
    <>
      <Navbar />
      <Hero />

      <div
        className={`hero-scroll-indicator ${
            hideScrollGuide ? "hidden" : ""
        }`}
        >
        <button
            type="button"
            className="hero-scroll-button"
            onClick={() =>
                window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
                })
            }
            aria-label="Scroll to explore"
            >
            <HiArrowLongDown />
        </button>

        <span className="hero-scroll-text">
            <span className="explore-word">
                Explore
            </span>

            <span className="discover-word">
                Discover
            </span>
        </span>
        </div>

      <form
        className="search-section"
        onSubmit={handleSearch}
      >
        <input
          type="search"
          className="homepage-search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          aria-label="Search products"
        />

        <button
          type="submit"
          className="search-button"
          aria-label="Submit product search"
        >
          <FaPaw />
        </button>
      </form>

      {/* Best Sellers */}

      <div className="page-background">
        <motion.section
          className="best-seller-carousel"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <h2 className="section-heading">
            Best Sellers
          </h2>

          <div className="carousel-track">
            {[
              ...bestSellerSlides,
              ...bestSellerSlides,
            ].map((slide, index) => (
              <img
                src={slide}
                alt={`Best seller ${index + 1}`}
                key={index}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="collections"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <h2 className="section-heading">
            Shop By Collection
          </h2>

          <motion.div
            className="collection-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <motion.div
              className="collection-card"
              variants={staggerItem}
            >
              <img
                src={stylishPoodle}
                alt="Pet Clothing"
              />

              <h3>Pet Clothing</h3>

              <Link to="/products/category/clothing">
                <button>Shop Clothing</button>
              </Link>
            </motion.div>

            <motion.div
              className="collection-card"
              variants={staggerItem}
            >
              <img
                src={petBoots}
                alt="Paw Protectors"
              />

              <h3>Paw Protectors</h3>

              <Link to="/products/category/shoes">
                <button>Shop Shoes</button>
              </Link>
            </motion.div>

            <motion.div
              className="collection-card"
              variants={staggerItem}
            >
              <img
                src={petHarnesses}
                alt="Harnesses"
              />

              <h3>Harnesses</h3>

              <Link to="/products/category/harnesses">
                <button>Shop Harnesses</button>
              </Link>
            </motion.div>

            <motion.div
              className="collection-card"
              variants={staggerItem}
            >
              <img
                src={petBowls}
                alt="Pet Accessories"
              />

              <h3>Accessories</h3>

              <Link to="/products/category/accessories">
                <button>Shop Accessories</button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="why-shop"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <h2 className="section-heading">
            Why Pet Parents Love Us
          </h2>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>Secure Checkout</h3>
              <p>
                Shop confidently with secure encrypted
                checkout and trusted payment options.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💳</div>
              <h3>Pay in 4 With Shop Pay</h3>
              <p>
                Split eligible purchases into convenient
                payments through Shop Pay.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🚚</div>
              <h3>Fast U.S. Shipping</h3>
              <p>
                Orders are processed quickly and shipped
                from trusted U.S. partners.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">❤️</div>
              <h3>Made With Love</h3>
              <p>
                Every collection is selected with comfort,
                quality, and style in mind.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="promo-showcase"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <h2 className="section-heading">
            Shop What’s New & Watch Us On TikTok
          </h2>

          <div className="promo-grid">
            <div className="promo-card image-card">
              <h3>New Arrivals</h3>
              <img
                src={petCarriers}
                alt="New Arrivals"
              />
              <button>Shop New</button>
            </div>

            <div className="promo-card image-card">
              <h3>New Combo Deals</h3>
              <img
                src={newComboDeals}
                alt="New Combo Deals"
              />
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
        </motion.section>

        <motion.section
          className="vip-club"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <h2 className="section-heading">
            🐾 Join the VIP Pup Club
          </h2>

          <p>
            Be first to know about new arrivals,
            exclusive combo deals, special discounts,
            and adorable fashion drops.
          </p>

          <div className="vip-form">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>Join Now</button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </>
  );
}

export default Home;