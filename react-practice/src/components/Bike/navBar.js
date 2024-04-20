import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();
    const handleViewProfile = () => {
        setShowProfile(!showProfile);
    }

    const handleUser = () => {
        navigate("/user");
    }

    const handleHome = () => {
        navigate("/bikeList");
    }

    const handleUserLogout = () => {
        navigate("/login");
    }

    return (
        <div className='navbar bg-base-100'>
            <div className='logo-img' onClick={handleHome}>
                Bike Logo
            </div>
            <div className='profile-container'>
                <div className='profile-div'>
                    <div className='profile-letter' onClick={handleViewProfile}>G</div>
                    {showProfile && <div className='view-profile' onClick={handleUser}>View Profile</div>}
                    {showProfile && <div className='view-profile' onClick={handleUserLogout}>Logout</div>}
                </div>
            </div>
        </div>
    )
}

export default NavBar