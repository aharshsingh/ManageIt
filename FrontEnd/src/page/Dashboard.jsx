import React, { useEffect, useState, useCallback } from 'react'
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

export default function Dashboard() {
  const [taskData, setTaskData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [message, setMessage] = useState('');

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    //console.log(newDate.format('YYYY-MM-DD')); 
  };

  const fetchTask = useCallback(async (date) => {
    const isoDate = date.toISOString();
    //console.log(isoDate);
    try {
      const response = await axios.post('http://localhost:7000/showTask/6697c64164b39145ae3e2459', {
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

  useEffect(() => {
    fetchTask(selectedDate);
  }, [selectedDate, fetchTask]);

  return (
    <>
      <Navbar />
      <SubNav />
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
