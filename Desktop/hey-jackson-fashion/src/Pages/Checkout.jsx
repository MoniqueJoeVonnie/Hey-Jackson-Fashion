import { useState } from "react";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {
  const { cartItems, cartCount } = useCart();

  const [checkoutStep, setCheckoutStep] = useState(1);

  const subtotal = cartItems.reduce((total, item) => {
    const numericPrice = Number(
      String(item.price).replace(/[^0-9.]/g, "")
    );

    return total + numericPrice * item.quantity;
  }, 0);

  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 6.99;

  const estimatedTax = subtotal * 0.06;

  const total = subtotal + shipping + estimatedTax;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  return (
    <div className="checkout-layout">
      <CheckoutHeader />

      <main className="checkout-main">
        <div className="checkout-progress">
          <div
            className={`checkout-step ${
              checkoutStep === 1 ? "active" : ""
            } ${checkoutStep > 1 ? "completed" : ""}`}
          >
            <span className="checkout-step-number">
              {checkoutStep > 1 ? "✓" : "1"}
            </span>

            <div>
              <p className="checkout-step-label">Shipping</p>
              <small>Delivery information</small>
            </div>
          </div>

          <div
            className={`checkout-progress-line ${
              checkoutStep > 1 ? "completed" : ""
            }`}
          ></div>

          <div
            className={`checkout-step ${
              checkoutStep === 2 ? "active" : ""
            } ${checkoutStep > 2 ? "completed" : ""}`}
          >
            <span className="checkout-step-number">
              {checkoutStep > 2 ? "✓" : "2"}
            </span>

            <div>
              <p className="checkout-step-label">Payment</p>
              <small>Payment details</small>
            </div>
          </div>

          <div
            className={`checkout-progress-line ${
              checkoutStep > 2 ? "completed" : ""
            }`}
          ></div>

          <div
            className={`checkout-step ${
              checkoutStep === 3 ? "active" : ""
            }`}
          >
            <span className="checkout-step-number">3</span>

            <div>
              <p className="checkout-step-label">Review</p>
              <small>Confirm your order</small>
            </div>
          </div>
        </div>

        <h1>
          {checkoutStep === 1 && "Checkout"}
          {checkoutStep === 2 && "Payment"}
          {checkoutStep === 3 && "Review Order"}
        </h1>

        <div className="checkout-content">
          {checkoutStep === 1 && (
            <section className="shipping-card">
            <div className="shipping-card-heading">
              <div>
                <p className="checkout-eyebrow">Step 1 of 3</p>
                <h2>Shipping Information</h2>
              </div>

              <p className="required-note">
                <span>*</span> Required fields
              </p>
            </div>

            <form
              className="shipping-form"
              onSubmit={(event) => {
                event.preventDefault();
                setCheckoutStep(2);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className="form-row two-columns">
                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name <span>*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    Last Name <span>*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="form-row two-columns">
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">
                  Street Address <span>*</span>
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  placeholder="123 Main Street"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="apartment">
                  Apartment, Suite or Unit
                </label>

                <input
                  id="apartment"
                  name="apartment"
                  type="text"
                  autoComplete="address-line2"
                  placeholder="Apartment, suite or unit number"
                />
              </div>

              <div className="form-row location-row">
                <div className="form-group">
                  <label htmlFor="city">
                    City <span>*</span>
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="City"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">
                    State <span>*</span>
                  </label>

                  <select
                    id="state"
                    name="state"
                    autoComplete="address-level1"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select state
                    </option>
                    <option value="CT">Connecticut</option>
                    <option value="MA">Massachusetts</option>
                    <option value="NY">New York</option>
                    <option value="NJ">New Jersey</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode">
                    ZIP Code <span>*</span>
                  </label>

                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="06103"
                    required
                  />
                </div>
              </div>

              <label className="save-address-option">
                <input type="checkbox" name="saveAddress" />

                <span>
                  Save this address for a faster checkout next time
                </span>
              </label>

              <button type="submit" className="continue-payment-button">
                Continue to Payment
              </button>
            </form>
          </section>
          )}


                  {checkoutStep === 2 && (
                    <section className="payment-card">
                      <div className="payment-card-heading">
                        <div>
                          <p className="checkout-eyebrow">
                            Step 2 of 3
                          </p>

                          <h2>Payment Information</h2>
                        </div>

                        <p className="secure-payment-label">
                          🔒 Secure payment
                        </p>
                      </div>

                      <div className="payment-methods">
                        <button
                          type="button"
                          className="payment-method active"
                        >
                          <span className="payment-method-radio"></span>

                          <span>
                            <strong>Credit or Debit Card</strong>
                            <small>Visa, Mastercard and Amex</small>
                          </span>
                        </button>

                        <button
                          type="button"
                          className="payment-method"
                          disabled
                        >
                          <span className="payment-method-radio"></span>

                          <span>
                            <strong>PayPal</strong>
                            <small>Coming soon</small>
                          </span>
                        </button>
                      </div>

                      <form
                        className="payment-form"
                        onSubmit={(event) => {
                          event.preventDefault();
                          setCheckoutStep(3);

                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="form-group">
                          <label htmlFor="cardName">
                            Name on Card <span>*</span>
                          </label>

                          <input
                            id="cardName"
                            name="cardName"
                            type="text"
                            autoComplete="cc-name"
                            placeholder="Name as shown on card"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="cardNumber">
                            Card Number <span>*</span>
                          </label>

                          <div className="card-number-field">
                            <input
                              id="cardNumber"
                              name="cardNumber"
                              type="text"
                              inputMode="numeric"
                              autoComplete="cc-number"
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              required
                            />

                            <span className="card-field-icon">
                              💳
                            </span>
                          </div>
                        </div>

                        <div className="form-row two-columns">
                          <div className="form-group">
                            <label htmlFor="expiration">
                              Expiration Date <span>*</span>
                            </label>

                            <input
                              id="expiration"
                              name="expiration"
                              type="text"
                              inputMode="numeric"
                              autoComplete="cc-exp"
                              placeholder="MM / YY"
                              maxLength={7}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="securityCode">
                              Security Code <span>*</span>
                            </label>

                            <input
                              id="securityCode"
                              name="securityCode"
                              type="password"
                              inputMode="numeric"
                              autoComplete="cc-csc"
                              placeholder="CVV"
                              maxLength={4}
                              required
                            />
                          </div>
                        </div>

                        <label className="billing-address-option">
                          <input
                            type="checkbox"
                            name="billingMatchesShipping"
                            defaultChecked
                          />

                          <span>
                            Billing address is the same as the shipping
                            address
                          </span>
                        </label>

                        <div className="payment-security-box">
                          <span className="payment-security-icon">
                            🔒
                          </span>

                          <div>
                            <strong>
                              Your payment information is protected
                            </strong>

                            <p>
                              This form is currently a checkout-interface
                              demonstration. Real payment processing will be
                              connected through a secure payment provider.
                            </p>
                          </div>
                        </div>

                        <div className="checkout-action-buttons">
                          <button
                            type="button"
                            className="checkout-back-button"
                            onClick={() => {
                              setCheckoutStep(1);

                              window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            Back to Shipping
                          </button>

                          <button
                            type="submit"
                            className="continue-payment-button"
                          >
                            Continue to Review
                          </button>
                        </div>
                      </form>
                    </section>
                  )}

            <aside className="checkout-summary-card">
            {cartItems.length === 0 ? (
              <div className="summary-placeholder">
                <p>Your cart is currently empty.</p>
              </div>
            ) : (
              <div className="checkout-summary-items">
                {cartItems.map((item) => {
                  const numericPrice = Number(
                    String(item.price).replace(/[^0-9.]/g, "")
                  );

                  const itemTotal = numericPrice * item.quantity;

                  return (
                    <div className="checkout-summary-item" key={item.id}>
                      <div className="checkout-summary-image-wrap">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="checkout-summary-image"
                        />

                        <span className="checkout-summary-quantity">
                          {item.quantity}
                        </span>
                      </div>

                      <div className="checkout-summary-details">
                        <h3>{item.name}</h3>

                        {(item.color || item.size) && (
                          <p>
                            {item.color && <span>{item.color}</span>}

                            {item.color && item.size && (
                              <span className="summary-option-divider"> • </span>
                            )}

                            {item.size && <span>Size {item.size}</span>}
                          </p>
                        )}

                        <small>
                          {formatCurrency(numericPrice)} each
                        </small>
                      </div>

                      <strong className="checkout-summary-item-total">
                        {formatCurrency(itemTotal)}
                      </strong>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>
                Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"})
              </span>

              <strong>{formatCurrency(subtotal)}</strong>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <span>
                {shipping === 0
                  ? subtotal === 0
                    ? "Calculated next"
                    : "Free"
                  : formatCurrency(shipping)}
              </span>
            </div>

            <div className="summary-row">
              <span>Estimated Tax</span>
              <span>{formatCurrency(estimatedTax)}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>

            <div className="checkout-payment-trust">
            <p className="secure-checkout-note">
              Secure checkout. Your payment details are encrypted.
            </p>

            <div
              className="checkout-payment-icons"
              aria-label="Accepted payment methods"
            >
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>DISC</span>
              <span>PayPal</span>
            </div>
          </div>
                    </aside>
        </div>
      </main>

      <CheckoutFooter />
    </div>
  );
}

export default Checkout;