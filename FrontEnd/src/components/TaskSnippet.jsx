import React from 'react'
import completedimg from '../images/check-solid (1).svg'
import updateimg from '../images/pen-solid.svg'
import deleteimg from '../images/trash-solid.svg'
import '../componentCSS/TaskSnippet.css'
import {Link} from 'react-router-dom'
export default function TaskSnippet({task}) {
  return (
    <>
      <div className='outercon'>
        <div className='conatinertask3'>
        <div className='b'>
        <div className='conatinertask1'>
            <p>Task Name: {task.taskName}</p>
        </div>
        <p className='a'>Description: {task.description}</p>
        </div>
        <div className='conatinertask2'>
            <img className='img1' src={completedimg} alt="ticklogo"/>
            <Link to={{pathname: '/EditTask', state: { taskId: task._id }}}><img className='img1' src={updateimg} alt="updatelogo"/></Link>
            <img className='img1' src={deleteimg} alt="trashlogo" />
        </div>
        </div>
      </div>
    </>
  )
}