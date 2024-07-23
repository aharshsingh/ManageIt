import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../componentCSS/AddTask.css'
import axios from 'axios'
import { UserContext } from '../context/UserContext';
import TaskAnimation from '../components/TaskAnimation'
export default function AddTask() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');
  const {user} = useContext(UserContext);

  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({taskName, description, deadline, priority})
    const postTaskData = async ()=>{
      try {
        const response = await axios.post(`http://localhost:7000/addTask/${user._id}`,{  
          taskName,
          description,
          deadline,   
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
        <div className='fieldsetaddtask'>
        {/* <legend style={{fontSize:"22px", fontWeight:"bold"}}>Add Task</legend> */}
        
        {/* <label className='inputaddtask' for="taskname">Task Name:</label> */}
        <input type="text" id="name" className="taskname" placeholder='Task Name' value = {taskName} onChange={(event) => setTaskName(event.target.value)} required/><br/><br/>
        
        {/* <label className='inputaddtask' for="email">Description:</label> */}
        <input type="textarea" id="Description" className="Description" placeholder='Description' value = {description} onChange={(event) => setDescription(event.target.value)} required/><br/><br/><br/>
        
        <label className='inputaddtask' for="birthday">Deadline:</label><br/>
        <input type="date" id="birthday" className="deadline" value = {deadline} onChange={(event) => setDeadline(event.target.value)} required/><br/><br/>

        <label className='inputaddtask'>Select Priority:</label><br/>

        <input type="radio" id="basic" className="priority" name='priority' value='High' checked={priority === 'High'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="High" style={{color: "#afa667f3"}}>High</label>
    
        <input type="radio" id="standard" className="priority" name='priority' value="Medium" checked={priority === 'Medium'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="Medium" style={{color: "#afa667f3"}}>Medium</label>
    
        <input type="radio" id="premium" className="priority" name='priority' value="Low" checked={priority === 'Low'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="Low" style={{color: "#afa667f3"}}>Low</label><br/><br/>

        <input className='addtasksubmit' type="submit" value="Add Task"/>
        <div style={{marginLeft: "-5px"}}><TaskAnimation/></div>
        </div>
    </form>
    </>
  )
}
