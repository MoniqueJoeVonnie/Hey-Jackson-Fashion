import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";

import "../styles/Checkout.css";
import "../styles/OrderConfirmation.css";

function OrderConfirmation() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [orderNotFound, setOrderNotFound] =
    useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    try {
      const savedOrders = JSON.parse(
        localStorage.getItem("heyJacksonOrders") ||
          "[]"
      );

      const matchingOrder = Array.isArray(savedOrders)
        ? savedOrders.find(
            (savedOrder) =>
              savedOrder.id === orderId
          )
        : null;

      if (matchingOrder) {
        setOrder(matchingOrder);
        return;
      }

      const latestOrder = JSON.parse(
        localStorage.getItem(
          "heyJacksonLatestOrder"
        ) || "null"
      );

      if (latestOrder?.id === orderId) {
        setOrder(latestOrder);
        return;
      }

      setOrderNotFound(true);
    } catch (error) {
      console.error(
        "Unable to load order confirmation:",
        error
      );

      setOrderNotFound(true);
    }
  }, [orderId]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(amount) || 0);
  };

  const getItemPrice = (item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : Number(
            String(item.price)
              .replace("$", "")
              .replace(",", "")
          );

    return price * (item.quantity || 1);
  };

  const getFullName = () => {
    const address = order?.shippingAddress || {};

    if (address.fullName) {
      return address.fullName;
    }

    return [
      address.firstName,
      address.lastName,
    ]
      .filter(Boolean)
      .join(" ");
  };

  const getCityStateZip = () => {
    const address = order?.shippingAddress || {};

    return [
      address.city,
      [
        address.state,
        address.zipCode || address.zip,
      ]
        .filter(Boolean)
        .join(" "),
    ]
      .filter(Boolean)
      .join(", ");
  };

  if (orderNotFound) {
    return (
      <div className="checkout-layout">
        <CheckoutHeader />

        <main className="confirmation-page">
          <section className="confirmation-card confirmation-error">
            <h1>Order Not Found</h1>

            <p>
              We could not locate this order
              confirmation.
            </p>

            <div className="confirmation-actions">
              <Link
                to="/orders"
                className="confirmation-button secondary"
              >
                View Orders
              </Link>

              <Link
                to="/products"
                className="confirmation-button primary"
              >
                Continue Shopping
              </Link>
            </div>
          </section>
        </main>

        <CheckoutFooter />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="confirmation-loading">
        Loading order confirmation...
      </div>
    );
  }

  const shippingAddress =
    order.shippingAddress || {};

  const paymentMethod =
    order.paymentMethod || {};

  return (
    <div className="checkout-layout">
      <CheckoutHeader />

      <main className="confirmation-page">
        <div className="confirmation-progress">
          <div className="confirmation-progress-step">
            <span>✓</span>
            <p>Shipping</p>
          </div>

          <div className="confirmation-progress-line" />

          <div className="confirmation-progress-step">
            <span>✓</span>
            <p>Payment</p>
          </div>

          <div className="confirmation-progress-line" />

          <div className="confirmation-progress-step">
            <span>✓</span>
            <p>Review</p>
          </div>

          <div className="confirmation-progress-line" />

          <div className="confirmation-progress-step active">
            <span>✓</span>
            <p>Confirmation</p>
          </div>
        </div>

        <section className="confirmation-card">
          <div className="confirmation-heading">
            <div className="confirmation-checkmark">
              <svg
                viewBox="0 0 52 52"
                aria-hidden="true"
              >
                <circle
                  className="checkmark-circle"
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                />

                <path
                  className="checkmark-check"
                  fill="none"
                  d="M14 27l8 8 16-18"
                />
              </svg>
            </div>

            <p className="confirmation-status">
              Order Submitted
            </p>

            <h1>Thank You for Your Order!</h1>

            <p className="confirmation-message">
              Your order has been received and is
              being prepared for your stylish pup.
            </p>
          </div>

          <div className="confirmation-overview">
            <article>

            <section className="shipment-progress">
                <div className="shipment-progress-header">
                    <span>Order Status</span>
                    <strong>Preparing Your Order</strong>
                </div>

                <div className="shipment-timeline">
                    <div className="shipment-step completed">
                    <div className="shipment-dot">✓</div>

                    <div>
                        <h3>Order Received</h3>
                        <p>Your order was submitted successfully.</p>
                    </div>
                    </div>

                    <div className="shipment-line completed"></div>

                    <div className="shipment-step active">
                    <div className="shipment-dot">2</div>

                    <div>
                        <h3>Preparing</h3>
                        <p>Your items are being prepared for shipment.</p>
                    </div>
                    </div>

                    <div className="shipment-line"></div>

                    <div className="shipment-step">
                    <div className="shipment-dot">3</div>

                    <div>
                        <h3>Shipped</h3>
                        <p>Tracking information will appear here.</p>
                    </div>
                    </div>

                    <div className="shipment-line"></div>

                    <div className="shipment-step">
                    <div className="shipment-dot">4</div>

                    <div>
                        <h3>Delivered</h3>
                        <p>Estimated delivery: {order.estimatedDelivery}</p>
                    </div>
                    </div>
                </div>
                </section>
              <span>Order Number</span>
              <strong>{order.id}</strong>
            </article>

            <article>
              <span>Order Date</span>

              <strong>
                {order.formattedDate}
                {order.formattedTime
                  ? ` at ${order.formattedTime}`
                  : ""}
              </strong>
            </article>

            <article>
              <span>Estimated Delivery</span>
              <strong>
                {order.estimatedDelivery}
              </strong>
            </article>
          </div>

          <section className="confirmation-section">
            <h2>Items Ordered</h2>

            <div className="confirmation-items">
              {order.items?.map((item, index) => (
                <article
                  className="confirmation-item"
                  key={`${item.id}-${index}`}
                >
                  <div className="confirmation-item-image-wrapper">
                    {item.image || item.selectedImage || item.productImage ? (
                        <img
                            src={
                            item.image ||
                            item.selectedImage ||
                            item.productImage
                            }
                            alt={item.name}
                            className="confirmation-item-image"
                            onError={(event) => {
                            event.currentTarget.style.display = "none";
                            event.currentTarget
                                .nextElementSibling
                                ?.classList.remove("hidden");
                            }}
                        />
                        ) : null}

                            <div
                            className={`confirmation-image-placeholder ${
                                item.image ||
                                item.selectedImage ||
                                item.productImage
                                ? "hidden"
                                : ""
                            }`}
                            >
                            Image unavailable
                            </div>
                  </div>

                  <div className="confirmation-item-info">
                    <h3>{item.name}</h3>

                    <p>
                      {[item.color, item.size]
                        .filter(Boolean)
                        .join(" • ")}
                    </p>

                    <p>
                      Quantity: {item.quantity || 1}
                    </p>
                  </div>

                  <strong className="confirmation-item-price">
                    {formatCurrency(
                      getItemPrice(item)
                    )}
                  </strong>
                </article>
              ))}
            </div>
          </section>

          <div className="confirmation-details-grid">
            <section className="confirmation-detail">
              <h2>Shipping Address</h2>

              {getFullName() && (
                <p>{getFullName()}</p>
              )}

              {shippingAddress.address && (
                <p>{shippingAddress.address}</p>
              )}

              {shippingAddress.address1 && (
                <p>{shippingAddress.address1}</p>
              )}

              {shippingAddress.address2 && (
                <p>{shippingAddress.address2}</p>
              )}

              {getCityStateZip() && (
                <p>{getCityStateZip()}</p>
              )}

              {shippingAddress.email && (
                <p>{shippingAddress.email}</p>
              )}

              {shippingAddress.phone && (
                <p>{shippingAddress.phone}</p>
              )}
            </section>

            <section className="confirmation-detail">
              <h2>Payment Method</h2>

              <p>
                {paymentMethod.cardType ||
                  "Credit or Debit Card"}
              </p>

              {paymentMethod.lastFour && (
                <p>
                  Card ending in{" "}
                  {paymentMethod.lastFour}
                </p>
              )}
            </section>
          </div>

          <section className="confirmation-totals">
            <div>
              <span>Subtotal</span>
              <span>
                {formatCurrency(order.subtotal)}
              </span>
            </div>

            <div>
              <span>Shipping</span>
              <span>
                {Number(order.shipping) === 0
                  ? "Free"
                  : formatCurrency(
                      order.shipping
                    )}
              </span>
            </div>

            <div>
              <span>Estimated Tax</span>
              <span>
                {formatCurrency(
                    order.tax ?? order.estimatedTax ?? 0
                )}
              </span>
            </div>

            <div className="confirmation-total-row">
              <strong>Total</strong>
              <strong>
                {formatCurrency(order.total)}
              </strong>
            </div>
          </section>

          <p className="confirmation-email-note">
            A confirmation summary has been saved
            with your order history.
          </p>

          <div className="confirmation-actions">
            <button
              type="button"
              className="confirmation-button secondary"
              onClick={() => window.print()}
            >
              Print Receipt
            </button>

            <button
              type="button"
              className="confirmation-button secondary"
              onClick={() => navigate("/orders")}
            >
              View Orders
            </button>

            <button
              type="button"
              className="confirmation-button primary"
              onClick={() =>
                navigate("/products")
              }
            >
              Continue Shopping
            </button>
          </div>
        </section>
      </main>

      <CheckoutFooter />
    </div>
  );
}

export default OrderConfirmation;