import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../componentCSS/Nav.css';
import axios from 'axios';

export default function Navbar({ userId }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/userInfo/${userId}`);
        //console.log('Response data:', response.data);
        setUserData(response.data); 
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    if (userId) {
      fetchUserInfo();
    }
  }, [userId]);

  return (
    <div className='outer-container1'>
      <div className='inner-container1'>
        {/* <img className='profileImg' src={downimg} alt="profileImage" /> */}
        <p className='userName'>Hi,<br/>{userData.userName}</p>
      </div>
      <div className='inner-container1'>
        <Link className='link' to="/Dashboard">
          <p className='navBtn' id='name2'>Dashboard</p>
        </Link>
        <Link className='link' to="/AddTask">
          <p className='navBtn' id='name2'>Add Task</p>
        </Link>
        <Link className='link' to="/AddCategory">
          <p className='navBtn' id='name2'>Add Category</p>
        </Link>
      </div>
    </div>
  );
}
