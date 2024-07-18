import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dropdown from '../components/dropdown'
import '../componentCSS/AddTask.css'
import axios from 'axios'

export default function AddTask() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');

  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({taskName, description, deadline, priority})
    const postTaskData = async ()=>{
      try {
        const response = await axios.post('http://localhost:7000/addTask/6697c64164b39145ae3e2459',{  
          taskName,
          description,
          deadline,   //&{userId}
          priority
        });
        if(response.status === 200){
          alert("Task added to your schedule!")
          navigate('/dashboard');
        }
      } catch (error) {
        console.log(error);
      }
    }
    postTaskData();
  };
  return (
    <>
    <Navbar/>
    <form className='addTaskForm'  onSubmit={handleSubmit}>
        <fieldset className='fieldsetaddtask'>
        <legend>Add Task</legend>
        <div className='divdrop'><Dropdown/></div>
        
        <label className='inputaddtask' for="taskname">Task Name:</label>
        <input type="text" id="name" className="taskname" value = {taskName} onChange={(event) => setTaskName(event.target.value)} required/><br/><br/>
        
        <label className='inputaddtask' for="email">Description:</label>
        <input type="textarea" id="Description" className="Description" value = {description} onChange={(event) => setDescription(event.target.value)} required/><br/><br/><br/>
        
        <label className='inputaddtask' for="birthday">Deadline:</label>
        <input type="date" id="birthday" className="deadline" value = {deadline} onChange={(event) => setDeadline(event.target.value)} required/><br/><br/>

        <label className='inputaddtask'>Set Priority:</label><br/>

        <input type="radio" id="basic" className="inputaddtask" name='priority' value='High' checked={priority === 'High'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="High">High</label>
    
        <input type="radio" id="standard" className="priority" name='priority' value="Medium" checked={priority === 'Medium'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="Medium">Medium</label>
    
        <input type="radio" id="premium" className="priority" name='priority' value="Low" checked={priority === 'Low'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="Low">Low</label><br/><br/>

        <input className='addtasksubmit' type="submit" value="Submit"/>
        </fieldset>
    </form>
    </>
  )
}
