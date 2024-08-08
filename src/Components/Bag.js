import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Calculate the total cost
  const totalCost = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="container mt-2">
      <h2>Your Cart</h2>
      <div className="row">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((product, index) => (
              <div key={index} className="col">
                <div className="card" style={{ width: "350px", height: "80vh" }}>
                  <img src={product.thumbnail} style={{ width: "250px", height: "180px" }} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                    <p className="card-text"><strong>Category:</strong> {product.category}</p>
                    <p className="card-text"><strong>Quantity:</strong> {product.quantity}</p>
                    <button onClick={() => removeFromCart(product.id)} className="btn btn-danger">-</button>
                    <button onClick={() => addToCart(product)} className="btn btn-primary ms-2">+</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 mt-4">
              <h4>Total Cost: ${totalCost.toFixed(2)}</h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
