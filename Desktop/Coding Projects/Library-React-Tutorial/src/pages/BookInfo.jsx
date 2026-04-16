import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ratings from "../components/ui/Ratings";
import Price from "../components/ui/Price";

const BookInfo = ({ books = [], addItemToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => Number(book.id) === Number(id));

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

              <div className="book__selected">
                <figure className="book__selected--figure">
                  <img
                    src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                    className="book__selected--img"
                    alt="Crack the Coding Interview"
                  />
                </figure>

                <div className="book__selected--description">
                  <h2 className="book__selected--title">
                    Crack the Coding Interview
                  </h2>

                  <Ratings rating={4.5} />

                  <div className="book__selected--price">
                    <Price originalPrice={50} salePrice={20} />
                  </div>

                  <div className="book__summary">
                    <h3 className="book__summary--title">Summary</h3>
                    <p className="book__summary--para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, repellendus modi odio porro, consequuntur,
                      asperiores minima sint voluptatem at reiciendis ducimus
                      neque provident alias iure nihil explicabo nobis id
                      voluptas.
                    </p>
                    <p className="book__summary--para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, repellendus modi odio porro, consequuntur,
                      asperiores minima sint voluptatem at reiciendis ducimus
                      neque provident alias iure nihil explicabo nobis id
                      voluptas.
                    </p>
                  </div>

                  <button className="btn">Add to Cart</button>
                </div>
              </div>
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
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, repellendus modi odio porro, consequuntur,
                    asperiores minima sint voluptatem at reiciendis ducimus
                    neque provident alias iure nihil explicabo nobis id
                    voluptas.
                  </p>
                </div>

                <button
                  className="btn"
                  onClick={() => addItemToCart && addItemToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
