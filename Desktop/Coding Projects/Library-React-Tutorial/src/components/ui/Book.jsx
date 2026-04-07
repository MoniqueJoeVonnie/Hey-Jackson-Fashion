import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Book = ({ book }) => {
  if (!book) return null;

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon="star" />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon="star-half-stroke" />);
    }

    return stars;
  };

  return (
    <div className="book">
      <a href="/">
        <figure className="book__img--wrapper">
          <img src={book.url} alt={book.title} className="book__img" />
        </figure>
      </a>

      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>

      <div className="book__ratings">{renderRating(book.rating)}</div>
   
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            <span className="book__price--discount">
              ${book.salePrice.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="book__price--discount">
            ${book.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default Book;