import React, { useState } from 'react';
import axios from 'axios';
import '../componentCSS/Signup.css';  
import { Navigate } from 'react-router-dom';

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
    <div className="signup-container">
      <h2 >Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Username</label>
          <input  type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label >Email</label>
          <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
