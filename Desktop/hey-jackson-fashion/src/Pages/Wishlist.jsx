import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegTrashAlt,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useWishlist } from "../context/WishlistContext";
import "../styles/Wishlist.css";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  return (
    <>
      <Navbar />

      <main className="wishlist-page">
        <section className="wishlist-hero">
          <p className="wishlist-eyebrow">
            YOUR FAVORITES
          </p>

          <h1>Wishlist</h1>

          <p className="wishlist-description">
            Save the styles you love and return to them
            whenever you are ready.
          </p>
        </section>

        {wishlistItems.length > 0 ? (
          <section className="wishlist-content">
            <div className="wishlist-header">
              <div>
                <p className="wishlist-count">
                  {wishlistItems.length}{" "}
                  {wishlistItems.length === 1
                    ? "favorite"
                    : "favorites"}
                </p>

                <h2>Saved Products</h2>
              </div>

              <button
                type="button"
                className="wishlist-clear-button"
                onClick={clearWishlist}
              >
                Clear Wishlist
              </button>
            </div>

            <div className="wishlist-grid">
              {wishlistItems.map((product) => (
                <article
                  className="wishlist-card"
                  key={product.id}
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="wishlist-image-link"
                  >
                    <div className="wishlist-image-wrapper">
                      <img
                        src={
                          product.image ||
                          product.images?.[0]
                        }
                        alt={
                          product.name ||
                          product.title
                        }
                      />
                    </div>
                  </Link>

                  <div className="wishlist-card-content">
                    <p className="wishlist-category">
                      {product.category}
                    </p>

                    <Link
                      to={`/products/${product.id}`}
                      className="wishlist-product-name"
                    >
                      <h3>
                        {product.name ||
                          product.title}
                      </h3>
                    </Link>

                    <p className="wishlist-price">
                      {product.price}
                    </p>

                    <div className="wishlist-card-actions">
                      <Link
                        to={`/products/${product.id}`}
                        className="wishlist-view-button"
                      >
                        View Product
                      </Link>

                      <button
                        type="button"
                        className="wishlist-remove-button"
                        onClick={() =>
                          removeFromWishlist(product.id)
                        }
                        aria-label={`Remove ${
                          product.name ||
                          product.title
                        } from wishlist`}
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <section className="wishlist-empty-state">
            <div className="wishlist-empty-icon">
              <FaHeart />
            </div>

            <p className="wishlist-empty-eyebrow">
              NOTHING SAVED YET
            </p>

            <h2>Your wishlist is waiting</h2>

            <p>
              Tap the heart on any product you love and
              it will appear here.
            </p>

            <Link
              to="/products"
              className="wishlist-shop-button"
            >
              Explore Products
            </Link>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Wishlist;