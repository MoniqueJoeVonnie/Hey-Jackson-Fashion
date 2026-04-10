import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <figure className="book__img--wrapper">
        <img src={book.url} alt={book.title} className="book__img" />
      </figure>

      <div className="book__title">{book.title}</div>

      <div className="book__rating">
        {book.rating} ⭐
      </div>

      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice}
            </span>{" "}
            <span className="book__price--sale">
              ${book.salePrice}
            </span>
          </>
        ) : (
          <span>${book.originalPrice}</span>
        )}
      </div>
    </div>
  );
};

export default Book;
