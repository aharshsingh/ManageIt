import React, { useEffect, useState, useCallback, useContext } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import SubNav from '../components/SubNav'
import '../componentCSS/Dashboard.css'
import TaskSignal from '../components/TaskSignal'
import TaskSnippet from '../components/TaskSnippet'
import { UserContext } from '../context/UserContext';

export default function Dashboard() {
  const [taskData, setTaskData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);
  const [check, setCheck] = useState(true);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setCheck(false);
  };

  const handlecheck = () => {
    setCheck(true);
  }
  const fetchTask = useCallback(async (date) => {
    const isoDate = date.toISOString();
    try {
      const response = await axios.post(`https://taskmanager-3wit.onrender.com/showTask/${user._id}`, {
        date: isoDate,
      });
      if (!response) {
        console.log("Error in fetching data");
        setMessage('Error in fetching data');
      }
      setTaskData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setMessage('Error in fetching data');
    }
  }, []);

  const fetchCompletedTask = async() => {
    try {
      const response = await axios.get(`https://taskmanager-3wit.onrender.com/showCompletedTask/${user._id}`)
      if (!response) {
        console.log("Error in fetching data");
        setMessage('Error in fetching data');
      }
      setTaskData(response.data);
      console.log(response.data);
    } catch (error) { 
      console.log(error);
    }
  }

  useEffect(() => {
    if(check === true){
      fetchCompletedTask();
    }
    else{
    fetchTask(selectedDate);
    } 
  }, [selectedDate, fetchTask, check]);

  return (
    <>
      <Navbar />
      <div onClick={handlecheck}><SubNav /></div>
      <div className='das-container2'>
        <div>
          <div className='calenderDash'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={selectedDate} onChange={handleDateChange} />
            </LocalizationProvider>
          </div>
          <div className='addTaskBtnposDash'><TaskSignal /></div>
        </div>
        <div className='underlinecross1'></div>
        <div className='taskPos'>
          {taskData.map((task) => (
            <TaskSnippet key={task._id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}
