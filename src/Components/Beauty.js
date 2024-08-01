import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
const BeautyList = () => {
  const [beautyProducts, setbeautyProducts] = useState([]);
  const [error, setError] = useState(null);

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
        setbeautyProducts(combinedProducts);
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

  const BeautyCard = ({ beauty }) => {
  if (!beauty) {
    return null;
  }

  return (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 5px blue"}}>
        <img src={beauty.thumbnail} style={{width:"250px",height:"180px"}} className="card-img-top" alt={`${beauty.title} Poster`} />
        <div className="card-body">
          <h5 className="card-title">{beauty.title}</h5>
          <p className="card-text"><strong>Category:</strong> {beauty.category}</p>
          <p className="card-text"><strong>Price:</strong> ${beauty.price}</p>
          <p className="card-text"><strong>Rating:</strong> {beauty.rating}</p>
        </div>
      </div>
    </div>
  );
};


  return (
    <div className="container mt-2 bg-danger" style={{width:"100%",height:"250vh"}}>
      <div className="row">
        {Array.isArray(beautyProducts) && beautyProducts.map(beauty => (
          <BeautyCard key={beauty.id} beauty={beauty} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default BeautyList;

