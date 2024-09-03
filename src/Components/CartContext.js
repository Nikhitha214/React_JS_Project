
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.id === productId);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingProductIndex].quantity > 1) {
          updatedCart[existingProductIndex].quantity -= 1;
        } else {
          updatedCart.splice(existingProductIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToWishlist = (product) => {
            setWishlist([...wishlist, product]);
          };
    
  return (
    <CartContext.Provider value={{ cart,wishlist,addToCart, removeFromCart, clearCart,addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
