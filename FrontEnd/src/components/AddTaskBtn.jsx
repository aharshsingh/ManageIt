import React from 'react'
import {Link} from 'react-router-dom'
export default function AddTaskBtn() {
  return (
    <div>
      <Link className='link' to='/addtask'><button className='HomeButton'><p className='para3'>Add Task</p></button></Link>
    </div>
  )
}
