import React, { useEffect, useState ,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { toast } from 'react-toastify';
import { CartContext } from './CartContext';
const KitchenList = () => {
  const [kitchenProducts, setKitchenProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/kitchen-accessories')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); // Log the API response
        setKitchenProducts(data.products || []); // Adjust based on actual response structure
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} has been added to the cart!`);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success(`${product.title} has been added to the wishlist!`);
  };

// const KitchenCard = ({ kitchen }) => {
//   if (!kitchen) {
//     return null;
//   }

//   return (
  const KitchenCard = ({ kitchen }) => (
    kitchen ? (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 6px blue"}}>
        <img src={kitchen.thumbnail} style={{width:"250px",height:"180px"}} className="card-img-top" alt={`${kitchen.title} Poster`} />
        <div className="card-body">
          <h5 className="card-title">{kitchen.title}</h5>
          <p className="card-text"><strong>Category:</strong> {kitchen.category}</p>
          <p className="card-text"><strong>Price:</strong> ${kitchen.price}</p>
          <p className="card-text"><strong>Rating:</strong> {kitchen.rating}</p>
          <button onClick={() => handleAddToCart(kitchen)} className="btn btn-primary" style={{width:"60px"}}>Bag</button>
            <button onClick={() => handleAddToWishlist(kitchen)} className="btn btn-danger ms-2" style={{width:"95px"}}>Wishlist</button>
        </div>
      </div>
    </div>
  ) : null
);



  // if (error) {
  //   return <p>Failed to fetch products</p>;
  // }

  return (
    <div className="container mt-2 bg-primary" style={{width:"100%",height:"465vh"}}>
      <div className="row">
        {Array.isArray(kitchenProducts) && kitchenProducts.map(kitchen => (
          <KitchenCard key={kitchen.id} kitchen={kitchen} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default KitchenList;


