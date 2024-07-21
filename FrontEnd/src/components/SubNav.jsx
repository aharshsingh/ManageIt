import React from 'react'
import {Link} from 'react-router-dom'
import '../componentCSS/SubNav.css'

export default function SubNav() {
  return (
    <>
      <div className='containerSubNav'>
        <p>Completed Task</p>
        <Link className='link' to='/Dashboard'><p>Show Tasks</p></Link>
        <Link className='link' to='/AddTask'><p>Add Tasks</p></Link>
      </div>
      <div className='underlinesubnav'></div>
    </>
  )
}
