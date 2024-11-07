import React, { useState } from 'react';
import axios from 'axios';
import '../componentCSS/Signup.css';  
import { Navigate, Link } from 'react-router-dom';
import taskIcon from '../images/images__1_-removebg-preview.png';
import gradbg from '../images/Screenshot 2024-11-05 154810.png';
const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //debugger;
    try {
      const response = await axios.post('http://localhost:7000/register', {
        userName,
        email,
        password,
      });
      if (response.status === 200) {
        setMessage('Sign-up successful!');
        setRedirect(true);
      } else {
        setMessage('Sign-up failed. Please try again.');
      }
    } catch (error) {
      setMessage('Sign-up failed. Please try again.');
    }
  };
  if (redirect) {
    return <Navigate to="/Signin"/>;
  }

  return (
    <div style={{display:'flex', columnGap:'0px'}}>
    <div className="signup-container">
      <div className='heading'>
        <img className='TaskIcon' src={taskIcon} alt='icon' />
        <p style={{fontSize:'15px',marginTop:'10px'}}>Task Manager</p>
      </div>
      <div className='formStyle'>
      <h2 style={{fontSize:'35px', fontWeight:'100', color:'rgb(56,56,56)', textAlign:'left', marginTop:'40px'}}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <p style={{fontSize:'15px',marginTop:'20px', textAlign:'left', opacity:'0.65'}}>Create an account and Start today. Every task completed brings you one step closer to your goals.</p>
          <label style={{marginTop:'25px'}}>Username</label>
          <input  type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Your username' required />
        </div>
        <div className="form-group" >
          <label >Email</label>
          <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' required />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='************' required />
        </div>
        <button type="submit">Sign Up</button>
        <Link to='/Signin' className='login'><p className='alreadyLogin' style={{fontSize:'15px', marginTop:'20px'}}>Already Signed Up? Login</p></Link>
      </form>
      </div>
      {message && <p>{message}</p>}
    </div>
    <img src={gradbg} alt='iamge' style={{height:'900px', width:'600px', margin: '150px auto', marginLeft:'0px'}}/>
    </div>
  );
};

export default SignUp;
