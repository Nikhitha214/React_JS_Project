import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
const DecorList = () => {
  const [decorProducts, setDecorProducts] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <p>{error}</p>; // Display the error message if fetching fails
  }
const DecorCard = ({ decor }) => {
  if (!decor) {
    return null;
  }

  // Destructuring product properties based on assumed API response structure
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
        </div>
      </div>
    </div>
  );
};


  return (
    <div className="container mt-2 bg-success" style={{width:"100%",height:"675vh"}}>
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

// import 'bootstrap/dist/css/bootstrap.min.css';

// const DecorCard = ({ decor }) => {
//   if (!decor) {
//     return null;
//   }

//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card h-100">
//         <img src={decor.thumbnail} className="card-img-top" alt={`${decor.title} Poster`} />
//         <div className="card-body">
//           <h5 className="card-title">{decor.title}</h5>
//           <p className="card-text"><strong>Category:</strong> {decor.category}</p>
//           <p className="card-text"><strong>Price:</strong> ${decor.price}</p>
//           <p className="card-text"><strong>Rating:</strong> {decor.rating}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DecorList = () => {
//   const [decorProducts, setDecorProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products/category/home-decoration')
//       .then(response => response.json())
//       .then(data => {
//         console.log('API Response:', data); // Log the API response
//         setDecorProducts(data.products || []); // Adjust based on actual response structure
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError(error);
//       });
//   }, []);

//   if (error) {
//     return <p>Failed to fetch products</p>;
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         {Array.isArray(decorProducts) && decorProducts.map(decor => (
//           <DecorCard key={decor.id} decor={decor} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DecorList;
