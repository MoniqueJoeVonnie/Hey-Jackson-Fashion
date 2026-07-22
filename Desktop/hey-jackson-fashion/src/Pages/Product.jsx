import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { products } from "../data/products";
import "../styles/ProductPage.css";
import Footer from "../components/Footer";
import { useWishlist } from "../context/WishlistContext";
import FadeImage from "../components/FadeImage";


function ProductPage() {
  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

    return (
      <>
        <main className="product-page">
          <h1>Shop Products</h1>

          <p className="product-count">
            {products.length} product
            {products.length !== 1 ? "s" : ""} available
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="shop-product-card"
              >
                <div className="product-image-wrap">
                  <button
                    type="button"
                    className={
                      isInWishlist(product.id)
                        ? "wishlist-btn active"
                        : "wishlist-btn"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      toggleWishlist(product);
                    }}
                    aria-label={
                      isInWishlist(product.id)
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    aria-pressed={isInWishlist(product.id)}
                  >
                    {isInWishlist(product.id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>

                 <FadeImage
                  src={product.image}
                  alt={product.name}
                  wrapperClassName="product-image-wrap"
                />
                </div>

                <div className="shop-product-info">
                  <h3>{product.name}</h3>

                  <p className="shop-product-category">
                    {product.category}
                  </p>

                  <p className="shop-product-price">
                    {product.price}
                  </p>

                  <p className="variation-note">
                    🐾 Colors & Sizes Available
                  </p>

                  <span className="quick-view-btn">
                    View Colors & Sizes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <Footer />
      </>
    );
  }

export default ProductPage;