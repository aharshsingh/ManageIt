import React, { useEffect, useState, useContext } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
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
  const [taskData, setTaskData] = useState('');
  const {user} = useContext(UserContext);
  const navigate = useNavigate(); 
  const { taskId } = useParams();
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
        const response = await axios.patch(`https://manageit-cm4b.onrender.com/editTask/${taskId}`,{  
          taskName,
          description,
          deadline,   
          priority
        }, getAuthHeaders());
        if(response.status === 200){
          alert("Task updated successfully!")
          navigate('/dashboard');
        }
      } catch (error) {
        console.log(error);
      }
    }
    postTaskData();
  };
  
  useEffect(()=>{
    const fetchTask = async ()=>{
      try {
        console.log(taskId);
        const response = await axios.get(`https://manageit-cm4b.onrender.com/showSpecificTask/${taskId}`,getAuthHeaders())
        if (response && response.data) {
          setTaskName(response.data.taskName);
          setDescription(response.data.description);
          setDeadline(response.data.deadline);
          setTaskData(response.data);
          setPriority(response.data.priority);
        } else {
          console.log('Error in fetching task data');
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTask();
  },[])
  return (
    <>
    <div className='formContainer'>
    <Navbar/>
    <form className='addTaskForm'  onSubmit={handleSubmit}>
        <fieldset className='fieldsetaddtask'>
        <legend>Edit Task</legend>
        
        <label className='inputaddtask' for="taskname">Task Name:</label>
        <input type="text" id="name" className="taskname" value = {taskName} onChange={(event) => setTaskName(event.target.value)}  required/><br/><br/>
        
        <label className='inputaddtask' for="email">Description:</label>
        <input type="textarea" id="Description" className="Description" value = {description} onChange={(event) => setDescription(event.target.value)} required/><br/><br/><br/>
        
        <label className='inputaddtask' for="birthday">Deadline:</label>
        <input type="date" id="birthday" className="deadline" value = {deadline} onChange={(event) => setDeadline(event.target.value)} required/><br/><br/>

        <label className='inputaddtask'>Select Priority:</label><br/>

        <input type="radio" id="basic" className="priority" name='priority' value='High' checked={priority === 'High'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="High" style={{color: "#e67925e0"}}>High</label>
    
        <input type="radio" id="standard" className="priority" name='priority' value="Medium" checked={priority === 'Medium'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="Medium" style={{color: "#e67925e0"}}>Medium</label>
    
        <input type="radio" id="premium" className="priority" name='priority' value="Low" checked={priority === 'Low'} onChange={(event) => setPriority(event.target.value)} required/>
        <label for="Low" style={{color: "#e67925e0"}}>Low</label><br/><br/>

        <input className='addtasksubmit' type="submit" value="Update"/>
        <div style={{marginLeft: "-70px", marginTop: '-25px'}}><TaskAnimation/></div>
        </fieldset>
    </form>
    </div>
    </>
  )
}
