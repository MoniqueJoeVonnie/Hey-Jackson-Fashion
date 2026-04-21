import "./index.css";
import Footer from "./components/Footer";
import { useMemo, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { books } from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const TAX_RATE = 0.1;

  const getBookPrice = (book) => {
    return book.salePrice ?? book.originalPrice;
  };

  const addItemToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const updateCart = (book, quantity) => {
    const parsedQuantity = Number(quantity);

    if (Number.isNaN(parsedQuantity)) return;

    if (parsedQuantity <= 0) {
      removeItem(book);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === book.id
          ? { ...item, quantity: Math.min(parsedQuantity, 99) }
          : item
      )
    );
  };

  const increaseQuantity = (book) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === book.id
          ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
          : item
      )
    );
  };

  const decreaseQuantity = (book) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (book) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== book.id));
  };

  const totals = useMemo(() => {
    const subtotal = cart.reduce((total, item) => {
      return total + getBookPrice(item) * item.quantity;
    }, 0);

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    return {
      subtotal,
      tax,
      total,
    };
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={<Books books={books} addItemToCart={addItemToCart} />}
          />
          <Route
            path="/books/:id"
            element={
              <BookInfo
                books={books}
                cart={cart}
                addItemToCart={addItemToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
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