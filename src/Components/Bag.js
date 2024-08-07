import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-2">
      <h2>Your Cart</h2>
      <div className="row">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} className="col">
              <div className="card" style={{ width: "350px", height: "80vh" }}>
                <img src={product.thumbnail} style={{ width: "250px", height: "180px" }} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                  <p className="card-text"><strong>Category:</strong> {product.category}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;



// import React from "react";

// const Cart = () => {

//     return(
// <div>
//     <img src="https://wpmet.com/wp-content/uploads/2022/09/EmptyCart_3-Copy.png.webp" />
// </div>
//     )
// }
// export default Cart