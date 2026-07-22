import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import sneakerCollection from "./assets/Sneaker collection.png";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";





const Home = lazy(() =>
  import("./Pages/Home")
);

const ProductDetail = lazy(() =>
  import("./Pages/ProductDetail")
);

const CategoryPage = lazy(() =>
  import("./Pages/CategoryPage")
);

const ProductPage = lazy(() =>
  import("./Pages/Product")
);

const Cart = lazy(() =>
  import("./Pages/Cart")
);

const Checkout = lazy(() =>
  import("./Pages/Checkout")
);

const Orders = lazy(() =>
  import("./Pages/Orders")
);

const OrderDetails = lazy(() =>
  import("./Pages/OrderDetails")
);

const CheckoutReview = lazy(() =>
  import("./Pages/CheckoutReview")
);

const OrderConfirmation = lazy(() =>
  import("./Pages/OrderConfirmation")
);

const Contact = lazy(() =>
  import("./Pages/Contact")
);

const FAQ = lazy(() =>
  import("./Pages/FAQ")
);

const Search = lazy(() =>
  import("./Pages/Search")
);

const Wishlist = lazy(() =>
  import("./pages/Wishlist")
);

const NotFound = lazy(() =>
  import("./Pages/NotFound")
);

function App() {
  const location = useLocation();

return (
  <>
    <ScrollToTop />
    <BackToTop />

    <Suspense
      fallback={
        <div className="page-loading">
          <div className="page-loading-spinner">
            🐾
          </div>

          <p>Loading Hey Jackson! Fashion...</p>
        </div>
      }
    >
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

        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />

        </Routes>
      </AnimatePresence>
    </Suspense>
  </>
);
}

export default App;




