import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { toast } from 'react-toastify';
import { CartContext } from './CartContext';

const BeautyList = () => {
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://dummyjson.com/products/category/beauty'),
          fetch('https://dummyjson.com/products/category/skin-care'),
          fetch('https://dummyjson.com/products/category/fragrances')
        ]);

        const data = await Promise.all(responses.map(response => response.json()));

        const combinedProducts = [
          ...(data[0].products || []),
          ...(data[1].products || []),
          ...(data[2].products || [])
        ];

        console.log('Combined API Response:', combinedProducts);
        setBeautyProducts(combinedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} has been added to the cart!`);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success(`${product.title} has been added to the wishlist!`);
  };

  const BeautyCard = ({ beauty }) => (
    beauty ? (
      <div className="col">
        <div className="card" style={{ boxShadow: "0px 0px 5px blue" }}>
          <img src={beauty.thumbnail} style={{ width: "250px", height: "180px" }} className="card-img-top" alt={`${beauty.title} Poster`} />
          <div className="card-body">
            <h5 className="card-title">{beauty.title}</h5>
            <p className="card-text"><strong>Category:</strong> {beauty.category}</p>
            <p className="card-text"><strong>Price:</strong> ${beauty.price}</p>
            <p className="card-text"><strong>Rating:</strong> {beauty.rating}</p>
            <button onClick={() => handleAddToCart(beauty)} className="btn btn-primary" style={{width:"60px"}}>Bag</button>
            <button onClick={() => handleAddToWishlist(beauty)} className="btn btn-danger ms-2" style={{width:"95px"}}>Wishlist</button>
          </div>
        </div>
      </div>
    ) : null
  );

  return (
    <div className="container mt-2 bg-danger" style={{ width: "100%", height: "280vh" }}>
      <div className="row">
        {Array.isArray(beautyProducts) && beautyProducts.length > 0 ? (
          beautyProducts.map(beauty => (
            <BeautyCard key={beauty.id} beauty={beauty} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      {error && <p>Failed to fetch products</p>}
      <Footer />
    </div>
  );
};

export default BeautyList;
