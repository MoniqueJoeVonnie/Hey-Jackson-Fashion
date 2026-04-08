import React, { useState } from "react";
import Book from "../components/Book";
import { books as booksData } from "../data";

const Books = () => {
  const [books, setBooks] = useState(booksData);

  function filterBooks(filter) {
    switch (filter) {
      case "LOW_TO_HIGH":
        setBooks(
          [...books].sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
        );
        break;

      case "HIGH_TO_LOW":
        setBooks(
          [...books].sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
        );
        break;

      case "RATING":
        setBooks([...books].sort((a, b) => b.rating - a.rating));
        break;

      default:
        setBooks(booksData);
        break;
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>

                <select
                  id="filter"
                  onChange={(event) => filterBooks(event.target.value)}
                  defaultValue="DEFAULT"
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>

              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
