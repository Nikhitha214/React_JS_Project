import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
const KidsList = () => {
  const [kidsProducts, setKidsProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.apify.com/v2/datasets/tPBhaopAbrETSZMQO/items?clean=true&format=json')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); 
        setKidsProducts(Array.isArray(data) ? data : []); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products'); 
      });
  }, []);

  if (error) {
    return <p>{error}</p>; 
  }


const KidsCard = ({ kids }) => {
  if (!kids) {
    return null;
  }

  // Destructuring product properties based on assumed API response structure
  const { thumbnailImage, title, brand, price, stars } = kids;

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
    <div className="container mt-2" style={{width:"100%",height:"675vh",backgroundImage: "linear-gradient(50deg,rgb(19, 183, 224),rgb(240, 12, 137))"}}>
      <div className="row">
        {kidsProducts.length > 0 ? (
          kidsProducts.map(kids => (
            <KidsCard key={kids.id} kids={kids} /> 
          ))
        ) : (
          <p>No products available</p> 
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default KidsList;
