import React, { useState, useContext, useEffect } from 'react';
import completedimg from '../images/check-solid (1).svg';
import updateimg from '../images/pen-solid (3).svg';
import deleteimg from '../images/trash-solid (1).svg';
import '../componentCSS/TaskSnippet.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bellIcon from '../images/bell-solid (1).svg';
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast'

export default function TaskSnippet({ task, onTaskUpdate }) {
  const { user } = useContext(UserContext);
  const [toggleReminder, setToggleReminder] = useState(false);
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [overDue, setOverDue] = useState(false);
  const token = localStorage.getItem('token');

  const getAuthHeaders = () => ({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  useEffect(() => {
    if (task.iscompleted) {
      setOverDue(false);
    } else {
      if (new Date(task.deadline) < Date.now()) {
        setOverDue(true);
      } else {
        setOverDue(false);
      }
    }
  }, [task.deadline, task.iscompleted]);
  
  const handleDateChange = (event) => {
    setReminderDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setReminderTime(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClearReminder = () => {
    setReminderDate('');
    setReminderTime(''); 
    setMessage('');
  };

  const handleClick = () => {
    setToggleReminder(!toggleReminder);
  };

  const handleSetReminder = async () => {
    if(toggleReminder){
      const email = user.email; 
      const taskId = task._id;

      try{
      const reminderDateTime = new Date(`${reminderDate}T${reminderTime}Z`).toISOString();
      if (new Date(reminderDateTime) > new Date(task.deadline)){
        setErrorMessage("The slected date for reminder is passing the deadline!")
      }
      else{
      const response = await axios.post(`https://manageit-5lu4.onrender.com/setReminder`,{
        taskId,
        reminderDateTime,
        message,
        email
      }, getAuthHeaders());
      if(response.status === 200){
        toast.success("Reminder set");
      }   
    }
  }catch (error) {
    console.log(error);
  }
    }
  };

  const handleCompleteTask = async () => {
    try {
      console.log(token);
      const response = await axios.patch(`https://manageit-5lu4.onrender.com/completeTask/${task._id}`,{}, getAuthHeaders());
      if (response.status === 200) {
        toast.success("Task completed successfully");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      toast.error('Failed to complete task');
    }
  };

  const handleDeleteTask = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`https://manageit-5lu4.onrender.com/deleteTask/${task._id}`, getAuthHeaders());
      if (response.status === 200) {
        toast.success("Task deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      toast.error('Failed to delete task');
    }
  };

  return (
    <div className='outercon'>
      {overDue && (
        <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
        overDue!
      </div>
      )}
      <div className='task-header'>
        <div className='task-name'>{task.taskName}</div>
        <div className='action-icons'>
        {!task.iscompleted && (
      <>
        <img
          className="img1"
          src={completedimg}
          alt="Complete"
          onClick={handleCompleteTask}
        />
        <Link to={`/editTask/${task._id}`}>
          <img className="img1" src={updateimg} alt="Edit" />
        </Link>
      </>
    )}
          <img className='img1' src={deleteimg} alt="Delete" onClick={handleDeleteTask} />
        </div>
      </div>
      <div className='description'>
        {task.description}
      </div>
      <div className='reminderDiv' onClick={handleClick}>
        <p style={{ fontSize: '15px', fontWeight: '500' }}>Set Reminder</p>
        <img className='bellIcon' src={bellIcon} alt='bellIcon' />
      </div>
      {toggleReminder && (
        <div>
          <div style={{ marginTop: '16px' }}>
            <input 
              className='dateDiv'
              type="date" 
              value={reminderDate}
              onChange={handleDateChange}
            />
            <input 
              type="time" 
              value={reminderTime}
              onChange={handleTimeChange}
            />
          </div>
          <input 
            className='message' 
            type='text' 
            value={message}
            placeholder='Enter a message' 
            onChange={handleMessageChange} 
          />
          <button className='clrRe' onClick={handleClearReminder}>Clear</button>
          <button className='clrRe' onClick={handleSetReminder}>Set</button>
          {errorMessage && (
      <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
        {errorMessage}
      </div>
    )}
        </div>
      )}
    </div>
  );
}
