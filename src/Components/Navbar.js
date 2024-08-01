import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Men.css';

const Navbar = () => {
    const [showSlider, setShowSlider] = useState(true);
    const [showContent, setShowContent] = useState(true);
    

    const handleMenuClick = () => {
        setShowSlider(false);
        setShowContent(false);
        
    };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    const [slidesVisible, setSlidesVisible] = useState(true);
    const hideSlides = () => {
        setSlidesVisible(false);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://i.postimg.cc/jq9pVCPt/images-removebg-preview-1.png" width="100px" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-lg-0 navbar-nav-scroll" style={{ height: "100px" }}>
                            <li className="text1">
                                <Link to="/Men">Men</Link>
                            </li>
                            <li className="text1">
                                <Link to="/Women" onClick={handleMenuClick}>Women</Link>
                            </li>
                            <li className="text1">
                                <Link to="/Kids" onClick={handleMenuClick}>Kids</Link>
                            </li>
                            <li className="text1">
                                <Link to="/Beauty" onClick={handleMenuClick}>Beauty</Link>
                            </li>
                            <li className="text1">
                                <Link to="/HomeDecor" onClick={handleMenuClick}>DecorItems</Link>
                            </li>
                            <li className="text1">
                                <Link to="/KitchenItems" onClick={handleMenuClick}>KitchenItems</Link>
                            </li>
                            <li className="text1">
                                <Link to="/Electronic" onClick={handleMenuClick}>ElectronicGadgets</Link>
                            </li>
                            <li className="text1">
                                <Link to="/Furnitures" onClick={handleMenuClick}>Furnitures</Link>
                            </li>
                            <div className="icons">
                            <li className="text1">
                                <Link to="/Login" onClick={handleMenuClick}>LOGIN</Link>
                            </li>
                            <li className="icon">
                            <Link to="/Bag" onClick={handleMenuClick}><i className="bi bi-bag"></i></Link>
                            </li>
                            <li className="icon">
                            <Link to="/Wishlist" onClick={handleMenuClick}><i className="bi bi-heart"></i></Link>
                            </li>
                            <li className="icon">
                            <Link to="/Profile" onClick={handleMenuClick}><i class="bi bi-person-circle"></i></Link>
                            </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

            {showContent && showSlider && (
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <center style={{ marginTop: "20px" }}>
                                <img width="60%" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb1d8d2a4/images/TrendingFinal_Men_M.jpg" />
                            </center>
                        </div>
                        <div>
                            <center>
                                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clothing-store-banner-design-template-e7332aaf6402c88cb4623bf8eb6f97e2_screen.jpg?ts=1620867237" width="60%" style={{ marginTop: "20px" }} />
                            </center>
                        </div>
                        <div>
                            <center style={{ marginTop: "20px" }}>
                                <img src="https://img.freepik.com/free-vector/gradient-horizontal-banner-template-cyber-monday-sale_23-2150842096.jpg" width="60%" />
                            </center>
                        </div>
                        <div>
                            <center style={{ marginTop: "20px" }}>
                                <img src="https://www.batabd.com/cdn/shop/files/newsletter_558x296.jpg" width="60%" />
                            </center>
                        </div>
                        <div>
                            <center style={{ marginTop: "20px" }}>
                                <img src="https://hometown.gumlet.io/media/cms/icons/small-banner_figurines.jpg?w=200&dpr=2.6" width="60%" />
                            </center>
                        </div>
                        <div>
                            <center style={{ marginTop: "20px" }}>
                                <img src="https://www.brainvire.com/wp/wp-content/uploads/2021/12/BV_PR_2-XL_Banner.jpg" width="80%" />
                            </center>
                        </div>
                    </Slider>
                </div>
            )}
            {showContent && (
                <div className="Images">
                    <div className="d-flex justify-content-between mt-3">
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/8/t/l-mk-tsrt-03-makemode-original-imagnn48gqzukfp8.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">50% Offer <br/> on T-shitrs </h4>
                          </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/l3t2fm80/shirt/8/b/y/s-r-pink-stoneberg-original-imageum2prwjjpch.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">20% Offer <br/> on Formal shitrs </h4>
                          </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/ksw4ccw0/watch/6/b/c/38024pp25-fastrack-men-original-imag6cu9xkhbgz4y.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">10% Offer <br/> on Watches </h4>
                          </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/3/n/v/m-k22566-chikuwine-the-hope-original-imagrt9kzfk3mdbr.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">50% Offer <br/> on Kurta sets </h4>
                       </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/xif0q/gown/q/g/8/180-xl-short-sleeve-stitched-pista-zardeep-720-original-imah2gj2zdhuyfdb.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">25% Offer <br/> on Frocks </h4>
                       </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/xif0q/doll-doll-house/f/x/2/realistic-three-sister-dolls-with-fancy-dress-movable-body-parts-original-imahfm7sffyzy6mg.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">15% Offer <br/> on Toys </h4>
                       </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/xif0q/bag/8/u/x/15-kids-soft-animal-cartoon-velvet-plush-school-bag-fullbodypink-original-imagrwgjsn7gcgpg.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">10% Offer <br/> on school Bags </h4>
                       </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/xif0q/wall-decoration/s/f/x/elegent-wooden-designer-square-islamic-wall-hanging-for-office-original-imagseytdc8fzxj6.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">5% Offer <br/> on Home Decor </h4>
                       </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/kjuby4w0/sofa-sectional/f/u/x/symmetrical-cream-cushion-cotton-mk-ee14-mk-furniture-honey-original-imafzbmy4f8p6z6c.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">25% Offer <br/> on Furnitures </h4>
                       </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPR83RkbQiomKOmSuy8zFmQa7mbjPeM-FhoBqP6_nEt7Ctt4f-XpsiGq_PJTot3EKVXM&usqp=CAU" />
                            <div className="offers">
                            <h4 className="text2">15% Offer <br/> on beauty Products </h4>
                       </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDz25om02i8hI_oOD3a0kxclLQjhRWqT7FA&usqp=CAU" />
                            <div className="offers">
                            <h4 className="text2">30% Offer <br/> on Electronic Gadgets</h4>
                       </div>
                        </div>
                        <div className="first">
                            <img className="img1" src="https://rukminim2.flixcart.com/image/612/612/xif0q/oil-dispenser/h/s/k/jg-500-ml-cooking-oil-dispenser-set-pack-of-7-jay-gatrad-seller-original-imahygag792z7t4y.jpeg?q=70" />
                            <div className="offers">
                            <h4 className="text2">5% Offer <br/> on Kitchen Items </h4>
                       </div>
                        </div>
                    </div>
                </div>
            )}
            {showContent && (
                <div style={{ backgroundColor: "#cf44b3", width: "100%", height: "100vh", marginTop: "10%" }}>
                    <div className="last">
                        <div className="online mt-3 ms-4">
                            <h5>ONLINE SHOPPING</h5>
                            <p>Men</p>
                            <p>Women</p>
                            <p>Decor Items</p>
                            <p>Beauty</p>
                            <p>Kitchen Items</p>
                            <p>Electronic Gadgets</p>
                        </div>
                        <div className="Customer mt-3 ms-2">
                            <h5>CUSTOMER POLICIES</h5>
                            <p>Contact Us</p>
                            <p>FAQ</p>
                            <p>T&C</p>
                            <p>Terms Of Use</p>
                            <p>Track Orders</p>
                            <p>Shipping</p>
                            <p>Cancellation</p>
                            <p>Returns</p>
                            <p>Privacy policy</p>
                            <p>Grievance Officer</p>
                        </div>
                        <div className="EXPERIENCE mt-4 ">
                            <h5>EXPERIENCE NS APP ON MOBILE</h5>
                            <div className="images">
                                <img src="https://i.postimg.cc/s2KDVc03/download-removebg-preview.png" width="180px" style={{ marginTop: "-50px" }} />
                                <img src="https://i.postimg.cc/N0VN3h7T/apple-removebg-preview.png" width="200px" style={{ marginLeft: "-30px", marginTop: "-50px" }} />
                                <h6>KEEP IN TOUCH</h6>
                                <img src="https://i.postimg.cc/yxTKx77g/360-F-398033725-a-Fl98na-HWJPy-Ww-R3-If-Nn-B8a5qo-Ttsp3-J-removebg-preview.png" width="200px" />
                            </div>
                        </div>
                        <div className="online mt-4">
                            <img src="https://i.postimg.cc/5jd684zx/original-grunge-stamp-white-background-original-stamp-104606476-removebg-preview.png" width="60px" style={{ marginLeft: "-80px" }} />
                            <span><strong>100% ORIGINAL</strong> guarantee for <br /> all products at NS.com</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-between">
                        <h6 className="ms-3">Incase of any concern,<span style={{ color: "blue" }}>Contat Us</span></h6>
                        <p>© 2024 www.NS.com. All rights reserved.</p>
                        <p>NS Company</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h5 className="ms-3">ONLINE SHOPPING MADE EASY AT NS</h5>
                        <p className="ms-2">If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

