import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";
import "../styles/Search.css";

function Search() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const urlQuery = searchParams.get("q") || "";

  const [searchTerm, setSearchTerm] =
    useState(urlQuery);

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [sortOption, setSortOption] =
    useState("featured");

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();  

  useEffect(() => {
    setSearchTerm(urlQuery);
  }, [urlQuery]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase();

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.title,
        product.category,
        product.description,
        ...(product.colors || []),
        ...(product.sizes || []),
        ...(product.keywords || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch ||
        searchableText.includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "all" ||
        product.category?.toLowerCase() ===
          selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const sortedProducts = useMemo(() => {
    const productsToSort = [...filteredProducts];

    function getProductPrice(product) {
      if (typeof product.price === "number") {
        return product.price;
      }

      return (
        Number(
          String(product.price)
            .replace("$", "")
            .replace(",", "")
        ) || 0
      );
    }

    function getProductName(product) {
      return (
        product.name ||
        product.title ||
        ""
      ).toLowerCase();
    }

    switch (sortOption) {
      case "price-low-high":
        return productsToSort.sort(
          (firstProduct, secondProduct) =>
            getProductPrice(firstProduct) -
            getProductPrice(secondProduct)
        );

      case "price-high-low":
        return productsToSort.sort(
          (firstProduct, secondProduct) =>
            getProductPrice(secondProduct) -
            getProductPrice(firstProduct)
        );

      case "name-a-z":
        return productsToSort.sort(
          (firstProduct, secondProduct) =>
            getProductName(firstProduct).localeCompare(
              getProductName(secondProduct)
            )
        );

      case "featured":
      default:
        return productsToSort;
    }
  }, [filteredProducts, sortOption]);

  function handleSearchChange(event) {
    const value = event.target.value;

    setSearchTerm(value);

    if (value.trim()) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  }

  function clearSearch() {
    setSearchTerm("");
    setSearchParams({});
  }

  function resetSearchPage() {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOption("featured");
    setSearchParams({});
  }

  return (
    <>
      <Navbar />

      <main className="search-page">
        <section className="search-hero">
          <p className="search-eyebrow">
            FIND YOUR FAVORITES
          </p>

          <h1>Search Products</h1>

          <p className="search-description">
            Search our collection of stylish clothing,
            accessories, harnesses, and paw protectors.
          </p>

          <div className="search-input-wrapper">
            <FaSearch className="search-input-icon" />

            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by product, category, color, or size..."
              aria-label="Search products"
              autoFocus
            />

            {searchTerm && (
              <button
                type="button"
                className="search-clear-button"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </section>

        <section className="search-results-section">
          <div className="search-filters">
            <button
              type="button"
              className={
                selectedCategory === "all"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory("all")
              }
            >
              All
            </button>

            <button
              type="button"
              className={
                selectedCategory === "clothing"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory("clothing")
              }
            >
              Clothing
            </button>

            <button
              type="button"
              className={
                selectedCategory === "harnesses"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory("harnesses")
              }
            >
              Harnesses
            </button>

            <button
              type="button"
              className={
                selectedCategory === "shoes"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory("shoes")
              }
            >
              Paw Protectors
            </button>

            <button
              type="button"
              className={
                selectedCategory === "accessories"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory("accessories")
              }
            >
              Accessories
            </button>
          </div>

          <div className="search-results-header">
            <div className="search-results-heading">
              <p className="search-results-label">
                SEARCH RESULTS
              </p>

              <h2>
                {searchTerm
                  ? `Results for “${searchTerm}”`
                  : selectedCategory === "all"
                    ? "All Products"
                    : selectedCategory === "shoes"
                      ? "Paw Protectors"
                      : selectedCategory}
              </h2>
            </div>

            <div className="search-results-controls">
              <p className="search-result-count">
                {sortedProducts.length}{" "}
                {sortedProducts.length === 1
                  ? "product"
                  : "products"}
              </p>

              <div className="search-sort-wrapper">
                <label htmlFor="search-sort">
                  Sort By
                </label>

                <select
                  id="search-sort"
                  value={sortOption}
                  onChange={(event) =>
                    setSortOption(event.target.value)
                  }
                >
                  <option value="featured">
                    Featured
                  </option>

                  <option value="price-low-high">
                    Price: Low to High
                  </option>

                  <option value="price-high-low">
                    Price: High to Low
                  </option>

                  <option value="name-a-z">
                    Name: A–Z
                  </option>
                </select>
              </div>
            </div>
          </div>

          {sortedProducts.length > 0 ? (
            <div className="search-product-grid">
              {sortedProducts.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  className="search-product-card"
                  key={product.id}
                >
                  <div className="search-product-image-wrapper">
                    <button
                      type="button"
                      className={
                        isInWishlist(product.id)
                          ? "search-wishlist-button active"
                          : "search-wishlist-button"
                      }
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        toggleWishlist(product);
                      }}
                      aria-label={
                        isInWishlist(product.id)
                          ? `Remove ${
                              product.name || product.title
                            } from wishlist`
                          : `Add ${
                              product.name || product.title
                            } to wishlist`
                      }
                      aria-pressed={isInWishlist(product.id)}
                    >
                      {isInWishlist(product.id) ? (
                        <FaHeart />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>

                    <img
                      src={
                        product.image ||
                        product.images?.[0]
                      }
                      alt={
                        product.name ||
                        product.title
                      }
                    />
                  </div>

                  <div className="search-product-info">
                    <p className="search-product-category">
                      {product.category}
                    </p>

                    <h3>
                      {product.name ||
                        product.title}
                    </h3>

                    <p className="search-product-price">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="search-empty-state">
              <div className="search-empty-icon">
                <FaSearch />
              </div>

              <h2>No products found</h2>

              <p>
                We couldn’t find anything matching
                {searchTerm
                  ? ` “${searchTerm}”.`
                  : " the selected category."}{" "}
                Try a different product, color, size, or
                category.
              </p>

              <button
                type="button"
                onClick={resetSearchPage}
              >
                View All Products
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Search;