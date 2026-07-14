import { useNavigate } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";
import "../styles/CheckoutReview.css";

function CheckoutReview() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  return (
  <div className="checkout-layout">
    <CheckoutHeader />

    <main className="checkout-main">

      <button
        className="return-link"
        onClick={() => navigate("/checkout")}
      >
        ← Return to Payment
      </button>

      <div className="checkout-progress">
        <div className="progress-step completed">
            <div className="progress-circle">✓</div>

            <div className="progress-label">
            <span>Shipping</span>
            <small>Delivery information</small>
            </div>
        </div>

        <div className="progress-line completed"></div>

        <div className="progress-step completed">
            <div className="progress-circle">✓</div>

            <div className="progress-label">
            <span>Payment</span>
            <small>Payment details</small>
            </div>
        </div>

        <section className="review-section">
            <div className="review-section-header">
                <h2>Items Ordered</h2>
            </div>

            {cartItems.map((item) => (
                <div
                key={item.id}
                className="review-product-card"
                >
                <img
                    src={item.image}
                    alt={item.name}
                    className="review-product-image"
                />

                <div className="review-product-details">
                    <h3>{item.name}</h3>

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

                    <p>
                    <strong>Quantity:</strong> {item.quantity}
                    </p>
                </div>

                <div className="review-product-price">
                    {item.price}
                </div>
                </div>
            ))}
            </section>

        <div className="progress-line completed"></div>

        <div className="progress-step active">
            <div className="progress-circle">3</div>

            <div className="progress-label">
            <span>Review</span>
            <small>Confirm your order</small>
            </div>
        </div>
        </div>

      <div className="checkout-content">

        <section className="checkout-card">

          <div className="review-header">
            <span>STEP 3 OF 3</span>

            <h1>Review Your Order</h1>

            <p>
              Please review your information before placing
              your order.
            </p>
          </div>

          {/* Shipping */}

          {/* Payment */}

          {/* Items Ordered */}

          {/* Buttons */}

        </section>

        <aside className="checkout-summary">
          {/* Reuse the existing summary */}
        </aside>

      </div>

    </main>

    <CheckoutFooter />
  </div>
);
}

export default CheckoutReview;