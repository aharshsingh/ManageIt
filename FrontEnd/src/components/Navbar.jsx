import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import '../componentCSS/Nav.css';
import { UserContext } from '../context/UserContext';

export default function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <div className='outer-container1'>
      <div className='inner-container1'>
        {/* <img className='profileImg' src={downimg} alt="profileImage" /> */}
        <p className='userName'>Hi, {user.userName}</p>
      </div>
      <div className='inner-container1'>
        <Link className='link' to="/Dashboard">
          <p className='navBtn' id='name2'>Dashboard</p>
        </Link>
        <Link className='link' to="/AddTask">
          <p className='navBtn' id='name2'>Add Task</p>
        </Link>
        <Link className='link' to="/Home">
          <p className='navBtn' id='name2'>Home</p>
        </Link>
      </div>
    </div>
  );
}
