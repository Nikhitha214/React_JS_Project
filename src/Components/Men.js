import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { CartContext } from './CartContext';
import Footer from "./Footer";
const MenList = () => {
  const [menProducts, setmenProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart, addToWishlist } = useContext(CartContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://dummyjson.com/products/category/mens-shirts'),
          fetch('https://dummyjson.com/products/category/mens-watches'),
          fetch('https://dummyjson.com/products/category/mens-shoes'),
          fetch('https://dummyjson.com/products/category/sunglasses')
        ]);

        const data = await Promise.all(responses.map(response => response.json()));

        const combinedProducts = [
          ...(data[0].products || []),
          ...(data[1].products || []),
          ...(data[2].products || []),
          ...(data[3].products || [])

        ];

        console.log('Combined API Response:', combinedProducts);
        setmenProducts(combinedProducts);
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

  // if (error) {
  //   return <p>Failed to fetch products</p>;
  // }
  // const MenCard = ({ men }) => {
  // if (!men) {
  //   return null;
  // }
  

  // return (
    const MenCard = ({ men }) => (
      men ? (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 10px red"}}>
        <img src={men.thumbnail} style={{width:"250px",height:"180px"}} className="card-img-top" alt={`${men.title} Poster`} />
        <div className="card-body">
          <p className="card-title">{men.title}</p>
          <p className="card-text"><strong>Category:</strong> {men.category}</p>
          <p className="card-text"><strong>Price:</strong> ${men.price}</p>
          <p className="card-text"><strong>Rating:</strong> {men.rating}</p>
          <button onClick={() => handleAddToCart(men)} className="btn btn-primary" style={{width:"60px"}}>Bag</button>
            <button onClick={() => handleAddToWishlist(men)} className="btn btn-danger ms-2" style={{width:"95px"}}>Wishlist</button>
        </div>
      </div>
    </div>
    ) : null
  );



  return (
    <div className="container bg-info mt-2" style={{width:"100%",height:"380vh"}}>
      <div className="row">
        {Array.isArray(menProducts) && menProducts.map(men => (
          <MenCard key={men.id} men={men} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default MenList;
