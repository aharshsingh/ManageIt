import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import '../componentCSS/Nav.css';
import { UserContext } from '../context/UserContext';
import NavDrawer from '../components/NavDrawer';
export default function Navbar() {
  const { user } = useContext(UserContext);
  const userName = user.userName 
  ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1) 
  : '';
  return (
    <div className='outer-container1'>
      <div className='inner-container'>
      <div className='burger-img'>
      < NavDrawer/>
     </div>
        <p className='userName'>Hi, {userName}</p>
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
