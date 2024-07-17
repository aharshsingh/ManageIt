import React from 'react'
import Navbar from '../components/Navbar'
import AddTaskBtn from '../components/AddTaskBtn'
import { useLocation } from 'react-router-dom'
import '../componentCSS/Home.css'
export default function Home() {
  const location = useLocation();
  const { userId } = location.state || {};
  return (
    <>
      <Navbar userId = {userId}/>
      <div className='homeContainer'>
      <p className='filler'>"Effortlessly organize tasks, prioritize your day, <br/>and boost productivity with our intuitive task manager app."</p>
      <div className='addTaskBtnPos'><AddTaskBtn/></div>
      </div>
    </>
  )
}
