import { Link, useParams } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { products } from "../data/products";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import "../styles/ProductDetail.css";
import { useCart } from "../context/CartContext";
import MiniCart from "../components/MiniCart";
import { useWishlist } from "../context/WishlistContext";
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

  const [justAdded, setJustAdded] = 
    useState(false);

  const [miniCartOpen, setMiniCartOpen] =
  useState(false);  

  const productImageRef = useRef(null);  

  const { addToCart } = useCart();

  const { 
    addToWishlist, 
    removeFromWishlist, 
    isInWishlist,
    toggleWishlist,
  } = useWishlist();

  const productIsWishlisted = product
  ? isInWishlist(product.id)
  : false;

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

function animateProductToCart() {
  const productImage = productImageRef.current;
  const cartLink = document.querySelector(
    ".navbar-cart-link"
  );

  if (!productImage || !cartLink) return;

  const imageRect =
    productImage.getBoundingClientRect();

  const cartRect =
    cartLink.getBoundingClientRect();

  const destinationX =
    cartRect.left +
    cartRect.width / 2 -
    imageRect.left -
    imageRect.width / 2;

  const destinationY =
    cartRect.top +
    cartRect.height / 2 -
    imageRect.top -
    imageRect.height / 2;

  const flyingWrapper =
    document.createElement("div");

  const flyingImage =
    productImage.cloneNode(true);

  flyingWrapper.className =
    "flying-product-wrapper";

  flyingImage.className =
    "flying-product-image";

  flyingWrapper.style.left =
    `${imageRect.left}px`;

  flyingWrapper.style.top =
    `${imageRect.top}px`;

  flyingWrapper.style.width =
    `${imageRect.width}px`;

  flyingWrapper.style.height =
    `${imageRect.height}px`;

  flyingWrapper.appendChild(flyingImage);
  document.body.appendChild(flyingWrapper);

  requestAnimationFrame(() => {
    flyingWrapper.style.transform =
      `translateX(${destinationX}px)`;

    flyingImage.style.transform =
      `translateY(${destinationY}px) scale(0.08)`;

    flyingImage.style.opacity = "0.15";
  });

  flyingWrapper.addEventListener(
    "transitionend",
    () => {
      flyingWrapper.remove();
    },
    { once: true }
  );
}

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

    animateProductToCart();

    setTimeout(() => {
      setMiniCartOpen(true);
    }, 700);

    addToCart(
      product,
      selectedColor,
      selectedSize,
      selectedImage
    );

      setJustAdded(true);

      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
  };

  function handleWishlistClick() {
    if (!product) return;

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

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
            {selectedImage && (
              <img
                ref={productImageRef}
                key={selectedImage}
                src={selectedImage}
                alt={
                  selectedVariant?.name ||
                  product.name
                }
                className="product-main-image"
              />
            )}
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
                        {variant.thumbnail && (
                          <img
                            src={variant.thumbnail}
                            alt={variant.name}
                          />
                        )}

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

            <div className="product-actions">
              <button
                type="button"
                className={`add-to-cart-button ${
                  justAdded ? "added" : ""
                }`}
                onClick={handleAddToCart}
              >
                {justAdded ? "✓ Added!" : "Add to Cart"}
              </button>

              <button
                type="button"
                className={
                  productIsWishlisted
                    ? "product-detail-wishlist active"
                    : "product-detail-wishlist"
                }
                onClick={handleWishlistClick}
                aria-label={
                  productIsWishlisted
                    ? `Remove ${product.name} from wishlist`
                    : `Add ${product.name} to wishlist`
                }
                aria-pressed={productIsWishlisted}
              >
                {productIsWishlisted ? (
                  <>
                    <FaHeart />
                    Saved to Wishlist
                  </>
                ) : (
                  <>
                    <FaRegHeart />
                    Add to Wishlist
                  </>
                )}
              </button>
            </div>
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

                  const relatedImage =
                    relatedProduct.recommendationImage ||
                    relatedProduct.image ||
                    null;

                  return (
                    <Link
                      key={relatedProduct.id}
                      to={`/products/${relatedProduct.id}`}
                      className="complete-look-card"
                    >
                      {relatedImage && (
                        <img
                          src={relatedImage}
                          alt={relatedProduct.name}
                        />
                      )}

                      <h3>{relatedProduct.name}</h3>

                      <p>{relatedProduct.price}</p>
                    </Link>
                  );
                }
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />

      <MiniCart
        isOpen={miniCartOpen}
        onClose={() => setMiniCartOpen(false)}
      />
    </>
  );
}

export default ProductDetail;