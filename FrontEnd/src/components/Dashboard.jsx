import React from 'react'
import Navbar from './Navbar'
import Calender from './Calender'
import SubNav from './SubNav'
import AddCategoryBtn from './AddCategoryBtn'
import AddTaskBtn from './AddTaskBtn'
import '../componentCSS/Dashboard.css'
import TaskSignal from './TaskSignal'
import TaskSnippet from './TaskSnippet'
export default function Dashboard() {
  return (
    <>
      <Navbar/>
      <SubNav/>
      <div className='das-container1'>
      <div className='addTaskBtnposDash'><AddTaskBtn/></div>
      <div className='addTaskBtnposDash'><AddCategoryBtn/></div>
      </div>
      <div className='das-container2'>
      <div>
      <div className='calenderDash'><Calender/></div>
      <div className='addTaskBtnposDash'><TaskSignal/></div>
      </div>
      <div className='underlinecross3'></div>
      <div className='underlinecross1'></div>
      <div className='underlinecross2'></div>
      <div className='taskPos'>
        <TaskSnippet/>
      </div>
      </div>
    </>
  )
}
