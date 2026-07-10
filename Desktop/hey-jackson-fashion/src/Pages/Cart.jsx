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

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your shopping cart is empty.</p>

          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-layout">
            <section className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <Link to={`/products/${item.productId}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </Link>

                  <div className="cart-item-info">
                    <Link to={`/products/${item.productId}`}>
                      <h2>{item.name}</h2>
                    </Link>

                    <p className="cart-item-price">
                      {item.price}
                    </p>

                    {item.color && (
                      <p>
                        <strong>Color:</strong> {item.color}
                      </p>
                    )}

                    {item.size && (
                      <p>
                        <strong>Size:</strong> {item.size}
                      </p>
                    )}

                    <div className="quantity-controls">
                        <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label={`Decrease ${item.name} quantity`}
                        >
                            −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label={`Increase ${item.name} quantity`}
                        >
                            +
                        </button>
                        </div>
                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <p className="cart-line-total">
                    $
                    {(
                      Number(
                        String(item.price).replace("$", "")
                      ) * item.quantity
                    ).toFixed(2)}
                  </p>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>
                  {cartItems.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="summary-row subtotal-row">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>

              <p className="shipping-note">
                Shipping and taxes are calculated at checkout.
              </p>

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