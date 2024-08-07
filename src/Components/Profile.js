import React, { useState, useEffect } from "react";
import './profile.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [activeSection, setActiveSection] = useState('profile'); // Manage which section is active

    useEffect(() => {
        // Fetch user data from API
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                // Assuming we want the first user in the list
                if (data && data.users && data.users.length > 0) {
                    setUserData(data.users[0]); // Get the first user
                }
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const handleLogout = () => {
        console.log("User logged out");
        setActiveSection('login'); // Show login screen after logout
    };

    return (
        <div className="profile-container">
            <div className="sidebar">
                <div onClick={() => handleSectionClick('profile')}><i className="bi bi-person-circle"></i> My Profile</div>
                <div onClick={() => handleSectionClick('address')}><i className="bi bi-geo-alt"></i> Delivery Address</div>
                <div onClick={() => handleSectionClick('orders')}><i className="bi bi-box2-heart-fill"></i> My Orders</div>
                <div onClick={() => handleSectionClick('viewed')}><i className="bi bi-search"></i> Recently Viewed</div>
                <div onClick={() => handleSectionClick('password')}><i className="bi bi-file-lock2"></i> Change Password</div>
                <div onClick={handleLogout}><i className="bi bi-power"></i> Logout</div>
            </div>
            {activeSection === 'profile' && userData && (
                <div className="profile-details">
                    <h2>User Details</h2>
                    <img src={userData.image} alt="Profile" className="profile-picture" />
                    <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone:</strong> {userData.phone}</p>
                </div>
            )}
            {activeSection === 'address' && userData && (
                <div className="profile-details">
                    <h2>Delivery Address</h2>
                    <p><strong>Address:</strong> {userData.address?.address}</p>
                    <p><strong>City:</strong> {userData.address?.city}</p>
                    <p><strong>State:</strong> {userData.address?.state}</p>
                    <p><strong>Postal Code:</strong> {userData.address?.postalCode}</p>
                    <p><strong>Country:</strong> {userData.address?.country}</p>
                </div>
            )}
            {activeSection === 'orders' && (
                <div className="profile-details">
                    <h2>My Orders</h2>
                    {/* Render order details here */}
                    <p>Order history will be displayed here.</p>
                </div>
            )}
            {activeSection === 'viewed' && (
                <div className="profile-details">
                    <h2>Recently Viewed</h2>
                    
                    <p>Recently viewed products will be displayed here.</p>
                </div>
            )}
            {activeSection === 'password' && (
                <div className="profile-details">
                    <h2>Change Password</h2>
                    
                    <p>Password change form will be displayed here.</p>
                </div>
            )}
            {activeSection === 'login' && (
                <div className="profile-details">
                    <h2>Login</h2>
                    
                    <p>Login form will be displayed here.</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
