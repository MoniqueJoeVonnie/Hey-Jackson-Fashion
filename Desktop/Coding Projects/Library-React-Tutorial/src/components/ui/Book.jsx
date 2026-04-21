import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import Price from "./Price";

const Book = ({ book, addItemToCart }) => {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt={book.title} />
        </figure>
      </Link>

      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>

      <Ratings rating={book.rating} />

      <div className="book__price">
        <Price
          originalPrice={book.originalPrice}
          salePrice={book.salePrice}
        />
      </div>

      <button className="btn" onClick={() => addItemToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Book;