import "./index.css";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { books } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  // ✅ ADD THIS FUNCTION (this is what you're missing)
  const addItemToCart = (book) => {
    const existingItem = cart.find((item) => item.id === book.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const updateCart = (book, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? { ...item, quantity: Number(quantity) }
          : item
      )
    );
  };

  const removeItem = (book) => {
    setCart(cart.filter((item) => item.id !== book.id));
  };

  const totals = {
    subtotal: cart.reduce(
      (total, item) =>
        total + (item.salePrice || item.originalPrice) * item.quantity,
      0
    ),
    tax: cart.reduce(
      (total, item) =>
        total + (item.salePrice || item.originalPrice) * item.quantity * 0.1,
      0
    ),
    total: cart.reduce(
      (total, item) =>
        total + (item.salePrice || item.originalPrice) * item.quantity * 1.1,
      0
    ),
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          
          {/* ✅ FIXED */}
          <Route
            path="/books/:id"
            element={
              <BookInfo
                books={books}
                addItemToCart={addItemToCart}
              />
            }
          />

          {/* ✅ FIXED (you were passing books instead of cart) */}
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeItem={removeItem}
                totals={totals}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;