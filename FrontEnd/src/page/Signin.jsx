import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../componentCSS/Signin.css'  
import { Navigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../context/UserContext';
import taskIcon from '../images/images__1_-removebg-preview.png';
import gradbg from '../images/Screenshot 2024-11-05 154810.png';
import TaskAnimation from '../components/TaskAnimation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [userId, setUserId] = useState(null);
  const {user, setUser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://manageit-5lu4.onrender.com/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        // const decodedToken = jwtDecode(token);
        // const { _id } = decodedToken;
        // setUserId(_id);

        const userUpdate = async () => {
          try {
            const token = localStorage.getItem('token');
            const getAuthHeaders = () => ({
              headers: {
              Authorization: `Bearer ${token}`
            }
            });
            const userInfoResponse = await axios.get(`https://manageit-5lu4.onrender.com/userInfo`,getAuthHeaders());
            const { userName, email, _id } = userInfoResponse.data;
            setUser({ userName, email, _id });
            localStorage.setItem('userName', userName);
            localStorage.setItem('email', email);
            localStorage.setItem('_id', _id);
            setRedirect(true);
          } catch (error) {
            console.log(error);
            setMessage('Failed to fetch user info. Please try again.');
          }
        };
        await userUpdate();
      } 

      else {
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
    <div style={{display:'flex', columnGap:'0px'}}>
    <div className="signup-container">
    <div className='heading'>
        <TaskAnimation/>
      </div>
      <div className='formStyle'>
      <h2 style={{fontSize:'35px',color:"#26306e",  fontWeight:'100', textAlign:'left', marginTop:'40px'}}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label >Email</label>
          <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className='signinbtn'  type="submit">Sign In</button>
      </form>
      </div>
      {message && <p>{message}</p>}
    </div>
    <div className='signinImage' style={{margin: '100px auto', marginLeft:'0px'}}>
    <img src={gradbg} alt='iamge' style={{height:'800px', width:'600px', borderRadius: "0px 15px 15px 0px"}}/>
    </div>
    </div>
  );
};

export default Login;
