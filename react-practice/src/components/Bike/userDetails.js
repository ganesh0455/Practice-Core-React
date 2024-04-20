import React from 'react'
import { user_Empty_Image } from '../../constants'

const UserDetails = () => {
  return (
    <div className='user-details-container'>
        <div className='user-details'>
            {/* <div className='user-profile-letter'>
                <img className='user-empty-img' src={user_Empty_Image} alt='user-img'/>
            </div> */}
            <h3 className='user-name-heading'>Ganesh V</h3>
            <span className='other-user-details'><b>Designation :</b>  Associate developer</span>
            <span className='other-user-details'><b>Email :</b>  ganesh123@gmail.com</span>
            <span className='other-user-details'><b>Phone No. :</b>  6303620942</span>
        </div>
    </div>
  )
}

export default UserDetails