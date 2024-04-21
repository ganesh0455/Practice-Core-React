import React, { useEffect, useState } from 'react'
import { user_Empty_Image } from '../../constants'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();

  const fetchUserDetails = async () => {
    const apiURL = `http://127.0.0.1:8000/team/${id}`;
    const options = {
      method: 'GET',
    }

    try{
      const response = await fetch(apiURL, options);
      const data = await response.json();

      setUserDetails(data);
    }
    catch(err){

    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, [])

  console.log("id==", id);

  return (
    <div className='user-details-container'>
      <div className='user-details'>
        <div className='user-profile-letter'>
                <img className='user-empty-img' src={userDetails.image} alt='user-img'/>
            </div>
        {/* <h3 className='user-name-heading'>Ganesh V</h3>
        <span className='other-user-details'><b>Designation :</b>  Associate developer</span>
        <span className='other-user-details'><b>Email :</b>  ganesh123@gmail.com</span>
        <span className='other-user-details'><b>Phone No. :</b>  6303620942</span> */}
        <h3 className='user-name-heading'>{userDetails.first_name + userDetails.last_name}</h3>
        <span className='other-user-details'><b>Designation :</b>  {userDetails.designation}</span>
        <span className='other-user-details'><b>Email :</b>  {userDetails.email}</span>
        <span className='other-user-details'><b>Phone No. :</b>  {userDetails.phone_number}</span>
      </div>
    </div>
  )
}

export default UserDetails