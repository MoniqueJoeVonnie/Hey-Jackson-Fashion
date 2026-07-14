import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {
  const {
    cartItems,
    cartCount,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    saveAddress: false,
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiration: "",
    securityCode: "",
    billingMatchesShipping: true,
  });

  const [shippingErrors, setShippingErrors] = useState({});
  const [shippingTouched, setShippingTouched] = useState({});

  const formatPhoneNumber = (value) => {
  const numbers = value.replace(/\D/g, "").slice(0, 10);

    if (numbers.length <= 3) {
      return numbers;
    }

    if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    }

    return `(${numbers.slice(0, 3)}) ${numbers.slice(
      3,
      6
    )}-${numbers.slice(6)}`;
  };

  const validateShippingInfo = (values) => {
    const errors = {};

    if (!values.firstName.trim()) {
      errors.firstName = "Please enter your first name.";
    }

    if (!values.lastName.trim()) {
      errors.lastName = "Please enter your last name.";
    }

    if (!values.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      errors.email = "Please enter a valid email address.";
    }

    const phoneDigits = values.phone.replace(/\D/g, "");

    if (values.phone && phoneDigits.length !== 10) {
      errors.phone = "Please enter a 10-digit phone number.";
    }

    if (!values.address.trim()) {
      errors.address = "Please enter your street address.";
    }

    if (!values.city.trim()) {
      errors.city = "Please enter your city.";
    }

    if (!values.state) {
      errors.state = "Please select your state.";
    }

    if (!values.zipCode.trim()) {
      errors.zipCode = "Please enter your ZIP code.";
    } else if (!/^\d{5}$/.test(values.zipCode)) {
      errors.zipCode = "ZIP code must contain 5 digits.";
    }

    return errors;
  };

  const handleShippingChange = (event) => {
    const { name, value, type, checked } = event.target;

    let updatedValue = type === "checkbox" ? checked : value;

    if (name === "phone") {
      updatedValue = formatPhoneNumber(value);
    }

    if (name === "zipCode") {
      updatedValue = value.replace(/\D/g, "").slice(0, 5);
    }

    const updatedShippingInfo = {
      ...shippingInfo,
      [name]: updatedValue,
    };

    setShippingInfo(updatedShippingInfo);

    if (shippingTouched[name]) {
      const updatedErrors =
        validateShippingInfo(updatedShippingInfo);

      setShippingErrors(updatedErrors);
    }
  };

  const handleShippingBlur = (event) => {
    const { name } = event.target;

    setShippingTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));

    setShippingErrors(validateShippingInfo(shippingInfo));
  };

  const handleShippingSubmit = (event) => {
  event.preventDefault();

  const errors = validateShippingInfo(shippingInfo);

  setShippingErrors(errors);

  setShippingTouched({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    address: true,
    apartment: true,
    city: true,
    state: true,
    zipCode: true,
  });

  if (Object.keys(errors).length > 0) {
    const firstErrorField = Object.keys(errors)[0];

    document.getElementById(firstErrorField)?.focus();

    return;
  }

  if (shippingInfo.saveAddress) {
    localStorage.setItem(
      "heyJacksonShippingInfo",
      JSON.stringify(shippingInfo)
    );
  }

  setCheckoutStep(2);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handlePaymentChange = (event) => {
  const { name, value, type, checked } = event.target;

  let updatedValue =
    type === "checkbox" ? checked : value;

  if (name === "cardNumber") {
    const numbers = value
      .replace(/\D/g, "")
      .slice(0, 16);

    updatedValue = numbers.replace(
      /(\d{4})(?=\d)/g,
      "$1 "
    );
  }

  if (name === "expiration") {
    const numbers = value
      .replace(/\D/g, "")
      .slice(0, 4);

    updatedValue =
      numbers.length > 2
        ? `${numbers.slice(0, 2)} / ${numbers.slice(2)}`
        : numbers;
  }

  if (name === "securityCode") {
    updatedValue = value
      .replace(/\D/g, "")
      .slice(0, 4);
  }

  setPaymentInfo((currentPaymentInfo) => ({
    ...currentPaymentInfo,
    [name]: updatedValue,
  }));
};


  const generateOrderNumber = () => {
    const year = new Date().getFullYear();

    const randomCode = Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase();

    return `HJ-${year}-${randomCode}`;
  };

  const formatOrderDate = (date) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(date);

  const getEstimatedDelivery = () => {
    const startDate = new Date();
    const endDate = new Date();

    startDate.setDate(startDate.getDate() + 5);
    endDate.setDate(endDate.getDate() + 8);

    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    });

    return `${formatter.format(startDate)} – ${formatter.format(
      endDate
    )}`;
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (isProcessingOrder) {
      return;
    }

    setIsProcessingOrder(true);

    setTimeout(() => {
      const submittedAt = new Date();

      const order = {
        id: generateOrderNumber(),
        submittedAt: submittedAt.toISOString(),
        formattedDate: formatOrderDate(submittedAt),
        estimatedDelivery: getEstimatedDelivery(),

        items: cartItems.map((item) => ({
          id: item.id,
          productId: item.productId,
          name: item.name,
          image: item.image,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
          price: item.price,
        })),

        shippingAddress: {
          firstName: shippingInfo.firstName,
          lastName: shippingInfo.lastName,
          address: shippingInfo.address,
          apartment: shippingInfo.apartment,
          city: shippingInfo.city,
          state: shippingInfo.state,
          zipCode: shippingInfo.zipCode,
          email: shippingInfo.email,
          phone: shippingInfo.phone,
        },

        payment: {
          method: "Credit or Debit Card",
          lastFour: paymentInfo.cardNumber
            .replace(/\D/g, "")
            .slice(-4),
          billingMatchesShipping:
            paymentInfo.billingMatchesShipping,
        },

        subtotal,
        shipping,
        estimatedTax,
        total,
        itemCount: cartCount,
        status: "Order Submitted",
      };

      setCompletedOrder(order);

      const savedOrders = JSON.parse(
        localStorage.getItem("heyJacksonOrders") || "[]"
      );

      localStorage.setItem(
        "heyJacksonOrders",
        JSON.stringify([order, ...savedOrders])
      );

      localStorage.setItem(
        "heyJacksonLatestOrder",
        JSON.stringify(order)
      );

      setOrderSubmitted(true);

      clearCart({
        showNotification: false,
      });

      setIsProcessingOrder(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 900);
  };

  const subtotal = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(
      item.price.replace(/[$,]/g, "")
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
        <Link to="/cart" className="return-to-cart-link">
          <span aria-hidden="true">←</span>
          Return to Cart
        </Link>

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
        {checkoutStep === 3 &&
          !orderSubmitted &&
          "Review Order"}
        {checkoutStep === 3 &&
          orderSubmitted &&
          "Order Confirmation"}
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
              onSubmit={handleShippingSubmit}
              noValidate
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
                    value={shippingInfo.firstName}
                    onChange={handleShippingChange}
                    onBlur={handleShippingBlur}
                    className={
                      shippingTouched.firstName &&
                      shippingErrors.firstName
                        ? "input-error"
                        : ""
                    }
                    aria-invalid={
                      Boolean(
                        shippingTouched.firstName &&
                          shippingErrors.firstName
                      )
                    }
                    aria-describedby={
                      shippingErrors.firstName
                        ? "firstName-error"
                        : undefined
                    }
                  />

                  {shippingTouched.firstName &&
                    shippingErrors.firstName && (
                      <p
                        id="firstName-error"
                        className="form-error-message"
                        role="alert"
                      >
                        {shippingErrors.firstName}
                      </p>
                    )}
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
                    value={shippingInfo.lastName}
                    onChange={handleShippingChange}
                    onBlur={handleShippingBlur}
                    className={
                      shippingTouched.lastName &&
                      shippingErrors.lastName
                        ? "input-error"
                        : ""
                    }
                    aria-invalid={
                      Boolean(
                        shippingTouched.lastName &&
                          shippingErrors.lastName
                      )
                    }
                    aria-describedby={
                      shippingErrors.lastName
                        ? "lastName-error"
                        : undefined
                    }
                  />

                  {shippingTouched.lastName &&
                    shippingErrors.lastName && (
                      <p
                        id="lastName-error"
                        className="form-error-message"
                        role="alert"
                      >
                        {shippingErrors.lastName}
                      </p>
                    )}
                </div>
              </div>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={shippingInfo.email}
                onChange={handleShippingChange}
                onBlur={handleShippingBlur}
                className={
                  shippingTouched.email && shippingErrors.email
                    ? "input-error"
                    : ""
                }
                aria-invalid={
                  Boolean(
                    shippingTouched.email && shippingErrors.email
                  )
                }
                aria-describedby={
                  shippingErrors.email ? "email-error" : undefined
                }
              />

              {shippingTouched.email && shippingErrors.email && (
                <p
                  id="email-error"
                  className="form-error-message"
                  role="alert"
                >
                  {shippingErrors.email}
                </p>
              )}

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  value={shippingInfo.phone}
                  onChange={handleShippingChange}
                  onBlur={handleShippingBlur}
                  className={
                    shippingTouched.phone && shippingErrors.phone
                      ? "input-error"
                      : ""
                  }
                  aria-invalid={
                    Boolean(
                      shippingTouched.phone && shippingErrors.phone
                    )
                  }
                  aria-describedby={
                    shippingErrors.phone ? "phone-error" : undefined
                  }
                />

                {shippingTouched.phone && shippingErrors.phone && (
                  <p
                    id="phone-error"
                    className="form-error-message"
                    role="alert"
                  >
                    {shippingErrors.phone}
                  </p>
                )}

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
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  onBlur={handleShippingBlur}
                  className={
                    shippingTouched.address &&
                    shippingErrors.address
                      ? "input-error"
                      : ""
                  }
                  aria-invalid={
                    Boolean(
                      shippingTouched.address &&
                        shippingErrors.address
                    )
                  }
                  aria-describedby={
                    shippingErrors.address
                      ? "address-error"
                      : undefined
                  }
                />

                {shippingTouched.address &&
                  shippingErrors.address && (
                    <p
                      id="address-error"
                      className="form-error-message"
                      role="alert"
                    >
                      {shippingErrors.address}
                    </p>
                  )}

                <input
                  id="apartment"
                  name="apartment"
                  type="text"
                  autoComplete="address-line2"
                  placeholder="Apartment, suite or unit number"
                  value={shippingInfo.apartment}
                  onChange={handleShippingChange}
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
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                    onBlur={handleShippingBlur}
                    className={
                      shippingTouched.city && shippingErrors.city
                        ? "input-error"
                        : ""
                    }
                    aria-invalid={
                      Boolean(
                        shippingTouched.city && shippingErrors.city
                      )
                    }
                    aria-describedby={
                      shippingErrors.city ? "city-error" : undefined
                    }
                  />

                  {shippingTouched.city && shippingErrors.city && (
                    <p
                      id="city-error"
                      className="form-error-message"
                      role="alert"
                    >
                      {shippingErrors.city}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="state">
                    State <span>*</span>
                  </label>

                  <select
                    id="state"
                    name="state"
                    autoComplete="address-level1"
                    value={shippingInfo.state}
                    onChange={handleShippingChange}
                    onBlur={handleShippingBlur}
                    className={
                      shippingTouched.state && shippingErrors.state
                        ? "input-error"
                        : ""
                    }
                    aria-invalid={
                      Boolean(
                        shippingTouched.state && shippingErrors.state
                      )
                    }
                    aria-describedby={
                      shippingErrors.state ? "state-error" : undefined
                    }
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

                  {shippingTouched.state && shippingErrors.state && (
                    <p
                      id="state-error"
                      className="form-error-message"
                      role="alert"
                    >
                      {shippingErrors.state}
                    </p>
                  )}
                </div>

                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="06103"
                  maxLength={5}
                  value={shippingInfo.zipCode}
                  onChange={handleShippingChange}
                  onBlur={handleShippingBlur}
                  className={
                    shippingTouched.zipCode &&
                    shippingErrors.zipCode
                      ? "input-error"
                      : ""
                  }
                  aria-invalid={
                    Boolean(
                      shippingTouched.zipCode &&
                        shippingErrors.zipCode
                    )
                  }
                  aria-describedby={
                    shippingErrors.zipCode
                      ? "zipCode-error"
                      : undefined
                  }
                />

                {shippingTouched.zipCode &&
                  shippingErrors.zipCode && (
                    <p
                      id="zipCode-error"
                      className="form-error-message"
                      role="alert"
                    >
                      {shippingErrors.zipCode}
                    </p>
                  )}
              </div>

              <label className="save-address-option">
                <input
                  type="checkbox"
                  name="saveAddress"
                  checked={shippingInfo.saveAddress}
                  onChange={handleShippingChange}
                />

                <span>
                  Save this address for a faster checkout next time
                </span>
              </label>

              <button type="submit" className="continue-payment-button">
                <span>Continue to Payment</span>
                <span
                  className="continue-button-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
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
                            value={paymentInfo.cardName}
                            onChange={handlePaymentChange}
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
                              value={paymentInfo.cardNumber}
                              onChange={handlePaymentChange}
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
                              value={paymentInfo.expiration}
                              onChange={handlePaymentChange}
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
                              value={paymentInfo.securityCode}
                              onChange={handlePaymentChange}
                              required
                            />
                          </div>
                        </div>

                        <label className="billing-address-option">
                          <input
                            type="checkbox"
                            name="billingMatchesShipping"
                            checked={paymentInfo.billingMatchesShipping}
                            onChange={handlePaymentChange}
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
                            <span>Continue to Review</span>
                            <span
                              className="continue-button-arrow"
                              aria-hidden="true"
                            >
                              →
                            </span>
                          </button>
                        </div>
                      </form>
                    </section>
                  )}
            {checkoutStep === 3 && !orderSubmitted && (
              <section className="review-card">
                <div className="review-card-heading">
                  <div>
                    <p className="checkout-eyebrow">
                      Step 3 of 3
                    </p>

                    <h2>Review Your Order</h2>
                  </div>

                  <p className="secure-payment-label">
                    🔒 Secure checkout
                  </p>
                </div>

                <div className="review-section">
                  <div className="review-section-heading">
                    <h3>Shipping Information</h3>

                    <button
                      type="button"
                      className="review-edit-button"
                      onClick={() => {
                        setCheckoutStep(1);

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Edit
                    </button>
                  </div>

                  <p>
                    {shippingInfo.firstName}{" "}
                    {shippingInfo.lastName}
                  </p>

                  <p>{shippingInfo.address}</p>

                  {shippingInfo.apartment && (
                    <p>{shippingInfo.apartment}</p>
                  )}

                  <p>
                    {shippingInfo.city}, {shippingInfo.state}{" "}
                    {shippingInfo.zipCode}
                  </p>

                  <p>{shippingInfo.email}</p>

                  {shippingInfo.phone && (
                    <p>{shippingInfo.phone}</p>
                  )}
                </div>

                <div className="review-section">
                  <div className="review-section-heading">
                    <h3>Payment Information</h3>

                    <button
                      type="button"
                      className="review-edit-button"
                      onClick={() => {
                        setCheckoutStep(2);

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Edit
                    </button>
                  </div>

                  <p>
                    Card ending in{" "}
                    {paymentInfo.cardNumber
                      .replace(/\s/g, "")
                      .slice(-4)}
                  </p>

                  <p>
                    Expiration: {paymentInfo.expiration}
                  </p>

                  <p>
                    Billing address{" "}
                    {paymentInfo.billingMatchesShipping
                      ? "matches shipping address"
                      : "is different from shipping address"}
                  </p>
                </div>

                <div className="review-section review-items-section">
                  <div className="review-section-heading">
                    <h3>Items Ordered</h3>

                    <button
                      type="button"
                      className="review-edit-button"
                      onClick={() => {
                        window.location.href = "/cart";
                      }}
                    >
                      Edit Cart
                    </button>
                  </div>

                  <div className="review-items-list">
                    {cartItems.map((item) => {
                      const numericPrice = Number(
                        String(item.price).replace(/[^0-9.]/g, "")
                      );

                      const itemTotal =
                        numericPrice * item.quantity;

                      return (
                        <article
                          className="review-order-item"
                          key={item.id}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="review-order-item-image"
                          />

                          <div className="review-order-item-details">
                            <h4>{item.name}</h4>

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

                          <strong className="review-order-item-price">
                            {formatCurrency(itemTotal)}
                          </strong>
                        </article>
                      );
                    })}
                  </div>
                </div>

                <div className="review-notice">
                  <strong>Please review your information.</strong>

                  <p>
                    By placing your order, you confirm that the
                    shipping and payment details above are correct.
                  </p>
                </div>

                <form onSubmit={handlePlaceOrder}>
                  <div className="checkout-action-buttons">
                    <button
                      type="button"
                      className="checkout-back-button"
                      onClick={() => {
                        setCheckoutStep(2);

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Back to Payment
                    </button>

                    <button
                      type="submit"
                      className="continue-payment-button"
                      disabled={isProcessingOrder}
                    >
                      <span>
                        {isProcessingOrder
                          ? "Processing Order..."
                          : "Place Order"}
                      </span>

                      {!isProcessingOrder && (
                        <span
                          className="continue-button-arrow"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}
                    </button>
                  </div>
                </form>

                <p className="demo-checkout-warning">
                  This demonstration does not process or charge a
                  real payment.
                </p>
              </section>
            )}

            {checkoutStep === 3 &&
              orderSubmitted &&
              completedOrder && (
                <section className="order-confirmation-card">
                  <div
                    className="order-confirmation-icon"
                    aria-hidden="true"
                  >
                    ✓
                  </div>

                  <p className="checkout-eyebrow">
                    Order Submitted
                  </p>

                  <h2>Thank You for Your Order!</h2>

                  <p className="confirmation-intro">
                    Your checkout demonstration was completed
                    successfully.
                  </p>

                  <div className="confirmation-order-meta">
                    <div>
                      <span>Order Number</span>
                      <strong>{completedOrder.id}</strong>
                    </div>

                    <div>
                      <span>Order Date</span>
                      <strong>
                        {completedOrder.formattedDate}
                      </strong>
                    </div>

                    <div>
                      <span>Estimated Delivery</span>
                      <strong>
                        {completedOrder.estimatedDelivery}
                      </strong>
                    </div>
                  </div>

                  <div className="confirmation-receipt">
                    <div className="confirmation-section">
                      <h3>Items Ordered</h3>

                      {completedOrder.items.map((item) => {
                        const numericPrice = Number(
                          String(item.price).replace(
                            /[^0-9.]/g,
                            ""
                          )
                        );

                        const lineTotal =
                          numericPrice * item.quantity;

                        return (
                          <div
                            className="confirmation-item"
                            key={item.id}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                            />

                            <div className="confirmation-item-details">
                              <strong>{item.name}</strong>

                              {(item.color || item.size) && (
                                <p>
                                  {item.color}

                                  {item.color &&
                                    item.size &&
                                    " • "}

                                  {item.size}
                                </p>
                              )}

                              <small>
                                Quantity: {item.quantity}
                              </small>
                            </div>

                            <strong>
                              {formatCurrency(lineTotal)}
                            </strong>
                          </div>
                        );
                      })}
                    </div>

                    <div className="confirmation-details-grid">
                      <div className="confirmation-section">
                        <h3>Shipping Address</h3>

                        <p>
                          {
                            completedOrder.shippingAddress
                              .firstName
                          }{" "}
                          {
                            completedOrder.shippingAddress
                              .lastName
                          }
                        </p>

                        <p>
                          {
                            completedOrder.shippingAddress
                              .address
                          }
                        </p>

                        {completedOrder.shippingAddress
                          .apartment && (
                          <p>
                            {
                              completedOrder.shippingAddress
                                .apartment
                            }
                          </p>
                        )}

                        <p>
                          {
                            completedOrder.shippingAddress
                              .city
                          }
                          ,{" "}
                          {
                            completedOrder.shippingAddress
                              .state
                          }{" "}
                          {
                            completedOrder.shippingAddress
                              .zipCode
                          }
                        </p>

                        <p>
                          {
                            completedOrder.shippingAddress
                              .email
                          }
                        </p>

                        {completedOrder.shippingAddress
                          .phone && (
                          <p>
                            {
                              completedOrder.shippingAddress
                                .phone
                            }
                          </p>
                        )}
                      </div>

                      <div className="confirmation-section">
                        <h3>Payment Method</h3>

                        <p>
                          {
                            completedOrder.payment
                              .method
                          }
                        </p>

                        <p>
                          Card ending in{" "}
                          {
                            completedOrder.payment
                              .lastFour
                          }
                        </p>
                      </div>
                    </div>

                    <div className="confirmation-totals">
                      <div>
                        <span>Subtotal</span>
                        <span>
                          {formatCurrency(
                            completedOrder.subtotal
                          )}
                        </span>
                      </div>

                      <div>
                        <span>Shipping</span>
                        <span>
                          {completedOrder.shipping === 0
                            ? "Free"
                            : formatCurrency(
                                completedOrder.shipping
                              )}
                        </span>
                      </div>

                      <div>
                        <span>Estimated Tax</span>
                        <span>
                          {formatCurrency(
                            completedOrder.estimatedTax
                          )}
                        </span>
                      </div>

                      <div className="confirmation-total-row">
                        <strong>Total</strong>

                        <strong>
                          {formatCurrency(
                            completedOrder.total
                          )}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <p className="confirmation-demo-notice">
                    This is a demonstration receipt. No real
                    payment was processed.
                  </p>

                  <div className="confirmation-actions">
                    <button
                      type="button"
                      className="checkout-back-button"
                      onClick={() => window.print()}
                    >
                      Print Receipt
                    </button>

                    <Link
                      to="/products"
                      className="continue-payment-button"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </section>
              )}

            {!orderSubmitted && (
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
                    )}
      
        </div>
      </main>

      <CheckoutFooter />
    </div>
  );
}

export default Checkout;