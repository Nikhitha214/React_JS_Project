import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Wishlist = () => {
  const { wishlist } = useContext(CartContext);

  return (
    <div className="container mt-2">
      <h2>Your Wishlist</h2>
      <div className="row">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((product) => (
            <div key={product.id} className="col">
              <div className="card" style={{ width: "350px", height: "80vh" }}>
                <img src={product.thumbnail} style={{ width: "250px", height: "180px" }} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                  <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                  <p className="card-text"><strong>Brand:</strong> {product.brand}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;


// // import React from "react";

// // const Wishlist = () => {

// //     return(
// // <div>
// //     <img src="https://i.pinimg.com/originals/d1/10/9e/d1109eb492906be4fe4b15850d88b287.png" width="750px" style={{marginLeft:"20%",marginTop:"20px"}} />
// // </div>
// //     )
// // }
// // export default Wishlist
// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const Wishlist = () => {
//   const { wishlist } = useContext(CartContext);

//   return (
//     <div className="container mt-2">
//       <h2>Your Wishlist</h2>
//       <div className="row">
//         {wishlist.length === 0 ? (
//           <p>Your wishlist is empty.</p>
//         ) : (
//           wishlist.map((product, index) => (
//             <div key={index} className="col">
//               <div className="card" style={{ width: "300px", height: "55vh" }}>
//                 <img src={product.thumbnail} style={{ width: "250px", height: "180px" }} className="card-img-top" alt={product.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title}</h5>
//                   <p className="card-text"><strong>Price:</strong> ${product.price}</p>
//                   <p className="card-text"><strong>Category:</strong> {product.category}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;
// Wishlist.js