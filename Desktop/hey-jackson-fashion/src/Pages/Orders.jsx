import { Link } from "react-router-dom";
import "../styles/Orders.css";

function Orders() {
  let savedOrders = [];

  try {
    savedOrders = JSON.parse(
      localStorage.getItem("heyJacksonOrders") || "[]"
    );
  } catch (error) {
    console.error("Unable to load saved orders:", error);
    savedOrders = [];
  }

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(amount) || 0);

  return (
    <div className="orders-page">
      <main className="orders-main">
        <header className="orders-heading">
          <p>YOUR ACCOUNT</p>

          <h1>My Orders</h1>

          <span>
            Review your recent Hey Jackson! Fashion purchases.
          </span>
        </header>

        {savedOrders.length === 0 ? (
          <section className="orders-empty-card">
            <div
              className="orders-empty-icon"
              aria-hidden="true"
            >
              🐾
            </div>

            <h2>No Orders Yet</h2>

            <p>
              Your completed orders will appear here after
              checkout.
            </p>

            <Link
              to="/products"
              className="orders-shop-button"
            >
              Start Shopping
            </Link>
          </section>
        ) : (
          <div className="orders-list">
            {savedOrders.map((order) => (
              <article
                className="order-history-card"
                key={order.id}
              >
                <div className="order-history-header">
                  <div>
                    <span>Order Number</span>
                    <strong>{order.id}</strong>
                  </div>

                  <div>
                    <span>Order Date</span>
                    <strong>
                      {order.formattedDate ||
                        new Date(
                          order.submittedAt
                        ).toLocaleDateString()}
                    </strong>
                  </div>

                  <div>
                    <span>Total</span>
                    <strong>
                      {formatCurrency(order.total)}
                    </strong>
                  </div>

                  <span className="order-status">
                    {order.status || "Order Submitted"}
                  </span>
                </div>

                <div className="order-history-items">
                  {order.items?.map((item) => (
                    <div
                      className="order-history-item"
                      key={item.id}
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      ) : (
                        <div className="order-image-placeholder">
                          No image
                        </div>
                      )}

                      <div>
                        <h2>{item.name}</h2>

                        {(item.color || item.size) && (
                          <p>
                            {item.color}

                            {item.color &&
                              item.size &&
                              " • "}

                            {item.size &&
                              `Size ${item.size}`}
                          </p>
                        )}

                        <small>
                          Quantity: {item.quantity}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-history-footer">
                  <div>
                    <span>Estimated Delivery</span>

                    <strong>
                      {order.estimatedDelivery ||
                        "Delivery estimate unavailable"}
                    </strong>
                  </div>

                  <Link
                    to={`/orders/${order.id}`}
                    className="view-order-button"
                  >
                    View Order
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Orders;