import React from 'react'
import {Link} from 'react-router-dom'
import '../componentCSS/SubNav.css'
import Dropdown from './dropdown'

export default function SubNav() {
  return (
    <>
      <div className='containerSubNav'>
        <p>Completed Task</p>
        <Link className='link' to='/Dashboard'><p>Show Tasks</p></Link>
        <div className='subnavdrop'><Dropdown/></div>
      </div>
      <div className='underlinesubnav'></div>
    </>
  )
}
