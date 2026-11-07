import { useEffect, useRef, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutFooter from "../components/CheckoutFooter";
import PageMeta from "../components/PageMeta";
import { useCart } from "../context/CartContext";

import "../styles/Checkout.css";

function StripeSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { cartItems, clearCart } = useCart();

  const [errorMessage, setErrorMessage] =
    useState("");

  const hasProcessedRef = useRef(false);

  useEffect(() => {
    if (hasProcessedRef.current) {
      return;
    }

    hasProcessedRef.current = true;

    const sessionId =
      searchParams.get("session_id");

    if (!sessionId) {
      setErrorMessage(
        "The Stripe Checkout Session ID is missing."
      );

      return;
    }

    async function verifyPayment() {
      try {
        const response = await fetch(
          `/api/get-checkout-session?session_id=${encodeURIComponent(
            sessionId
          )}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ||
              "The Stripe payment could not be verified."
          );
        }

        if (data.paymentStatus !== "paid") {
          throw new Error(
            "Stripe has not marked this payment as paid."
          );
        }

        const existingStripeOrder =
          findExistingStripeOrder(sessionId);

        if (existingStripeOrder) {
          navigate(
            `/checkout/confirmation/${existingStripeOrder.id}`,
            {
              replace: true,
            }
          );

          return;
        }

        const order = createCompletedOrder({
          stripeSession: data,
          sessionId,
          cartItems,
        });

        saveCompletedOrder(order);

        clearCart({
          showNotification: false,
        });

        navigate(
          `/checkout/confirmation/${order.id}`,
          {
            replace: true,
          }
        );
      } catch (error) {
        console.error(
          "Unable to complete Stripe order:",
          error
        );

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "The completed payment could not be verified."
        );
      }
    }

    verifyPayment();
  }, [
    cartItems,
    clearCart,
    navigate,
    searchParams,
  ]);

  if (errorMessage) {
    return (
      <div className="checkout-layout">
        <PageMeta
          title="Payment Verification Error | Hey Jackson! Fashion"
          description="We were unable to verify the completed Stripe payment."
        />

        <CheckoutHeader />

        <main className="confirmation-page">
          <section className="confirmation-card confirmation-error">
            <h1>Payment Verification Issue</h1>

            <p>{errorMessage}</p>

            <p>
              Your payment may still appear in
              Stripe. Please do not submit another
              payment until the transaction has
              been checked.
            </p>

            <div className="confirmation-actions">
              <Link
                to="/orders"
                className="confirmation-button secondary"
              >
                View Orders
              </Link>

              <Link
                to="/contact"
                className="confirmation-button primary"
              >
                Contact Support
              </Link>
            </div>
          </section>
        </main>

        <CheckoutFooter />
      </div>
    );
  }

  return (
    <div className="checkout-layout">
      <PageMeta
        title="Verifying Payment | Hey Jackson! Fashion"
        description="Your secure Stripe payment is being verified."
      />

      <CheckoutHeader />

      <main className="confirmation-page">
        <section className="confirmation-card confirmation-heading">
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
            Payment Received
          </p>

          <h1>Finalizing Your Order</h1>

          <p className="confirmation-message">
            Your payment was successful. We are
            preparing your order confirmation.
          </p>
        </section>
      </main>

      <CheckoutFooter />
    </div>
  );
}

function findExistingStripeOrder(sessionId) {
  try {
    const savedOrders = JSON.parse(
      localStorage.getItem(
        "heyJacksonOrders"
      ) || "[]"
    );

    if (!Array.isArray(savedOrders)) {
      return null;
    }

    return (
      savedOrders.find(
        (order) =>
          order.stripeSessionId === sessionId
      ) || null
    );
  } catch (error) {
    console.error(
      "Unable to inspect saved orders:",
      error
    );

    return null;
  }
}

function createCompletedOrder({
  stripeSession,
  sessionId,
  cartItems,
}) {
  const today = new Date();

  const deliveryStart = new Date(today);
  deliveryStart.setDate(
    deliveryStart.getDate() + 5
  );

  const deliveryEnd = new Date(today);
  deliveryEnd.setDate(
    deliveryEnd.getDate() + 8
  );

  const shippingAddress = (() => {
  try {
    const currentCheckout = JSON.parse(
      sessionStorage.getItem("heyJacksonCheckoutShipping") || "null"
    );

    return currentCheckout || readStorageObject("heyJacksonShippingInfo");
  } catch (error) {
    console.error("Unable to read checkout shipping information:", error);
    return readStorageObject("heyJacksonShippingInfo");
  }
})();

  const savedPayment = readStorageObject(
    "heyJacksonPayment"
  );

  const subtotal =
    Number(stripeSession.amountSubtotal || 0) /
    100;

  const total =
    Number(stripeSession.amountTotal || 0) /
    100;

  const shipping =
    Number(stripeSession.amountShipping || 0) /
    100;

  const tax =
    Number(stripeSession.amountTax || 0) /
    100;  

  const orderId = `HJF-${today
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", "")}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;

  const safeCartItems =
    Array.isArray(cartItems) &&
    cartItems.length > 0
      ? cartItems.map((item) => ({
          ...item,
        }))
      : stripeSession.items.map(
          (item, index) => ({
            id:
              item.id ||
              `stripe-item-${index}`,
            name:
              item.name ||
              "Hey Jackson! Fashion Item",
            quantity:
              Number(item.quantity) || 1,
            price:
              Number(item.amountTotal || 0) /
              100 /
              (Number(item.quantity) || 1),
          })
        );

  return {
    id: orderId,
    orderNumber: orderId,

    stripeSessionId: sessionId,
    stripePaymentIntent:
      stripeSession.paymentIntent || "",

    paymentProvider: "Stripe",
    paymentStatus:
      stripeSession.paymentStatus,

    submittedAt: today.toISOString(),

    formattedDate:
      today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),

    formattedTime:
      today.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),

    estimatedDelivery: `${deliveryStart.toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
      }
    )} – ${deliveryEnd.toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
      }
    )}`,

    status: "Order Submitted",

    items: safeCartItems,

    shippingAddress: {
      ...shippingAddress,

      email:
        shippingAddress.email ||
        stripeSession.customerEmail ||
        "",

      fullName:
        [
          shippingAddress.firstName,
          shippingAddress.lastName,
        ]
          .filter(Boolean)
          .join(" ")
          .trim() ||
        shippingAddress.fullName ||
        stripeSession.customerName ||
        "",
    },

    paymentMethod: {
      cardType:
        savedPayment.cardType || "Stripe",

      lastFour:
        savedPayment.lastFour ||
        savedPayment.cardNumber
          ?.replace(/\D/g, "")
          .slice(-4) ||
        "",
    },

    subtotal,

    // Stripe currently only receives product
    // line items, so these remain zero until
    // shipping and tax are added to the session.
    shipping,
    tax,

    total,
    currency:
      stripeSession.currency || "usd",
  };
}

function saveCompletedOrder(order) {
  let savedOrders = [];

  try {
    const storedOrders = JSON.parse(
      localStorage.getItem(
        "heyJacksonOrders"
      ) || "[]"
    );

    savedOrders = Array.isArray(storedOrders)
      ? storedOrders
      : [];
  } catch (error) {
    console.error(
      "Unable to read order history:",
      error
    );
  }

  localStorage.setItem(
    "heyJacksonOrders",
    JSON.stringify([order, ...savedOrders])
  );

  localStorage.setItem(
    "heyJacksonLatestOrder",
    JSON.stringify(order)
  );
}

function readStorageObject(key) {
  try {
    const value = JSON.parse(
      localStorage.getItem(key) || "{}"
    );

    return value &&
      typeof value === "object" &&
      !Array.isArray(value)
      ? value
      : {};
  } catch (error) {
    console.error(
      `Unable to read ${key}:`,
      error
    );

    return {};
  }
}

export default StripeSuccess;