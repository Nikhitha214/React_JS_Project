import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';

const Wishlist = () => {
  const { wishlist, addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
      brand: product.brand
    });
    toast.success(`${product.title} has been added to the cart!`);
  };

  return (
    <div className="container mt-2">
      <h2>Your Wishlist</h2>
      <div className="row">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((product) => (
            <div key={product.id} className="col">
              <div className="card" style={{ width: "350px", height: "80vh" }}>
                <img src={product.thumbnail} style={{ width: "250px", height: "180px" }} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                  <p className="card-text"><strong>Brand:</strong> {product.brand}</p>
                  <button onClick={() => handleAddToCart(product)} className="btn btn-primary mt-2">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
