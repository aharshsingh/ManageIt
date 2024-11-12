import React from 'react'
import Navbar from '../components/Navbar'
import AddTaskBtn from '../components/AddTaskBtn'
import '../componentCSS/Home.css';
import LottieAnimation from '../components/Animation';
export default function Home() {

  return (
    <>
      <Navbar/>
      <div className='homeContainer'>
        <LottieAnimation/>
        <div>
          <p className='homeQuote'>Stay Organised<br/>Achieve More</p>
          <p className='homePara'>Receive reminders and stay up-to-date on upcoming tasks and deadlines</p>
          <AddTaskBtn/>
        </div>
      </div>
    </>
  )
}
