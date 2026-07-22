import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import "./index.css";
import { ToastProvider } from "./context/ToastContext";


ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  </React.StrictMode>
);