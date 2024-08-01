import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Men.css'
import Footer from "./Footer";
const MenList = () => {
  const [menProducts, setmenProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://dummyjson.com/products/category/mens-shirts'),
          fetch('https://dummyjson.com/products/category/mens-watches'),
          fetch('https://dummyjson.com/products/category/mens-shoes'),
          fetch('https://dummyjson.com/products/category/sunglasses')
        ]);

        const data = await Promise.all(responses.map(response => response.json()));

        const combinedProducts = [
          ...(data[0].products || []),
          ...(data[1].products || []),
          ...(data[2].products || []),
          ...(data[3].products || [])

        ];

        console.log('Combined API Response:', combinedProducts);
        setmenProducts(combinedProducts);
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
  const MenCard = ({ men }) => {
  if (!men) {
    return null;
  }

  return (
    <div className="col">
      <div className="card" style={{boxShadow:"0px 0px 10px red"}}>
        <img src={men.thumbnail} style={{width:"250px",height:"180px"}} className="card-img-top" alt={`${men.title} Poster`} />
        <div className="card-body">
          <p className="card-title">{men.title}</p>
          <p className="card-text"><strong>Category:</strong> {men.category}</p>
          <p className="card-text"><strong>Price:</strong> ${men.price}</p>
          <p className="card-text"><strong>Rating:</strong> {men.rating}</p>
        </div>
      </div>
    </div>
  );
};



  return (
    <div className="container bg-info mt-2" style={{width:"100%",height:"380vh"}}>
      <div className="row">
        {Array.isArray(menProducts) && menProducts.map(men => (
          <MenCard key={men.id} men={men} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default MenList;


// import React from "react";
// import './Men.css';
// const Men = () => {
//     return (
//          <div>
//             <h1 class="btn btn-danger btn-rounded-3 mt-4 ms-2">Shirts</h1>
//         <div className="d-flex justify-content-between mt-3">
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/383326664/j1bhy_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>

//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/336129967/g4sjd_400.webp" />
//                 <p className="text">Brand: KRYPTIC</p>
//                 <p className="text">VDLooks Man Shirt</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 4.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹1,739.00</h2>
//                 <p>M.R.P:<del>₹2,190.00</del>(3% off)</p>
//             </div>

//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/216426123/e1q4g_400.webp" />
//                 <p className="text">Brand: RARE RABBIT</p>
//                 <p className="text">Formal Shirts (combo)</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 5.0<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2000.00</h2>
//                 <p>M.R.P:<del>₹4,190.00</del>(5% off)</p>
//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/384522754/v8pej_512.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Check shirt for men</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹739.00</h2>
//                 <p>M.R.P:<del>₹1,190.00</del>(3% off)</p>
//             </div>
//         </div>

//         <h1 class="btn btn-danger btn-rounded-3 mt-4 ms-2">T-Shirts</h1>
//         <div className="d-flex justify-content-between mt-3">
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/379440051/9z5no_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/390474112/swbpx_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/340630561/sgldf_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/59172403/eca4a_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>
//             </div>
//         </div>

//         <h1 class="btn btn-danger btn-rounded-3 mt-4 ms-2">Traditional Wear</h1>
//         <div className="d-flex justify-content-between mt-3">
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/407017831/yelqf_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Unique men Kurtas</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>

//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/270397076/drhfa_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">White kurta</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
            
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/330408608/ya00j_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Urbarane orange Kurta</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
            
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/315384928/vk0bw_512.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Traditional<br></br> Dhoti</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             </div>
//             <h1 class="btn btn-danger btn-rounded-3 mt-4 ms-2">Watches</h1>
//         <div className="d-flex justify-content-between mt-3">
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/224744888/vxchf_400.webp" />
//                 <p className="text">Brand: TITAN</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/13785814/a191e_400.webp" />
//                 <p className="text">Brand: FASTTRACK</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/378538358/26ypw_400.webp" />
//                 <p className="text">Brand: GENZ</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>
//             <div className="first">
//                 <img className="img1" src="https://images.meesho.com/images/products/13642934/b23ac_400.webp" />
//                 <p className="text">Brand: ANOUK</p>
//                 <p className="text">Cotton Blend Short<br></br> sleeves Striped</p>
//                 <button class="btn btn-primary btn-rounded-2">Rating : 3.9<span className="fa fa-star checked"></span></button>
//                 <h2>Price: ₹2,739.00</h2>
//                 <p>M.R.P:<del>₹3,190.00</del>(3% off)</p>

//             </div>






//             </div>

// </div>
//     )
// }
// export default Men
