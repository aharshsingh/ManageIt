import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import SubNav from '../components/SubNav';
import '../componentCSS/Dashboard.css';
import TaskSnippet from '../components/TaskSnippet';
import { UserContext } from '../context/UserContext';

export default function Dashboard() {
  const [taskData, setTaskData] = useState([]); 
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  const getAuthHeaders = () => ({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setCheck(false);
  };

  const handleCheck = () => {
    setCheck(true);
  };

  const fetchTaskByPriority = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://manageit-cm4b.onrender.com/showTaskByPriority/${user._id}`,getAuthHeaders());
      if (!response.data || !Array.isArray(response.data)) {
        setMessage('Error in fetching data');
      } else {
        setTaskData(response.data);
      }
    } catch (error) {
      console.log(error);
      setMessage('Error in fetching data');
    } finally {
      setLoading(false);
    }
  };

  const fetchTaskByDate = async (date) => {
    const isoDate = date.toISOString();
    setLoading(true);
    try {
      const response = await axios.post(`https://manageit-cm4b.onrender.com/showTask/${user._id}`, { date: isoDate }, getAuthHeaders());
      if (!response.data || !Array.isArray(response.data)) {
        setMessage('Error in fetching data');
      } else {
        setTaskData(response.data);
      }
    } catch (error) {
      console.log(error);
      setMessage('Error in fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (check) {
      fetchTaskByPriority();
    } else {
      fetchTaskByDate(selectedDate);
    }
  }, [check, selectedDate, user._id]);

  return (
    <>
      <Navbar />
      <div onClick={handleCheck}>
        <SubNav />
      </div>
      <div className='das-container2'>
        <div>
          <div className='calenderDash'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={selectedDate} onChange={handleDateChange} />
            </LocalizationProvider>
          </div>
        </div>
        <div className='underlinecross1'></div>
        <div className='taskPos'>
          {loading ? (
            <p>Loading tasks...</p>
          ) : !Array.isArray(taskData) || taskData.length === 0 ? (
            <p className='no-tasks-message'>No tasks added yet.</p>
          ) : (
            taskData.map((task) => (
              <TaskSnippet key={task._id} task={task} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
