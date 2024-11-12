import React from 'react';
import {Link} from 'react-router-dom';
import '../componentCSS/Home.css';
import arrow from '../images/arrow-right-solid (1).svg'
export default function AddTaskBtn() {
  return (
    <>
      <Link className='linkdiv' to='/addtask'>
          <div className='paraDiv'>
            <p className='para3'>Effortlessly organize tasks and prioritize your day</p>
          </div>
          <button className = 'arrowbutton'>
            <img style={{height:'25px', width:'25px'}} src={arrow} alt='icon' />
          </button>
      </Link>
    </>
  )
}
