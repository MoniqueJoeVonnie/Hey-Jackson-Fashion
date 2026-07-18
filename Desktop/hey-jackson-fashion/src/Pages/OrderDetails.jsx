import { Link, useParams } from "react-router-dom";
import "../styles/OrderDetails.css";
import Footer from "../components/Footer";

function OrderDetails() {
  const { orderId } = useParams();

  let savedOrders = [];

  try {
    savedOrders = JSON.parse(
      localStorage.getItem("heyJacksonOrders") || "[]"
    );
  } catch (error) {
    console.error("Unable to load saved orders:", error);
    savedOrders = [];
  }

  const order = savedOrders.find(
    (savedOrder) => savedOrder.id === orderId
  );

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(amount) || 0);

  const getItemPrice = (item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : Number(
            String(item.price)
              .replace("$", "")
              .replace(",", "")
          );

    return price * (Number(item.quantity) || 1);
  };

  if (!order) {
    return (
      <main className="order-details-page">
        <section className="order-not-found">
          <div
            className="order-not-found-icon"
            aria-hidden="true"
          >
            🐾
          </div>

          <h1>Order Not Found</h1>

          <p>
            We could not locate this order in your saved
            order history.
          </p>

          <Link
            to="/orders"
            className="order-back-button"
          >
            Return to My Orders
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="order-details-page">
      <div className="order-details-container">
        <Link
          to="/orders"
          className="order-details-back-link"
        >
          ← Back to My Orders
        </Link>

        <header className="order-details-heading">
          <p>ORDER DETAILS</p>

          <h1>{order.id}</h1>

          <span>
            Placed on{" "}
            {order.formattedDate ||
              new Date(
                order.submittedAt
              ).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
          </span>
        </header>

        <section className="order-details-status-card">
          <div className="order-status-icon">
            ✓
          </div>

          <div className="order-status-copy">
            <span>Current Status</span>

            <strong>
              {order.status || "Order Submitted"}
            </strong>

            <p>
              Your order has been received and is being
              prepared.
            </p>
          </div>

          <div className="order-delivery-copy">
            <span>Estimated Delivery</span>

            <strong>
              {order.estimatedDelivery ||
                "Delivery estimate unavailable"}
            </strong>
          </div>
        </section>

        <div className="order-details-information-grid">
          <section className="order-information-card">
            <div className="order-card-heading">
              <h2>Shipping Address</h2>
            </div>

            {order.shippingAddress ? (
              <address>
                <strong>
                  {order.shippingAddress.firstName}{" "}
                  {order.shippingAddress.lastName}
                </strong>

                <span>
                  {order.shippingAddress.address}
                </span>

                {order.shippingAddress.apartment && (
                  <span>
                    {order.shippingAddress.apartment}
                  </span>
                )}

                <span>
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.state}{" "}
                  {order.shippingAddress.zipCode}
                </span>
              </address>
            ) : (
              <p className="order-information-unavailable">
                Shipping details were not saved with this
                order.
              </p>
            )}
          </section>

          <section className="order-information-card">
            <div className="order-card-heading">
              <h2>Payment Method</h2>
            </div>

            {order.paymentMethod ? (
              <div className="order-payment-method">
                <strong>
                  {order.paymentMethod.cardType ||
                    "Credit Card"}
                </strong>

                <span>
                  Ending in{" "}
                  {order.paymentMethod.lastFour || "••••"}
                </span>
              </div>
            ) : (
              <p className="order-information-unavailable">
                Payment details were not saved with this
                order.
              </p>
            )}
          </section>
        </div>

        <section className="order-details-card">
          <div className="order-card-heading">
            <h2>Items Ordered</h2>

            <span>
              {order.items?.reduce(
                (total, item) =>
                  total + (Number(item.quantity) || 1),
                0
              ) || 0}{" "}
              item(s)
            </span>
          </div>

          <div className="order-details-items">
            {order.items?.map((item) => (
              <div
                className="order-details-item"
                key={item.id}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="order-details-item-image"
                  />
                ) : (
                  <div className="order-details-image-placeholder">
                    No image
                  </div>
                )}

                <div className="order-details-item-info">
                  <h3>{item.name}</h3>

                  {(item.color || item.size) && (
                    <p>
                      {item.color}

                      {item.color && item.size && " • "}

                      {item.size &&
                        `Size ${item.size}`}
                    </p>
                  )}

                  <small>
                    Quantity: {item.quantity || 1}
                  </small>
                </div>

                <strong className="order-details-item-price">
                  {formatCurrency(getItemPrice(item))}
                </strong>
              </div>
            ))}
          </div>
        </section>

        <section className="order-details-card">
          <div className="order-card-heading">
            <h2>Order Summary</h2>
          </div>

          <div className="order-details-summary">
            <div>
              <span>Subtotal</span>

              <strong>
                {formatCurrency(order.subtotal)}
              </strong>
            </div>

            <div>
              <span>Shipping</span>

              <strong>
                {Number(order.shipping) === 0
                  ? "Free"
                  : formatCurrency(order.shipping)}
              </strong>
            </div>

            <div>
              <span>Tax</span>

              <strong>
                {formatCurrency(order.tax)}
              </strong>
            </div>

            <div className="order-details-total">
              <span>Total</span>

              <strong>
                {formatCurrency(order.total)}
              </strong>
            </div>
          </div>
        </section>

        <div className="order-details-actions">
          <Link
            to="/products"
            className="order-continue-shopping-button"
          >
            Continue Shopping
          </Link>

          <button
            type="button"
            className="order-receipt-button"
            onClick={() => window.print()}
          >
            Print Receipt
          </button>
        </div>
      </div>
    </main>
  );

    return (
    <>
      <Navbar />

      <main className="product-page">
        {/* existing product page content */}
      </main>

      <Footer />
    </>
  );
}

export default OrderDetails;