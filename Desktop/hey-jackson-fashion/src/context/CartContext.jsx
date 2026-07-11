import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import "../styles/cart-toast.css";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("heyJacksonCart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(
      "heyJacksonCart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  function showToast({
    title,
    message = "",
    type = "success",
  }) {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast({
      title,
      message,
      type,
    });

    toastTimerRef.current = setTimeout(() => {
      setToast(null);
    }, 3000);
  }

  function addToCart(
    product,
    selectedColor,
    selectedSize,
    selectedImage
  ) {
    const color = selectedColor || "default";
    const size = selectedSize || "default";

    const cartItem = {
      id: `${product.id}-${color}-${size}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: selectedImage || product.image,
      color: selectedColor || "",
      size: selectedSize || "",
      quantity: 1,
    };

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === cartItem.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === cartItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [...prevItems, cartItem];
    });

    const optionDetails = [
      selectedColor,
      selectedSize ? `Size ${selectedSize}` : "",
    ]
      .filter(Boolean)
      .join(" • ");

    showToast({
      title: "Added to Cart",
      message: optionDetails
        ? `${product.name} • ${optionDetails}`
        : product.name,
      type: "success",
    });
  }

  function increaseQuantity(id) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems((prevItems) => {
      const selectedItem = prevItems.find(
        (item) => item.id === id
      );

      const updatedItems = prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      if (
        selectedItem &&
        selectedItem.quantity === 1
      ) {
        showToast({
          title: "Removed from Cart",
          message: selectedItem.name,
          type: "remove",
        });
      }

      return updatedItems;
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => {
      const selectedItem = prevItems.find(
        (item) => item.id === id
      );

      if (selectedItem) {
        showToast({
          title: "Removed from Cart",
          message: selectedItem.name,
          type: "remove",
        });
      }

      return prevItems.filter(
        (item) => item.id !== id
      );
    });
  }

  function clearCart() {
    setCartItems([]);

    showToast({
      title: "Cart Cleared",
      message: "All items were removed from your cart.",
      type: "remove",
    });
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
      }}
    >
      {children}

      {toast && (
        <div
          className={`cart-toast cart-toast--${toast.type}`}
          role="status"
          aria-live="polite"
        >
          <div className="cart-toast-icon">
            {toast.type === "success" ? "✓" : "×"}
          </div>

          <div className="cart-toast-content">
            <strong>{toast.title}</strong>

            {toast.message && (
              <span>{toast.message}</span>
            )}
          </div>

          <button
            type="button"
            className="cart-toast-close"
            onClick={() => setToast(null)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}