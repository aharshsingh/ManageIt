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
  const token = localStorage.getItem('token');

  const getAuthHeaders = () => ({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({taskName, description, deadline, priority})
    const postTaskData = async ()=>{
      try {
        const response = await axios.post(`https://manageit-5lu4.onrender.com/addTask/${user._id}`,{  
          taskName,
          description,
          deadline,   
          priority
        }, getAuthHeaders());
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
    <div className='formContainer'>
    <Navbar/>
    <form className='addTaskForm'  onSubmit={handleSubmit}>
    <fieldset className='fieldsetaddtask'>
    <legend style={{fontSize:"22px"}}>Add Task</legend>
        
        <label style={{marginTop:'20px'}} className='inputaddtask' for="taskname">Task Name:</label>
        <input type="text" id="name" className="taskname" placeholder='Task Name' value = {taskName} onChange={(event) => setTaskName(event.target.value)} required/><br/><br/>
        
        <label className='inputaddtask' for="email">Description:</label>
        <input type="textarea" id="Description" className="Description" placeholder='Description' value = {description} onChange={(event) => setDescription(event.target.value)} required/><br/><br/><br/>
        
        <label style={{marginTop:'-25px'}} className='inputaddtask' for="birthday">Deadline:</label><br/>
        <input style={{marginTop:'-30px'}} type="date" id="birthday" className="deadline" value = {deadline} onChange={(event) => setDeadline(event.target.value)} required/><br/><br/>

        <label className='inputaddtask'>Select Priority:</label><br/>

        <input type="radio" id="basic" className="priority" name='priority' value='High' checked={priority === 'High'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="High" style={{color: "#616161f3"}}>High</label>
    
        <input type="radio" id="standard" className="priority" name='priority' value="Medium" checked={priority === 'Medium'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="Medium" style={{color: "#616161f3"}}>Medium</label>
    
        <input type="radio" id="premium" className="priority" name='priority' value="Low" checked={priority === 'Low'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="Low" style={{color: "#616161f3"}}>Low</label><br/><br/>

        <input className='addtasksubmit' type="submit" value="Add Task"/>
        <div style={{marginLeft: "-70px", marginTop: '-25px'}}><TaskAnimation/></div>
        </fieldset>
    </form>
    </div>
    </>
  )
}
