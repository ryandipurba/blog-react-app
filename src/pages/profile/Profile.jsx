import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './profile.css'

export default function Profile() {
    return (
        <div className='row'>
            <div className="col-md-9 mt-4">
                <div className="profile">
                    <div className="profile-wrapper">
                        <div className="profile-title">
                            <span className="profile-title-update">Update Your Account</span>
                            {/* <span className="profile-title-delete">Delete Account</span> */}
                        </div>
                        <form action="" className='profile-form'>
                            <label htmlFor="">Profile Picture</label>
                            <div className="setting-pp">
                                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            </div>
                            <label htmlFor="file-input">
                                <i class="setting-pp-icon fas fa-user"></i>
                            </label>
                            <input type="file" name="" id="input-file" style={{display:'none'}} className='setting-pp-input'/>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder='Ryandi' name='username' />
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Ryandi' name='email' />
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Ryandi' name='password' />
                            <button className='btn-submit' type='submit'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <Sidebar/>
            </div>
        </div>
    )
}
