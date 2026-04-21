import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({
  cart = [],
  updateCart = () => {},
  increaseQuantity = () => {},
  decreaseQuantity = () => {},
  removeItem = () => {},
  totals = {},
}) => {
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const getBookPrice = (book) => {
    return book.salePrice ?? book.originalPrice;
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              <div className="cart__body">
                {cart.map((item) => {
                  const itemPrice = getBookPrice(item);
                  const itemTotal = itemPrice * item.quantity;

                  return (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__book">
                        <img
                          className="cart__book--img"
                          src={item.url}
                          alt={item.title}
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {item.title}
                          </span>

                          <span className="cart__book--price">
                            {item.salePrice ? (
                              <>
                                <span className="price__normal">
                                  {formatPrice(item.originalPrice)}
                                </span>{" "}
                                {formatPrice(item.salePrice)}
                              </>
                            ) : (
                              formatPrice(item.originalPrice)
                            )}
                          </span>

                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="cart__quantity">
                        <button
                          className="quantity__btn"
                          onClick={() => decreaseQuantity(item)}
                        >
                          -
                        </button>

                        <input
                          type="number"
                          className="cart__input"
                          min={1}
                          max={99}
                          value={item.quantity}
                          onChange={(event) =>
                            updateCart(item, event.target.value)
                          }
                        />

                        <button
                          className="quantity__btn"
                          onClick={() => increaseQuantity(item)}
                        >
                          +
                        </button>
                      </div>

                      <div className="cart__total">
                        {formatPrice(itemTotal)}
                      </div>
                    </div>
                  );
                })}

                {cart.length === 0 && (
                  <div className="cart__empty">
                    <img className="cart__empty--img" src={EmptyCart} alt="" />
                    <h2>You don't have any books in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse books</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>{formatPrice(totals.subtotal || 0)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>{formatPrice(totals.tax || 0)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>{formatPrice(totals.total || 0)}</span>
                </div>
                <button
                  className="btn btn__checkout"
                  onClick={() => alert("Proceeding to checkout...")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;