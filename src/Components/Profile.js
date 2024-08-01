import React from "react";
import './Men.css'

const Profile =() => {
    return(
        <div>
            <div className="side">
             <span><i class="bi bi-person-circle"></i></span><h6>My Profile</h6>
               <span><i class="bi bi-geo-alt"></i></span> <h6>Delivery Address</h6>
                <hr></hr>
               <span><i class="bi bi-box2-heart-fill"></i></span> <h6>My orders</h6>
               <i class="bi bi-filter-square"></i><h6>Top Ordered Products</h6>
                <hr></hr>
                <i class="bi bi-search"></i> <h6>Recently Viewed</h6>
                <hr></hr>
                <i class="bi bi-file-lock2"></i> <h6>Change Password</h6>
                <i class="bi bi-power"></i> <h6>Logout</h6>
            </div>
            
        </div>
    )
}
export default Profile