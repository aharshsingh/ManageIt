import React from 'react'
import Navbar from '../components/Navbar'
import AddTaskBtn from '../components/AddTaskBtn'
import '../componentCSS/Home.css';
import LottieAnimation from '../components/Animation';
import {Link} from 'react-router-dom';
export default function Home() {

  return (
    <>
      <Navbar/>
      <div className='homeContainer'>
        <LottieAnimation/>
        <div>
          <p className='homeQuote'>Stay Organised<br/>Achieve More</p>
          <p className='homePara'>Receive reminders and stay up-to-date on upcoming tasks and deadlines</p>
          <div className='lgDevBtn'>
          <AddTaskBtn/> 
          </div>
          <div className='smDevBtnDiv'>
            <Link to='/addtask'>
            <button className='smDevBtn'>Add Task</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
