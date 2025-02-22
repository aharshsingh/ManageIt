import React, { useState } from 'react';
import axios from 'axios';
import '../componentCSS/Signup.css';  
import { Navigate, Link } from 'react-router-dom';
import gradbg from '../images/Screenshot 2024-11-05 154810.png';
import TaskAnimation from '../components/TaskAnimation';
import toast from 'react-hot-toast'

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post('https://manageit-5lu4.onrender.com/register', {
        userName,
        email,
        password,
      });
      if (response.status === 200) {
        setMessage('Sign-up successful!');
        toast.success('Signed up successfully');
        setRedirect(true);
      } else {
        setMessage('Sign-up failed. Please try again.');
      }
    } catch (error) {
      setMessage('Sign-up failed. Please try again.');
      toast.error('Failed to sign up');
    } finally {
      setLoading(false); 
    }
  };

  if (redirect) {
    return <Navigate to="/Signin"/>;
  }

  return (
    <div style={{ display: 'flex', columnGap: '0px' }}>
      <div className="signup-container">
        <div className='heading'>
          <TaskAnimation/>
        </div>
        <div className='formStyle'>
          <h2 style={{ fontSize: '35px', color: "#26306e", fontWeight: '100', textAlign: 'left', marginTop: '40px' }}>
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p style={{ fontSize: '15px', marginTop: '20px', color: "#26306e", textAlign: 'left', opacity: '0.65' }}>
                Create an account and start today. Every task completed brings you one step closer to your goals.
              </p>
              <label style={{ marginTop: '25px' }}>Username</label>
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className='signupbtn' type="submit" disabled={loading}>
              {loading ? (
                // Loading spinner example (CSS-based)
                <div className="spinner" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <div className="bounce1" style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'sk-bouncedelay 1.4s infinite ease-in-out',
                    animationDelay: '-0.32s',
                    marginRight: '5px'
                  }}></div>
                  <div className="bounce2" style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'sk-bouncedelay 1.4s infinite ease-in-out',
                    animationDelay: '-0.16s',
                    marginRight: '5px'
                  }}></div>
                  <div className="bounce3" style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'sk-bouncedelay 1.4s infinite ease-in-out'
                  }}></div>
                </div>
              ) : (
                'Sign Up'
              )}
            </button>
            <Link to='/Signin' className='login'>
              <p className='alreadyLogin' style={{ fontSize: '15px', marginTop: '20px', color: "#26306e" }}>
                Already Signed Up? Login
              </p>
            </Link>
          </form>
        </div>
        {message && <p>{message}</p>}
      </div>
      <div className='signinImage' style={{ margin: '100px auto', marginLeft: '0px' }}>
        <img src={gradbg} alt='background' style={{ height: '800px', width: '600px', borderRadius: "0px 15px 15px 0px" }}/>
      </div>
    </div>
  );
};

export default SignUp;
