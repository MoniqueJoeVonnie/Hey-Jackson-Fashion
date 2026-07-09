import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/ProductPage.css";

function CategoryPage() {
  const { categoryName } = useParams();

  const categoryTitles = {
  clothing: "Pet Clothing",
  shoes: "Pet Shoes",
  harnesses: "Harnesses & Leashes",
  accessories: "Accessories",
  "combo-deals": "Combo Deals",
};

const pageTitle = categoryTitles[categoryName] || categoryName;

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="product-page">
        <Link to="/" className="back-link">
         ← Back to Home
        </Link>

      <h1>{pageTitle}</h1>

        <p className="product-count">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} available
        </p>

        <div className="product-grid">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="shop-product-card"
            key={product.id}
            >
            <div className="product-image-wrap">
                <button className="wishlist-btn">♡</button>

                <img src={product.image} alt={product.name} />
            </div>

            <div className="shop-product-info">
                <h3>{product.name}</h3>

                <p className="shop-product-category">
                    {pageTitle}
                </p>

                <p className="shop-product-price">
                    {product.price}
                </p>

                <p className="variation-note">
                    🐾 Colors & Sizes Available
                </p>

                {product.variants?.length > 0 && (
                <div className="color-swatches">
                    {product.variants.map((variant) => (
                    <span
                        key={variant.name}
                        className="color-swatch"
                        style={{ backgroundColor: variant.swatch }}
                        title={variant.name}
                    ></span>
                    ))}
                </div>
                )}

                {product.sizes?.length > 0 && (
                <p className="size-preview">
                    {product.sizes.join(" • ")}
                </p>
                )}

                <button className="quick-view-btn">
                    View Colors & Sizes →
                </button>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;