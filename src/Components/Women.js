import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

const WomenList = () => {
  const [womenProducts, setwomenProducts] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return <p>Failed to fetch products</p>;
  }

  const WomenCard = ({ women }) => {
  if (!women) {
    return null;
  }

  return (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 8px blue"}}>
        <img src={women.thumbnail} style={{width:"250px",height:"180px"}} className="card-img-top" alt={`${women.title} Poster`} />
        <div className="card-body">
          <h5 className="card-title">{women.title}</h5>
          <p className="card-text"><strong>Category:</strong> {women.category}</p>
          <p className="card-text"><strong>Price:</strong> ${women.price}</p>
          <p className="card-text"><strong>Rating:</strong> {women.rating}</p>
        </div>
      </div>
    </div>
  );
};
return (
  <div className="container bg-danger mt-2" style={{width:"100%",height:"300vh"}}>
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








// import React from "react"

// const Women = () => {


//     return(
//           <div>
//             <h1 class="btn btn-danger btn-rounded-3 mt-4 ms-2">Kurtis</h1>
//         <div className="d-flex justify-content-between mt-3">
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/405833698/qep56_400.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">Black Kurti</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/37963032/emfhi_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Black Kurti</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹1,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/407297947/aok3a_400.webp" />
//                 <p className="text">Brand: H&M</p>
//                 <p className="text">Black Kurti</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/347183558/cyt6w_512.webp" />
//                 <p className="text">Brand: Zara</p>
//                 <p className="text">Kurti</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹4,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>

//         </div>
//         <h1 class="btn btn-danger btn-rounded-3 mt-4 ms-2">Sharara</h1>
//         <div className="d-flex justify-content-between mt-3">
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/391177118/bbsyc_400.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">Black Kurti</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>
//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/376760977/ieamd_400.webp" />
//                 <p className="text">Brand: H&M</p>
//                 <p className="text">Yellow Kurti</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/383804199/uxb2x_400.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">Party Sharara</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/348517000/edazk_400.webp" />
//                 <p className="text">Brand: Zara</p>
//                 <p className="text">Black Kurti</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>
//              </div>
//             </div>
//             <h1 class="btn btn-danger btn-rounded-3 mt-4 ms-2">bridal lehnga</h1>
//         <div className="d-flex justify-content-between mt-3">
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/385814303/rti7i_400.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">Red lehanga</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/424757185/j3ycd_512.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">Red lehanga</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/142826551/edcb8_400.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">Red lehanga</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/370400543/tlndu_512.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">Red lehanga</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             </div>
//             <h1 class="btn btn-danger btn-rounded-3 mt-4 ms-2">Sarees</h1>
//         <div className="d-flex justify-content-between mt-3">
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/161088971/vwajn_400.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">saree</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>
//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/25770599/0fdce_400.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">saree</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/11572449/1c927_400.webp" />
//                 <p className="text">Brand: Avasa</p>
//                 <p className="text">saree</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/417499701/det40_512.webp" />
//                 <p className="text">Brand:zara</p>
//                 <p className="text">saree</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>

//             </div>
   
   
//    </div>
//     )
// }
// export default Wowomen