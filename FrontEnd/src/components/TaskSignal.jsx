import React from 'react'
import '../componentCSS/TaskSignal.css'
export default function TaskSignal() {
  return (
    <div>
      <div className='con1'>
        <div className='green'></div>
        <p className='para'>Current Task</p>
      </div>
      <div className='con2'>
        <div className='yellow'></div>
        <p className='para'>Next Task</p>
      </div>
      <div className='con3'>
        <div className='blue'></div>
        <p className='para'>Upcomming Task</p>
      </div>
    </div>
  )
}
