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
        <AddTaskBtn/>
      </div>
    </>
  )
}
