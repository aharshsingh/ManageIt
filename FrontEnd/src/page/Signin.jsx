import React, { useState } from 'react';
import axios from 'axios';
import '../componentCSS/Signin.css'  
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [userId, setUserId] = useState(null);
  const verifyToken = async (token) => {
    try {
      const response = await axios.post('http://localhost:7000/verify', { jwtToken: token });
      if (response.status === 200) {
        setMessage('Login successful!');
        setRedirect(true); // Set redirect to true on successful login
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('Token verification failed. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/login', {
        email,
        password,
      });
      console.log(response.data);
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        await verifyToken(token);
        const decodedToken = jwtDecode(token);
        const { _id } = decodedToken;
        setUserId(_id);
        // console.log(decodedToken);
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('Login failed. Please try again.');
    }
  };

  if (redirect) {
    return <Navigate to="/Home" state={ {userId} } />;
  }

  return (
    <div className="login-container">
      <h2 >Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Email</label>
          <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
