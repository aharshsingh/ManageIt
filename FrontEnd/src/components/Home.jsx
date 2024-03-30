import React from 'react'
import Navbar from './Navbar'
import AddTaskBtn from './AddTaskBtn'
import '../componentCSS/Home.css'
export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='homeContainer'>
      <p className='filler'>"Effortlessly organize tasks, prioritize your day, <br/>and boost productivity with our intuitive task manager app."</p>
      <div className='addTaskBtnPos'><AddTaskBtn/></div>
      </div>
    </>
  )
}
