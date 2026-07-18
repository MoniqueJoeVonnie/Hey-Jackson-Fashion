import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState, useEffect } from "react";
import "../styles/ProductDetail.css";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

function ProductDetail() {
  const { productId } = useParams();

  const product = products.find(
    (item) => item.id === productId
  );

  const [selectedColor, setSelectedColor] =
    useState("");

  const [selectedSize, setSelectedSize] =
    useState("");

  const [selectedImage, setSelectedImage] =
    useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    if (!product) return;

    setSelectedSize("");

    if (product.variants?.length) {
      setSelectedColor(product.variants[0].name);

      setSelectedImage(
        product.variants[0].gallery?.[0] ||
          product.image
      );
    } else {
      setSelectedColor("");
      setSelectedImage(product.image);
    }
  }, [product]);

  const selectedVariant =
    product?.variants?.find(
      (variant) =>
        variant.name === selectedColor
    );

  useEffect(() => {
    if (selectedVariant?.gallery?.length) {
      setSelectedImage(
        selectedVariant.gallery[0]
      );
    }
  }, [selectedVariant]);

  const handleAddToCart = () => {
    if (
      product.sizes?.length &&
      !selectedSize
    ) {
      alert(
        "Please select a size before adding this item to your cart."
      );

      return;
    }

    addToCart(
      product,
      selectedColor,
      selectedSize,
      selectedImage
    );
  };

  if (!product) {
    return (
      <>
        <main className="product-detail-page">
          <h1>Product Not Found</h1>

          <Link to="/products">
            Back to Products
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const categoryRoute =
    product.category?.toLowerCase() || "";

  const categoryTitle =
    {
      clothing: "Clothing",
      shoes: "Shoes",
      harnesses: "Harnesses & Leashes",
      accessories: "Accessories",
      "combo-deals": "Combo Deals",
    }[categoryRoute] || "Products";

  return (
    <>
      <main className="product-detail-page">
        <Link
          to={`/products/category/${categoryRoute}`}
          className="back-link"
        >
          ← Back to {categoryTitle}
        </Link>

        <div className="product-detail-layout">
          <div className="product-image-column">
            <img
              key={selectedImage}
              src={selectedImage}
              alt={
                selectedVariant?.name ||
                product.name
              }
              className="product-main-image"
            />
          </div>

          <div className="product-detail-info">
            <h1>{product.name}</h1>

            <h2>{product.price}</h2>

            <p>{product.description}</p>

            {product.variants?.length >
              0 && (
              <>
                <label>
                  Color:{" "}
                  {selectedVariant?.name}
                </label>

                <div className="color-options">
                  {product.variants.map(
                    (variant) => (
                      <button
                        key={variant.name}
                        type="button"
                        className={`color-button ${
                          selectedColor ===
                          variant.name
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedColor(
                            variant.name
                          )
                        }
                      >
                        <img
                          src={
                            variant.thumbnail
                          }
                          alt={variant.name}
                        />

                        <span>
                          {variant.name}
                        </span>
                      </button>
                    )
                  )}
                </div>
              </>
            )}

            {product.sizes?.length > 0 && (
              <>
                <label>Size</label>

                <div className="size-buttons">
                  {product.sizes.map(
                    (size) => (
                      <button
                        key={size}
                        type="button"
                        className={`size-btn ${
                          selectedSize === size
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedSize(size)
                        }
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
              </>
            )}

            <button
              type="button"
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {product.details && (
          <section className="product-details-section">
            <h2>{product.name}</h2>

            <p>
              {product.details.overview}
            </p>

            <hr />

            <h2>Why You'll Love It</h2>

            <ul>
              {product.details.features.map(
                (feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                )
              )}
            </ul>

            <hr />

            <h2>Product Details</h2>

            <ul>
              {product.details.specifications.map(
                (detail, index) => (
                  <li key={index}>
                    {detail}
                  </li>
                )
              )}
            </ul>
          </section>
        )}

        {product.completeTheLook && (
          <section className="complete-look-section">
            <h2>Complete the Look</h2>

            <div className="complete-look-grid">
              {product.completeTheLook.map(
                (relatedId) => {
                  const relatedProduct =
                    products.find(
                      (item) =>
                        item.id === relatedId
                    );

                  if (!relatedProduct) {
                    return null;
                  }

                  return (
                    <Link
                      key={relatedProduct.id}
                      to={`/products/${relatedProduct.id}`}
                      className="complete-look-card"
                    >
                      <img
                        src={
                          relatedProduct.recommendationImage ||
                          relatedProduct.image
                        }
                        alt={
                          relatedProduct.name
                        }
                      />

                      <h3>
                        {relatedProduct.name}
                      </h3>

                      <p>
                        {relatedProduct.price}
                      </p>
                    </Link>
                  );
                }
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default ProductDetail;