import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

  const ElectronicCard = ({ electronic }) => {
  if (!electronic) {
    return null;
  }

  return (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 6px blue"}}>
        <img src={electronic.thumbnail} style={{width:"250px",height:"170px"}} className="card-img-top" alt={`${electronic.title} Poster`} />
        <div className="card-body">
          <h5 className="card-title">{electronic.title}</h5>
          <p className="card-text"><strong>Category:</strong> {electronic.category}</p>
          <p className="card-text"><strong>Price:</strong> ${electronic.price}</p>
          <p className="card-text"><strong>Rating:</strong> {electronic.rating}</p>
        </div>
      </div>
    </div>
  );
};

const ElectronicList = () => {
  const [electronicProducts, setElectronicProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://dummyjson.com/products/category/laptops'),
          fetch('https://dummyjson.com/products/category/mobile-accessories'),
          fetch('https://dummyjson.com/products/category/tablets')

        ]);

        const data = await Promise.all(responses.map(response => response.json()));

        const combinedProducts = [
          ...(data[0].products || []),
          ...(data[1].products || []),
          ...(data[2].products || [])

        ];

        console.log('Combined API Response:', combinedProducts);
        setElectronicProducts(combinedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Failed to fetch products</p>;
  }

  return (
    <div className="container mt-2 bg-warning" style={{width:"100%",height:"365vh"}}>
      <div className="row">
        {Array.isArray(electronicProducts) && electronicProducts.map(electronic => (
          <ElectronicCard key={electronic.id} electronic={electronic} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ElectronicList;

