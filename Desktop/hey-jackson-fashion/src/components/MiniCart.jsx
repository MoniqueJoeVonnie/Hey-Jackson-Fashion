import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/MiniCart.css";

function MiniCart({ isOpen, onClose }) {
  const { cartItems, cartCount } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => {
      const numericPrice = Number(
        String(item.price).replace("$", "")
      );

      return (
        total +
        numericPrice * (item.quantity || 1)
      );
    },
    0
  );

  return (
    <>
      <button
        type="button"
        className={`mini-cart-overlay ${
          isOpen ? "open" : ""
        }`}
        onClick={onClose}
        aria-label="Close mini cart"
      />

      <aside
        className={`mini-cart-drawer ${
          isOpen ? "open" : ""
        }`}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
      >
        <div className="mini-cart-header">
          <div>
            <span className="mini-cart-eyebrow">
              Your Bag
            </span>

            <h2>
              Cart ({cartCount})
            </h2>
          </div>

          <button
            type="button"
            className="mini-cart-close"
            onClick={onClose}
            aria-label="Close mini cart"
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="mini-cart-empty">
            <span aria-hidden="true">🐾</span>
            <h3>Your cart is empty</h3>
            <p>
              Add something stylish for your pup.
            </p>
          </div>
        ) : (
          <>
            <div
                className={`mini-cart-items ${
                    isOpen ? "animate-in" : ""
                }`}
            >
              {cartItems.map((item, index) => (
                <article
                    className="mini-cart-item"
                    key={item.id}
                    style={{
                        animationDelay: `${0.14 + index * 0.06}s`,
                    }}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  )}

                  <div className="mini-cart-item-info">
                    <h3>{item.name}</h3>

                    {(item.color || item.size) && (
                      <p>
                        {[item.color, item.size]
                          .filter(Boolean)
                          .join(" • ")}
                      </p>
                    )}

                    <div className="mini-cart-item-bottom">
                      <span>
                        Qty: {item.quantity}
                      </span>

                      <strong>
                        {item.price}
                      </strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div
                className={`mini-cart-footer ${
                    isOpen ? "animate-in" : ""
                }`}
            >
              <div className="mini-cart-subtotal">
                <span>Subtotal</span>

                <strong>
                  ${subtotal.toFixed(2)}
                </strong>
              </div>

              <p>
                Shipping and taxes are calculated
                at checkout.
              </p>

              <Link
                to="/cart"
                className="mini-cart-view-cart"
                onClick={onClose}
              >
                View Cart
              </Link>

              <Link
                to="/checkout"
                className="mini-cart-checkout"
                onClick={onClose}
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default MiniCart;