import React from 'react'
import {Link} from 'react-router-dom'
import '../componentCSS/SubNav.css'

export default function SubNav() {
  return (
    <>
      <div className='containerSubNav'>
      <Link className='link' to='/Dashboard/completedTask'><p className='paraSubNav'>Completed Task</p></Link>
        <Link className='link' to='/Dashboard'><p className='paraSubNav'>Show Tasks</p></Link>
        <Link className='link' to='/AddTask'><p className='paraSubNav'>Add Tasks</p></Link>
      </div>
      <div className='underlinesubnav'></div>
    </>
  )
}
