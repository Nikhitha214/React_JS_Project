import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { CartContext } from './CartContext';
import Footer from './Footer';

const KidsList = () => {
  const [kidsProducts, setKidsProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToWishlist,addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://api.apify.com/v2/datasets/tPBhaopAbrETSZMQO/items?clean=true&format=json')
      .then(response => response.json())
      .then(data => {
        setKidsProducts(Array.isArray(data) ? data : []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products');
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

  const KidsCard = ({ kids }) => {
    const { thumbnailImage, title, brand, price, stars } = kids;

    return (
      <div className="col">
        <div className="card" style={{ boxShadow: "0px 0px 5px orange" }}>
          <img src={thumbnailImage} style={{ width: "250px", height: "180px" }} className="card-img-top" alt={`${title} Poster`} />
          <div className="card-body">
            <p className="card-text"><strong>Brand:</strong> {brand}</p>
            <p className="card-text">
              <strong>Price:</strong> {price ? `${price.value} ${price.currency}` : 'N/A'}
            </p>
            <p className="card-text"><strong>Stars:</strong> {stars}</p>
            <button onClick={() => handleAddToCart(kids)} className="btn btn-primary ms-2" style={{ width: "60px" }}>Bag</button>
            <button onClick={() => handleAddToWishlist(kids)} className="btn btn-danger ms-2" style={{width:"95px"}}>Wishlist</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-2" style={{ width: "100%", height: "675vh", backgroundImage: "linear-gradient(50deg, rgb(19, 183, 224), rgb(240, 12, 137))" }}>
      <div className="row">
        {kidsProducts.length > 0 ? (
          kidsProducts.map(kids => (
            <KidsCard key={kids.id} kids={kids} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default KidsList;







// import React, { useEffect, useState, useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { toast } from 'react-toastify';
// import { CartContext } from './CartContext';
// import Footer from './Footer';
// const KidsList = () => {
//   const [kidsProducts, setKidsProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const { addToCart, addToWishlist } = useContext(CartContext);

//   useEffect(() => {
//     fetch('https://api.apify.com/v2/datasets/tPBhaopAbrETSZMQO/items?clean=true&format=json')
//       .then(response => response.json())
//       .then(data => {
//         console.log('API Response:', data); 
//         setKidsProducts(Array.isArray(data) ? data : []); 
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError('Failed to fetch products'); 
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     toast.success(`${product.title} has been added to the cart!`);
//   };

//   const handleAddToWishlist = (product) => {
//     addToWishlist(product);
//     toast.success(`${product.title} has been added to the wishlist!`);
//   };


// //   if (error) {
// //     return <p>{error}</p>; 
// //   }


// // const KidsCard = ({ kids }) => {
// //   if (!kids) {
// //     return null;
// //   }

// //   // Destructuring product properties based on assumed API response structure
//   //  const { thumbnailImage, title, brand, price, stars } = kids;

// //   return (
//   const KidsCard = ({ kids }) => {
//     const { thumbnailImage, title, brand, price, stars } = kids;

//     return (
//     <div className="col">
//       <div className="card" style={{boxShadow:"0px 0px 5px orange"}}>
//         <img src={thumbnailImage} style={{width:"250px",height:"180px"}} className="card-img-top" alt={`${title} Poster`} />
//         <div className="card-body">
//           {/* <h5 className="card-title">{title}</h5> */}
//           <p className="card-text"><strong>Category:</strong> {brand}</p>
//           <p className="card-text">
//             <strong>Price:</strong> {price ? `${price.value} ${price.currency}` : 'N/A'}
//           </p>
//           <p className="card-text"><strong>Stars:</strong> {stars}</p>
//          <button onClick={() => handleAddToCart(kids)} className="btn btn-primary" style={{width:"60px"}}>Bag</button>
//          <button onClick={() => handleAddToWishlist(kids)} className="btn btn-secondary ms-2" style={{width:"95px"}}>Wishlist</button>
//         </div>
//       </div>
//     </div>
//   );
// };


//   return (
//     <div className="container mt-2" style={{width:"100%",height:"675vh",backgroundImage: "linear-gradient(50deg,rgb(19, 183, 224),rgb(240, 12, 137))"}}>
//       <div className="row">
//         {kidsProducts.length > 0 ? (
//           kidsProducts.map(kids => (
//             <KidsCard key={kids.id} kids={kids} /> 
//           ))
//         ) : (
//           <p>No products available</p> 
//         )}
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default KidsList;
// KidsList.js
