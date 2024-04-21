import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();

    const loggedinUser = useSelector(state => state.user.userDetails)

    const profilePicLetter = loggedinUser.email[0].toUpperCase();

    console.log("logged in user",loggedinUser);
    console.log("Profile pic letter",profilePicLetter);

    const handleViewProfile = () => {
        setShowProfile(!showProfile);
    }

    const handleUserDeatils = () => {
        navigate(`/user/${loggedinUser.id}`);
        // navigate(`/user/${loggedinUser.user_id}`);
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
                    <div className='profile-letter' onClick={handleViewProfile}>{profilePicLetter}</div>
                    {showProfile && (
                        <div className='options-div'>
                            <div className='view-profile' onClick={handleUserDeatils}>View Profile</div>
                            <div className='view-profile' onClick={handleUserLogout}>Logout</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar