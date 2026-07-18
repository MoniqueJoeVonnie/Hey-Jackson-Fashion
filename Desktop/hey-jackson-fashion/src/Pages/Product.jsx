import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { products } from "../data/products";
import "../styles/ProductPage.css";
import Footer from "../components/Footer";

function ProductPage() {
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
              className="product-card"
            >
              <div className="product-image-wrap">
                <button
                  type="button"
                  className="wishlist-btn"
                  onClick={(event) =>
                    event.preventDefault()
                  }
                  aria-label={`Add ${product.name} to favorites`}
                >
                  <FaRegHeart />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
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