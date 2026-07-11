import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import "../styles/Checkout.css";

function Checkout() {
  return (
    <div className="checkout-layout">
      <CheckoutHeader />

      <main className="checkout-main">
        <h1>Checkout</h1>

        <section className="checkout-placeholder">
          <h2>Shipping Information</h2>

          <p>
            Your shipping form will be added here in the next step.
          </p>
        </section>
      </main>

      <CheckoutFooter />
    </div>
  );
}

export default Checkout;