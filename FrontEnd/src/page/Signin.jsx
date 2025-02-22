import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../componentCSS/Signin.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import gradbg from '../images/Screenshot 2024-11-05 154810.png';
import TaskAnimation from '../components/TaskAnimation';
import toast from 'react-hot-toast'

const WaveLoader = () => (
  <div className="spinner">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://manageit-5lu4.onrender.com/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        const userUpdate = async () => {
          try {
            const token = localStorage.getItem('token');
            const getAuthHeaders = () => ({
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            const userInfoResponse = await axios.get('https://manageit-5lu4.onrender.com/userInfo', getAuthHeaders());
            const { userName, email, _id } = userInfoResponse.data;
            setUser({ userName, email, _id });
            localStorage.setItem('userName', userName);
            localStorage.setItem('email', email);
            localStorage.setItem('_id', _id);
            toast.success('Signed in successfully', { duration: 3000 });
            setRedirect(true);
          } catch (error) {
            setMessage('Failed to fetch user info. Please try again.');
          }
        };
        await userUpdate();
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('Login failed. Please try again.');
      toast.error('Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to="/Home" />;
  }

  return (
    <div style={{ display: 'flex', columnGap: '0px' }}>
      <div className="signup-container">
        <div className="heading">
          <TaskAnimation />
        </div>
        <div className="formStyle">
          <h2 style={{ fontSize: '35px', color: "#26306e", fontWeight: '100', textAlign: 'left', marginTop: '40px' }}>
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button className="signinbtn" type="submit" disabled={isLoading}>
              {isLoading ? <WaveLoader /> : "Sign In"}
            </button>
          </form>
        </div>
        {message && <p>{message}</p>}
      </div>
      <div className="signinImage" style={{ margin: '100px auto', marginLeft: '0px' }}>
        <img 
          src={gradbg} 
          alt="background" 
          style={{ height: '800px', width: '600px', borderRadius: "0px 15px 15px 0px" }} 
        />
      </div>
    </div>
  );
};

export default Login;
