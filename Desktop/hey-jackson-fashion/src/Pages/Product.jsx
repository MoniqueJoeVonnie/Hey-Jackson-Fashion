import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { products } from "../data/products";
import "../styles/ProductPage.css";


function ProductPage() {
  return (
    <div className="product-page">
      <h1>Shop Products</h1>

      <p className="product-count">{products.length} product available</p>

      <div className="product-grid">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="product-card"
            key={product.id}
          >
            <div className="product-image-wrap">
              <button
                className="wishlist-btn"
                type="button"
                onClick={(e) => e.preventDefault()}
                aria-label="Add to favorites"
              >
                <FaRegHeart />
              </button>

              <img src={product.image} alt={product.name} />
            </div>

            <div className="shop-product-info">
              <h3>{product.name}</h3>

              <p className="shop-product-category">
                {product.category}
              </p>

              <p className="shop-product-price">{product.price}</p>

              <p className="variation-note">
                🐾 Colors & sizes available
              </p>

              <button className="quick-view-btn" type="button">
                View Colors & Sizes →
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;