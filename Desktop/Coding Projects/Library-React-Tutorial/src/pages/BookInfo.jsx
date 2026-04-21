import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ratings from "../components/ui/Ratings";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

const BookInfo = ({ books = [], cart = [], addItemToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => Number(book.id) === Number(id));
  const isLoading = books.length === 0;

  function bookExistsOnCart() {
    return cart.find((item) => Number(item.id) === Number(id));
  }

  if (isLoading) {
    return (
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <Link to="/books" className="book__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <Link to="/books" className="book__link">
                  <h2 className="book__selected--title--top">Books</h2>
                </Link>
              </div>

              <div className="book__selected">
                <figure className="book__selected--figure">
                  <div className="skeleton skeleton__book-info--img"></div>
                </figure>

                <div className="book__selected--description">
                  <div className="skeleton skeleton__book-info--title"></div>
                  <div className="skeleton skeleton__book-info--rating"></div>
                  <div className="skeleton skeleton__book-info--price"></div>
                  <div className="skeleton skeleton__book-info--text"></div>
                  <div className="skeleton skeleton__book-info--text short"></div>
                  <div className="skeleton skeleton__book-info--button"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!book) {
    return (
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <Link to="/books" className="book__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <Link to="/books" className="book__link">
                  <h2 className="book__selected--title--top">Books</h2>
                </Link>
              </div>

              <h2>Book not found.</h2>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  className="book__selected--img"
                  src={book.url}
                  alt={book.title}
                />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>

                <Ratings rating={book.rating} />

                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>

                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id voluptas.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus.
                  </p>

                  <div className="book__summary--actions">
                    {bookExistsOnCart() ? (
                      <Link to="/cart">
                        <button className="btn">Checkout</button>
                      </Link>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => addItemToCart(book)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>

            <div className="books">
              {books
                .filter((b) => b.rating === 5 && Number(b.id) !== Number(id))
                .slice(0, 4)
                .map((b) => (
                  <Book book={b} key={b.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;