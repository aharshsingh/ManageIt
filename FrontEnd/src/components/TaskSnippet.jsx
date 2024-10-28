import React, { useState } from 'react';
import completedimg from '../images/check-solid (1).svg';
import updateimg from '../images/pen-solid.svg';
import deleteimg from '../images/trash-solid.svg';
import '../componentCSS/TaskSnippet.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext'; 

export default function TaskSnippet({ task, onTaskUpdate }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const handleCompleteTask = async () => {
    try {
      const response = await axios.post(`http://localhost:7000/completeTask/${task._id}`);
      if (response.status === 200) {
        alert("Task completed successfully!");
        if (onTaskUpdate) {
          onTaskUpdate(task._id); 
        }
      }
    } catch (error) {
      console.error('Error completing task:', error);
      alert('Failed to complete task. Please try again.');
    }
  };

  const handleDeleteTask = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (!confirmDelete) return;
  
    try {
      const response = await axios.delete(`http://localhost:7000/deleteTask/${task._id}`);
      if (response.status === 200) {
        alert('Task deleted successfully!');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task. Please try again.');
    }
  };  

  return (
    <div className='outercon'>
      <div className='task-header'>
        <div className='task-name'>{task.taskName}</div>
        <div className='action-icons'>
          <img 
            className='img1' 
            src={completedimg} 
            alt="Complete" 
            onClick={handleCompleteTask} 
          />
          <Link to={`/editTask/${task._id}`}>
            <img className='img1' src={updateimg} alt="Edit" />
          </Link>
          <img className='img1' src={deleteimg} alt="Delete" onClick={handleDeleteTask}/>
        </div>
      </div>
      <div className={`description ${isDescriptionVisible ? 'expanded' : ''}`}>
        {task.description}
      </div>
      <div className='toggle-description' onClick={toggleDescription}>
        {isDescriptionVisible ? 'Show Less' : 'Show More'}
      </div>
    </div>
  );
}
