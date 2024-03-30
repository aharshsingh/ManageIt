import React from 'react';
import {Link} from 'react-router-dom'; 
import '../componentCSS/Nav.css'
// import downimg from '../photo/caret-down-solid.svg'
// import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar() {
  return (
    <>
    <div className='outer-container1'>
    <div className='inner-container1'>
    {/* <img className='profileImg' src={downimg} alt="profileImage" /> */}
    <p className='userName'>Hi,<br/>Aharsh Singh</p>
    </div>
    {/* {isAuthenticated && <img className='profile-img' src={user.picture} alt={user.name} />} */}
    {/* <Link className='link' to="/Profile">{ isAuthenticated && <p className='name' id='name1'>{user.name}</p>}</Link> */}
    <div className='inner-container1'>
    <Link className='link' to="/Dashboard"><p className='navBtn' id='name2'>Dashboard</p></Link>
    <Link className='link' to="/AddTask"><p className='navBtn' id='name2'>Add Task</p></Link>
    <Link className='link' to="/AddCategory"><p className='navBtn' id='name2'>Add Category</p></Link>
    </div>
    </div>
    </>
  )
}
