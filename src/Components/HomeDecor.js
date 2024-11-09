import React, { useEffect, useState,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { CartContext } from './CartContext';
import Footer from "./Footer";
const DecorList = () => {
  const [decorProducts, setDecorProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToWishlist,addToCart } = useContext(CartContext);


  useEffect(() => {
     fetch('https://api.apify.com/v2/datasets/3SMCknkYWeSl8gQO6/items?clean=true&format=json')
  
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); // Log the API response for debugging
        setDecorProducts(data || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products'); // Provide a more user-friendly error message
      });
  }, []);
  const handleAddToWishlist = (product) => {
    addToWishlist({
      id: product.id,
      thumbnail: product.thumbnailImage,
      title: product.title,
      price: product.price.value,
      brand: product.brand
    });
    toast.success(`${product.title} has been added to the wishlist!`);
  };
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      thumbnail: product.thumbnailImage,
      title: product.title,
      price: product.price.value,
      brand: product.brand
    });
    toast.success(`${product.title} has been added to the Cart!`);
  };

  const DecorCard = ({ decor }) => {
    const { thumbnailImage, title, brand, price, stars } = decor;

    return (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 5px red"}}>
        <img src={thumbnailImage} style={{width:"250px",height:"180px"}} className="card-img-top w-40" alt={`${title} Poster`} />
        <div className="card-body">
          {/* <p className="card-title">{title}</p> */}
          <p className="card-text"><strong>Category:</strong> {brand}</p>
          <p className="card-text">
            <strong>Price:</strong> {price.value} {price.currency}
          </p>
          <p className="card-text"><strong>stars:</strong> {stars}</p>
          <button onClick={() => handleAddToCart(decor)} className="btn btn-primary ms-2" style={{ width: "60px" }}>Bag</button>
            <button onClick={() => handleAddToWishlist(decor)} className="btn btn-danger ms-2" style={{width:"95px"}}>Wishlist</button>
        </div>
      </div>
    </div>
  );
};


  return (
    <div className="container mt-2 bg-success" style={{width:"100%",height:"775vh"}}>
      <div className="row">
        {Array.isArray(decorProducts) && decorProducts.length > 0 ? (
          decorProducts.map(decor => (
            <DecorCard key={decor.id} decor={decor} /> // Ensure `key` is unique; use `id` or another unique identifier
          ))
        ) : (
          <p>No products available</p> // Inform user if no products are available
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default DecorList;
