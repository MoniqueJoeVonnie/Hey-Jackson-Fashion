import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
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

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🐾</div>

          <h2>Your shopping cart is empty</h2>

          <p>
            Looks like Jackson is still picking out the perfect
            outfit.
          </p>

          <Link to="/products" className="empty-cart-link">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-layout">
             <section className="cart-items">
            {cartItems.map((item) => {
                return (
                <article className="cart-item" key={item.id}>
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

                    <div className="cart-item-details">
                    <Link to={`/products/${item.productId}`}>
                        <h2>{item.name}</h2>
                    </Link>

                    <div className="cart-item-stock">
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

                    {(item.color || item.size) && (
                        <div className="cart-item-options">
                            {item.color && (
                            <div className="cart-option-group">
                                <span className="cart-option-label">Color</span>

                                <span className="cart-option-pill">
                                <span
                                    className="cart-color-dot"
                                    style={{
                                    backgroundColor: item.color.toLowerCase(),
                                    }}
                                    aria-hidden="true"
                                />

                                {item.color}
                                </span>
                            </div>
                            )}

                            {item.size && (
                            <div className="cart-option-group">
                                <span className="cart-option-label">Size</span>

                                <span className="cart-option-pill">
                                {item.size}
                                </span>
                            </div>
                            )}
                        </div>
                        )}

                    <p className="cart-item-price">
                        {item.price} each
                    </p>

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

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              {shipping === 0 && (
                <div className="free-shipping-badge">
                    <span aria-hidden="true">🚚</span>
                    Free Shipping Unlocked
                </div>
                )}

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

              <Link
                to="/products"
                className="continue-shopping-link"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>

          <button
            type="button"
            className="clear-cart-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </main>
  );
}

export default Cart;