import { useNavigate } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";
import "../styles/CheckoutReview.css";

function CheckoutReview() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  function handlePlaceOrder() {
  if (cartItems.length === 0) {
    return;
  }

  const subtotal = cartItems.reduce((total, item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : Number(
            String(item.price)
              .replace("$", "")
              .replace(",", "")
          );

    return total + price * item.quantity;
  }, 0);

  const shipping = subtotal >= 50 ? 0 : 6.99;
  const tax = subtotal * 0.06;
  const total = subtotal + shipping + tax;

  const today = new Date();

  const deliveryStart = new Date(today);
  deliveryStart.setDate(today.getDate() + 5);

  const deliveryEnd = new Date(today);
  deliveryEnd.setDate(today.getDate() + 8);

  let shippingAddress = {};
  let savedPayment = {};

  try {
    shippingAddress = JSON.parse(
      localStorage.getItem("heyJacksonShipping") || "{}"
    );
  } catch (error) {
    console.error(
      "Unable to load shipping information:",
      error
    );
  }

  try {
    savedPayment = JSON.parse(
      localStorage.getItem("heyJacksonPayment") || "{}"
    );
  } catch (error) {
    console.error(
      "Unable to load payment information:",
      error
    );
  }

  const paymentMethod = {
    cardType:
      savedPayment.cardType ||
      savedPayment.type ||
      "Credit or Debit Card",

    lastFour:
      savedPayment.lastFour ||
      savedPayment.cardNumber
        ?.replace(/\D/g, "")
        .slice(-4) ||
      "",
  };

  const orderId = `HJF-${today
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", "")}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;

  const newOrder = {
    id: orderId,

    submittedAt: today.toISOString(),

    formattedDate: today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),

    formattedTime: today.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }),

    estimatedDelivery: `${deliveryStart.toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
      }
    )} – ${deliveryEnd.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    })}`,

    status: "Order Submitted",
    items: [...cartItems],
    shippingAddress,
    paymentMethod,
    subtotal,
    shipping,
    tax,
    total,
  };

  let savedOrders = [];

  try {
    const storedOrders = JSON.parse(
      localStorage.getItem("heyJacksonOrders") || "[]"
    );

    savedOrders = Array.isArray(storedOrders)
      ? storedOrders
      : [];
  } catch (error) {
    console.error(
      "Could not read saved orders:",
      error
    );
  }

  localStorage.setItem(
    "heyJacksonOrders",
    JSON.stringify([newOrder, ...savedOrders])
  );

  localStorage.setItem(
    "heyJacksonLatestOrder",
    JSON.stringify(newOrder)
  );

  clearCart();

  navigate(`/checkout/confirmation/${orderId}`);
}

  return (
  <div className="checkout-layout">
    <CheckoutHeader />

    <main className="checkout-main">

      <button
        className="return-link"
        onClick={() => navigate("/checkout/payment")}
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

          <div className="review-actions">
            <button
              type="button"
              className="place-order-button"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>

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