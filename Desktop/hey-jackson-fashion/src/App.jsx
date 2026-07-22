import Navbar from "./components/Navbar";
import "./App.css";
import sneakerCollection from "./assets/Sneaker collection.png";
import ProductDetail from "./Pages/ProductDetail";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";
import OrderDetails from "./Pages/OrderDetails";
import CheckoutReview from "./Pages/CheckoutReview";
import OrderConfirmation from "./Pages/OrderConfirmation";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Search from "./Pages/Search";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";



function App() {
  const location = useLocation();

return (
  <>
    <ScrollToTop />
    <BackToTop />

  <AnimatePresence mode="wait">
          <Routes
            location={location}
            key={location.pathname}
          >

          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/cart"
            element={
              <PageTransition>
                <Navbar />
                <Cart />
              </PageTransition>
            }
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/orders/:orderId"
            element={<OrderDetails />}
          />

          <Route
            path="/checkout/review"
            element={<CheckoutReview />}
          />

          <Route
            path="/checkout/confirmation/:orderId"
            element={<OrderConfirmation />}
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="/faq"
            element={
              <PageTransition>
                <FAQ />
              </PageTransition>
            }
          />

          <Route
            path="/search"
            element={
              <PageTransition>
                <Search />
              </PageTransition>
            }
          />

          <Route
            path="/wishlist"
            element={
              <PageTransition>
                <Wishlist />
              </PageTransition>
            }
          />

          <Route
          path="/products"
          element={
            <PageTransition>
              <Navbar />
              <ProductPage />
            </PageTransition>
          }
        />

        <Route
          path="/products/category/:categoryName"
          element={
            <PageTransition>
              <Navbar />
              <CategoryPage />
            </PageTransition>
          }
        />

        <Route
          path="/products/:productId"
          element={
            <PageTransition>
              <Navbar />
              <ProductDetail />
            </PageTransition>
          }
        />

            </Routes>
    </AnimatePresence>
  </>
  );
}

export default App;




