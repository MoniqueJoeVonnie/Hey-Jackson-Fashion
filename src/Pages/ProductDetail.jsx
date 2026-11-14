import { AnimatePresence, motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { products } from "../data/products";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "../styles/ProductDetail.css";
import { useCart } from "../context/CartContext";
import MiniCart from "../components/MiniCart";
import { useWishlist } from "../context/WishlistContext";
import Footer from "../components/Footer";
import PageMeta from "../components/PageMeta";
import CompleteTheLook from "../components/CompleteTheLook";
import RecentlyViewed from "../components/RecentlyViewed";

const RECENTLY_VIEWED_KEY =
  "heyJacksonRecentlyViewed";

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

  const [
    selectedGalleryIndex,
    setSelectedGalleryIndex,
  ] = useState(0);

  const [imageFading, setImageFading] =
    useState(false);

  const [, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  const [justAdded, setJustAdded] =
    useState(false);

  const [miniCartOpen, setMiniCartOpen] =
    useState(false);

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const productImageRef = useRef(null);

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const productIsWishlisted = product
    ? isInWishlist(product.id)
    : false;

  useEffect(() => {
    if (!product) return;

    setSelectedSize("");
    setSelectedGalleryIndex(0);
    setImageFading(false);
    setLightboxOpen(false);

    if (product.variants?.length) {
      const firstVariant = product.variants[0];

      setSelectedColor(firstVariant.name);

      setSelectedImage(
        firstVariant.gallery?.[0] ||
          product.image ||
          ""
      );
    } else {
      setSelectedColor("");
      setSelectedImage(product.image || "");
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;

    let storedProducts = [];

    try {
      const savedProducts = localStorage.getItem(
        RECENTLY_VIEWED_KEY
      );

      storedProducts = savedProducts
        ? JSON.parse(savedProducts)
        : [];

      if (!Array.isArray(storedProducts)) {
        storedProducts = [];
      }
    } catch (error) {
      console.error(
        "Unable to read recently viewed products:",
        error
      );

      storedProducts = [];
    }

    const updatedProducts = [
      product,
      ...storedProducts.filter(
        (item) => item.id !== product.id
      ),
    ].slice(0, 6);

    try {
      localStorage.setItem(
        RECENTLY_VIEWED_KEY,
        JSON.stringify(updatedProducts)
      );
    } catch (error) {
      console.error(
        "Unable to save recently viewed products:",
        error
      );
    }
  }, [product]);

  const selectedVariant =
    product?.variants?.find(
      (variant) =>
        variant.name === selectedColor
    );

  const galleryImages = useMemo(() => {
    if (selectedVariant?.gallery?.length) {
      return selectedVariant.gallery;
    }

    return product?.image
      ? [product.image]
      : [];
  }, [selectedVariant, product]);

  useEffect(() => {
    setSelectedGalleryIndex(0);

    if (selectedVariant?.gallery?.length) {
      setSelectedImage(
        selectedVariant.gallery[0]
      );

      return;
    }

    if (product?.image) {
      setSelectedImage(product.image);
    }
  }, [selectedVariant, product]);

  useEffect(() => {
    galleryImages.forEach((imageSource) => {
      const image = new Image();
      image.src = imageSource;
    });
  }, [galleryImages]);

  useEffect(() => {
    if (!lightboxOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setLightboxOpen(false);
        return;
      }

      if (
        event.key === "ArrowRight" &&
        galleryImages.length > 1
      ) {
        setSelectedGalleryIndex(
          (currentIndex) => {
            const nextIndex =
              (currentIndex + 1) %
              galleryImages.length;

            setSelectedImage(
              galleryImages[nextIndex]
            );

            return nextIndex;
          }
        );
      }

      if (
        event.key === "ArrowLeft" &&
        galleryImages.length > 1
      ) {
        setSelectedGalleryIndex(
          (currentIndex) => {
            const previousIndex =
              (
                currentIndex -
                1 +
                galleryImages.length
              ) % galleryImages.length;

            setSelectedImage(
              galleryImages[previousIndex]
            );

            return previousIndex;
          }
        );
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [lightboxOpen, galleryImages]);

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

  function handleGalleryImageChange(
    image,
    index
  ) {
    if (image === selectedImage) return;

    setImageFading(true);

    setTimeout(() => {
      setSelectedGalleryIndex(index);
      setSelectedImage(image);
      setImageFading(false);
    }, 180);
  }

  function handleImageZoomMove(event) {
    const bounds =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - bounds.left) /
        bounds.width) *
      100;

    const y =
      ((event.clientY - bounds.top) /
        bounds.height) *
      100;

    setZoomPosition({
      x,
      y,
    });
  }

  function navigateGallery(direction) {
    if (galleryImages.length <= 1) return;

    const nextIndex =
      (
        selectedGalleryIndex +
        direction +
        galleryImages.length
      ) % galleryImages.length;

    handleGalleryImageChange(
      galleryImages[nextIndex],
      nextIndex
    );
  }

  function handleLightboxDragEnd(
    event,
    dragInfo
  ) {
    const swipeThreshold = 80;

    if (dragInfo.offset.x <= -swipeThreshold) {
      navigateGallery(1);
      return;
    }

    if (dragInfo.offset.x >= swipeThreshold) {
      navigateGallery(-1);
    }
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
        <PageMeta
          title="Product Not Found | Hey Jackson! Fashion"
          description="The requested product could not be found. Browse the Hey Jackson! Fashion collection for luxury pet apparel and accessories."
        />

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
      <PageMeta
        title={`${product.name} | Hey Jackson! Fashion`}
        description={
          product.description ||
          `Shop ${product.name} from Hey Jackson! Fashion.`
        }
      />

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
              <button
                type="button"
                className="product-image-button"
                onClick={() =>
                  setLightboxOpen(true)
                }
                onMouseMove={handleImageZoomMove}
                onMouseLeave={() =>
                  setZoomPosition({
                    x: 50,
                    y: 50,
                  })
                }
                aria-label={`Enlarge ${product.name} image`}
              >
                <img
                  ref={productImageRef}
                  key={selectedImage}
                  src={selectedImage}
                  alt={
                    selectedVariant?.name ||
                    product.name
                  }
                  className={`product-main-image ${
                    imageFading
                      ? "fading"
                      : ""
                  }`}
                />

                <span className="product-image-zoom-hint">
                  Click to enlarge
                </span>
              </button>
            )}

            {galleryImages.length > 1 && (
              <div
                className="product-gallery-thumbnails"
                aria-label={`${product.name} image gallery`}
              >
                {galleryImages.map(
                  (image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      className={
                        selectedGalleryIndex ===
                        index
                          ? "product-gallery-thumbnail active"
                          : "product-gallery-thumbnail"
                      }
                      onClick={() =>
                        handleGalleryImageChange(
                          image,
                          index
                        )
                      }
                      aria-label={`View ${product.name} image ${
                        index + 1
                      }`}
                      aria-pressed={
                        selectedGalleryIndex ===
                        index
                      }
                    >
                      <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <div className="product-detail-info">
            <div className="product-detail-heading">
              <p className="product-detail-eyebrow">
                {categoryTitle}
              </p>

              <h1>{product.name}</h1>

              <div className="product-price-row">
                <h2>{product.price}</h2>

                <span className="product-stock-badge">
                  In Stock
                </span>
              </div>

              <p className="product-detail-description">
                {product.description}
              </p>
            </div>

            {product.variants?.length > 0 && (
              <>
                <label>
                  Color: {selectedVariant?.name}
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
                            src={
                              variant.thumbnail
                            }
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

            {product.id !== "new-york-yankees-mlb-pet-jersey" &&
              product.sizes?.length > 0 && (
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

          {product?.id === "new-york-yankees-mlb-pet-jersey" && (
            <p
              style={{
                margin: "12px 0",
                color: "#5b2c6f",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "1.6",
              }}
            >
              🐾 Choose Your Size at PayPal Checkout
              <span style={{ display: "block", fontWeight: "400" }}>
                Select your jersey size (XS–3XL) on the secure PayPal
                checkout page before completing your purchase.
              </span>
            </p>
          )}

           <div className="product-actions">
           {product?.id !== "new-york-yankees-mlb-pet-jersey" && (
            <button
              type="button"
              className={`add-to-cart-button ${
                justAdded ? "added" : ""
              }`}
              onClick={handleAddToCart}
            >
              {justAdded ? "✓ Added!" : "Add to Cart"}
            </button>
          )}


              {product?.id === "new-york-yankees-mlb-pet-jersey" && (
                <a
                  href="https://www.paypal.com/ncp/payment/QNHHJWMUV98NG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yankees-paypal-button"
                >
                  Buy Now with PayPal
                </a>
              )}


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
                aria-pressed={
                  productIsWishlisted
                }
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

          <div
            className="product-confidence-row"
            aria-label="Shopping benefits"
          >
            <div className="product-confidence-item">
              <span aria-hidden="true">
                🚚
              </span>

              <div>
                <strong>Fast Shipping</strong>
                <small>
                  Ships in 1–3 business days
                </small>
              </div>
            </div>

            <div className="product-confidence-item">
              <span aria-hidden="true">
                🔒
              </span>

              <div>
                <strong>
                  Secure Checkout
                </strong>
                <small>
                  Encrypted payment experience
                </small>
              </div>
            </div>

            <div className="product-confidence-item">
              <span aria-hidden="true">
                ✨
              </span>

              <div>
                <strong>Premium Style</strong>
                <small>
                  Designed for fashionable pets
                </small>
              </div>
            </div>
          </div>
        </div>

        {product.details && (
          <section className="product-details-section">
            <div className="product-details-intro">
              <p className="section-eyebrow">
                THE DETAILS
              </p>

              <h2 className="section-title">
                Designed for Style and Comfort
              </h2>

              <p className="product-details-overview">
                {product.details.overview}
              </p>
            </div>

            <div className="product-details-grid">
              <article className="product-detail-card">
                <span className="product-detail-card-icon">
                  ✨
                </span>

                <h3>Why You&apos;ll Love It</h3>

                <ul>
                  {product.details.features?.map(
                    (feature, index) => (
                      <li key={index}>
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </article>

              <article className="product-detail-card">
                <span className="product-detail-card-icon">
                  🐾
                </span>

                <h3>Product Details</h3>

                <ul>
                  {product.details.specifications?.map(
                    (detail, index) => (
                      <li key={index}>
                        {detail}
                      </li>
                    )
                  )}
                </ul>
              </article>
            </div>
          </section>
        )}

        <CompleteTheLook
          relatedProductIds={
            product.completeTheLook
          }
        />


        <RecentlyViewed
          currentProductId={product.id}
        />
      </main>

      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            className="product-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} enlarged image`}
            onClick={() =>
              setLightboxOpen(false)
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              className="product-lightbox-close"
              onClick={() =>
                setLightboxOpen(false)
              }
              aria-label="Close enlarged image"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0 }}
            >
              ×
            </motion.button>

            <motion.img
              src={selectedImage}
              alt={
                selectedVariant?.name ||
                product.name
              }
              className="product-lightbox-image"
              onClick={(event) =>
                event.stopPropagation()
              }
              drag={
                galleryImages.length > 1
                  ? "x"
                  : false
              }
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.22}
              onDragEnd={
                handleLightboxDragEnd
              }
              onMouseMove={
                handleImageZoomMove
              }
              onMouseLeave={() =>
                setZoomPosition({
                  x: 50,
                  y: 50,
                })
              }
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      <MiniCart
        isOpen={miniCartOpen}
        onClose={() =>
          setMiniCartOpen(false)
        }
      />
    </>
  );
}

export default ProductDetail;