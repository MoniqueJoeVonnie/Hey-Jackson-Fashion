import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("heyJacksonCart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "heyJacksonCart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  function addToCart(
    product,
    selectedColor,
    selectedSize,
    selectedImage
  ) {
    const color = selectedColor || "default";
    const size = selectedSize || "default";

    const cartItem = {
      id: `${product.id}-${color}-${size}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: selectedImage || product.image,
      color: selectedColor || "",
      size: selectedSize || "",
      quantity: 1,
    };

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === cartItem.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === cartItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [...prevItems, cartItem];
    });
  }

  function increaseQuantity(id) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}