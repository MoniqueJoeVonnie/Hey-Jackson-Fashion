import "./index.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import { books } from "./data";

function App() {
  const addItemToCart = (book) => {
    console.log("Added to cart:", book);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/1" element={<BookInfo books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
