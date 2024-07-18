import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Calender from '../components/Calender'
import SubNav from '../components/SubNav'
import AddCategoryBtn from '../components/AddCategoryBtn'
import AddTaskBtn from '../components/AddTaskBtn'
import '../componentCSS/Dashboard.css'
import TaskSignal from '../components/TaskSignal'
import TaskSnippet from '../components/TaskSnippet'
export default function Dashboard() {
  const [taskData, setTaskData] = useState({});
  useEffect(()=>{
    const fetchTask = async () => {
      try {
        const response = axios.get('');
      } catch (error) {
        console.log(error);
      }
    }
    fetchTask();
  },[])
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
