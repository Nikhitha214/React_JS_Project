import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
const FurnituresList = () => {
  const [furnituresProducts, setFurnituresProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.apify.com/v2/datasets/1W1psZqsXvIaeyvhW/items?clean=true&format=json')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); // Log the API response for debugging
        setFurnituresProducts(Array.isArray(data) ? data : []); // Ensure data is an array
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products'); // Provide a more user-friendly error message
      });
  }, []);

  if (error) {
    return <p>{error}</p>; // Display the error message if fetching fails
  }


const FurnituresCard = ({ furnitures }) => {
  if (!furnitures) {
    return null;
  }

  // Destructuring product properties based on assumed API response structure
  const { thumbnailImage, title, brand, price, stars } = furnitures;

  return (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 5px orange"}}>
        <img src={thumbnailImage} style={{width:"250px",height:"180px"}} className="card-img-top" alt={`${title} Poster`} />
        <div className="card-body">
          {/* <h5 className="card-title">{title}</h5> */}
          <p className="card-text"><strong>Category:</strong> {brand}</p>
          <p className="card-text">
            <strong>Price:</strong> {price ? `${price.value} ${price.currency}` : 'N/A'}
          </p>
          <p className="card-text"><strong>Stars:</strong> {stars}</p>
        </div>
      </div>
    </div>
  );
};


  return (
    <div className="container mt-2 bg-dark" style={{width:"100%",height:"675vh"}}>
      <div className="row">
        {furnituresProducts.length > 0 ? (
          furnituresProducts.map(furnitures => (
            <FurnituresCard key={furnitures.id} furnitures={furnitures} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default FurnituresList;
