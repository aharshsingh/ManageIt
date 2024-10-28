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
        <div>
          <p className='filler'>"Effortlessly organize tasks, prioritize your day, <br/>and boost productivity with our intuitive task manager app."</p>
          <div className='addTaskBtnPos'><AddTaskBtn/></div>
          </div>
      <LottieAnimation/>
      </div>
    </>
  )
}
