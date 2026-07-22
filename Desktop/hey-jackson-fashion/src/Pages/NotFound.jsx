import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/NotFound.css";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <>
      <Navbar />

      <main className="not-found-page">
        <div className="not-found-glow"></div>

        <motion.section
            className="not-found-card"
            initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
            }}
            transition={{
                opacity: {
                    duration: 0.7,
                },
                scale: {
                    duration: 0.7,
                },
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
            },
            }}
        >
          <p className="not-found-eyebrow">
            Oops! This pup wandered off.
          </p>

          <h1>404</h1>

          <h2>Page Not Found</h2>

          <p className="not-found-message">
            The page you’re looking for may have been
            moved, renamed, or is no longer available.
          </p>

          <div className="not-found-actions">
            <Link
              to="/"
              className="not-found-button primary"
            >
              <FaHome />
              Return Home
            </Link>

            <Link
              to="/products"
              className="not-found-button secondary"
            >
              <FaShoppingBag />
              Shop Products
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;