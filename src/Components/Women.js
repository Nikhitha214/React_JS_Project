import React, { useEffect, useState,useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { toast } from 'react-toastify';
import { CartContext } from './CartContext';

const WomenList = () => {
  const [womenProducts, setwomenProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://dummyjson.com/products/category/womens-dresses'),
          fetch('https://dummyjson.com/products/category/womens-jewellery'),
          fetch('https://dummyjson.com/products/category/womens-shoes'),
          fetch('https://dummyjson.com/products/category/womens-watches')
        ]);

        const data = await Promise.all(responses.map(response => response.json()));

        const combinedProducts = [
          ...(data[0].products || []),
          ...(data[1].products || []),
          ...(data[2].products || []),
          ...(data[3].products || [])

        ];

        console.log('Combined API Response:', combinedProducts);
        setwomenProducts(combinedProducts);
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

  // const WomenCard = ({ women }) => {
  // if (!women) {
  //   return null;
  // }

  // return (

  const WomenCard = ({ women }) => (
    women ? (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 8px blue"}}>
        <img src={women.thumbnail} style={{width:"250px",height:"180px"}} className="card-img-top" alt={`${women.title} Poster`} />
        <div className="card-body">
          <h5 className="card-title">{women.title}</h5>
          <p className="card-text"><strong>Category:</strong> {women.category}</p>
          <p className="card-text"><strong>Price:</strong> ${women.price}</p>
          <p className="card-text"><strong>Rating:</strong> {women.rating}</p>
          <button onClick={() => handleAddToCart(women)} className="btn btn-primary" style={{width:"60px"}}>Bag</button>
            <button onClick={() => handleAddToWishlist(women)} className="btn btn-danger ms-2" style={{width:"95px"}}>Wishlist</button>
        </div>
      </div>
    </div>
   ) : null
  );

return (
  <div className="container bg-danger mt-2" style={{width:"100%",height:"340vh"}}>
    <div className="row">
      {Array.isArray(womenProducts) && womenProducts.map(women => (
        <WomenCard key={women.id} women={women} />
      ))}
    </div>
    <Footer/>
  </div>
);
};

export default WomenList;

