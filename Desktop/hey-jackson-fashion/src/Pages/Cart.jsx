import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import "../styles/cart.css";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const subtotal = cartItems.reduce((total, item) => {
    const numericPrice = Number(
      String(item.price).replace("$", "")
    );

    return total + numericPrice * item.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const shipping = subtotal >= 50 ? 0 : 6.99;
  const tax = subtotal * 0.06;
  const total = subtotal + shipping + tax;

  const freeShippingThreshold = 50;

  const amountUntilFreeShipping = Math.max(
    freeShippingThreshold - subtotal,
    0
  );

  const freeShippingProgress = Math.min(
  (subtotal / freeShippingThreshold) * 100,
  100
);

const cartProductIds = cartItems.map(
  (item) => item.productId
);

const recommendedProducts = products
  .filter(
    (product) =>
      !cartProductIds.includes(product.id)
  )
  .slice(0, 3);

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🐾</div>

            <span className="empty-cart-eyebrow">
                Nothing here yet
            </span>

        <h2>Your cart is waiting for something stylish</h2>

            <p>
                Browse our latest pet fashion and find the perfect look
                for your pup.
            </p>

          <Link
            to="/products"
            className="empty-cart-link"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-layout">
            <div className="cart-items-column">
              <section className="cart-items">
                {cartItems.map((item) => {
                  return (
                    <article
                      className="cart-item"
                      key={item.id}
                    >
                    <Link
                      to={`/products/${item.productId}`}
                      className="cart-image-link"
                    >
                      <Link
                        to={`/products/${item.productId}`}
                        className="cart-image-link"
                        >
                        <div className="cart-item-image">
                            <img
                            src={item.image}
                            alt={item.name}
                            />
                        </div>
                        </Link>      
                    </Link>

                    <div className="cart-item-details">
                      <Link
                        to={`/products/${item.productId}`}
                      >
                        <h2>{item.name}</h2>
                      </Link>

                      <p className="cart-item-price">
                        {item.price} each
                      </p>

                      <div className="cart-item-stock">
                        <div className="stock-status-row">
                          <span className="availability-item">
                            <span className="availability-check">
                              ✓
                            </span>
                            In Stock
                          </span>

                          <span className="availability-item">
                            Ships in 1–3 business days
                          </span>
                        </div>

                        <p className="estimated-delivery">
                          Estimated delivery: 3–5 business days
                        </p>
                      </div>

                      {(item.color || item.size) && (
                        <div className="cart-item-options">
                          {item.color && (
                            <div className="cart-option-group">
                              <span className="cart-option-label">
                                Color
                              </span>

                              <span className="cart-option-pill">
                                <span
                                  className="cart-color-dot"
                                  style={{
                                    backgroundColor:
                                      item.color.toLowerCase(),
                                  }}
                                  aria-hidden="true"
                                />

                                {item.color}
                              </span>
                            </div>
                          )}

                          {item.size && (
                            <div className="cart-option-group">
                              <span className="cart-option-label">
                                Size
                              </span>

                              <span className="cart-option-pill">
                                {item.size}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                      >
                        Remove Item
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>

            <button
              type="button"
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="shipping-progress">
              <div className="shipping-progress-message">
                <span aria-hidden="true">🚚</span>

                {shipping === 0 ? (
                  <strong>Free Shipping Unlocked</strong>
                ) : (
                  <span>
                    Add{" "}
                    <strong>
                      ${amountUntilFreeShipping.toFixed(2)}
                    </strong>{" "}
                    more for free shipping
                  </span>
                )}
              </div>

              <div
                className="shipping-progress-track"
                role="progressbar"
                aria-label="Free shipping progress"
                aria-valuemin={0}
                aria-valuemax={freeShippingThreshold}
                aria-valuenow={Math.min(
                  subtotal,
                  freeShippingThreshold
                )}
              >
                <div
                  className="shipping-progress-fill"
                  style={{
                    width: `${freeShippingProgress}%`,
                  }}
                />
              </div>
            </div>

            <div className="summary-row">
              <span>Quantity</span>
              <span>{totalQuantity}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <span>
                {shipping === 0
                  ? "Free Shipping"
                  : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="summary-row">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="summary-row total-row">
              <strong>Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button
              type="button"
              className="checkout-btn"
            >
              Checkout
            </button>

            <p className="secure-checkout-note">
              <span aria-hidden="true">🔒</span>
              Secure and encrypted checkout
            </p>

            <div
              className="payment-methods"
              aria-label="Accepted payment methods"
            >
              <span className="payment-method">Visa</span>
              <span className="payment-method">
                Mastercard
              </span>
              <span className="payment-method">Amex</span>
              <span className="payment-method">PayPal</span>
            </div>

            <Link
              to="/products"
              className="continue-shopping-link"
            >
              Shop New Arrivals
            </Link>
                    </aside>
        </div>

        <section className="cart-recommendations">
          <div className="cart-recommendations-heading">
            <span>Complete the Look</span>

            <h2>You May Also Like</h2>

            <p>
              Pair your pup’s selection with these stylish favorites.
            </p>
          </div>

          <div className="cart-recommendations-grid">
            {recommendedProducts.map((product) => (
              <article
                className="cart-recommendation-card"
                key={product.id}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="cart-recommendation-image"
                >
                  <img
                    src={
                      product.recommendationImage ||
                      product.image
                    }
                    alt={product.name}
                  />
                </Link>

                <div className="cart-recommendation-info">
                  <Link to={`/products/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>

                  <p>{product.price}</p>

                  <Link
                    to={`/products/${product.id}`}
                    className="cart-recommendation-link"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
      )}
    </main>
  );
}

export default Cart;