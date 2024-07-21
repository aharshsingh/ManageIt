import React from 'react'
import completedimg from '../images/check-solid (1).svg'
import updateimg from '../images/pen-solid.svg'
import deleteimg from '../images/trash-solid.svg'
import '../componentCSS/TaskSnippet.css'
export default function TaskSnippet({task}) {
  return (
    <>
      <div className='outercon'>
        <div className='conatinertask3'>
        <div className='b'>
        <div className='conatinertask1'>
            <p>{task.taskName}</p>
            <p>Category</p>
        </div>
        <p className='a'>{task.description}</p>
        </div>
        <div className='conatinertask2'>
            <img className='img1' src={completedimg} alt="ticklogo"/>
            <img className='img1' src={updateimg} alt="updatelogo"/>
            <img className='img1' src={deleteimg} alt="trashlogo" />
        </div>
        </div>
      </div>
    </>
  )
}
