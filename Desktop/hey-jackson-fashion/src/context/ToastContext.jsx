import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import "../styles/cart-toast.css";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  function closeToast() {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast(null);
  }

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

  function getToastIcon() {
    switch (toast?.type) {
      case "wishlist":
        return "♥";

      case "wishlist-remove":
        return "♡";

      case "remove":
        return "×";

      default:
        return "✓";
    }
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
        closeToast,
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
            {getToastIcon()}
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
            onClick={closeToast}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider"
    );
  }

  return context;
}