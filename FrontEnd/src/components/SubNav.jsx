import React from 'react'
import '../componentCSS/SubNav.css'
import Dropdown from './dropdown'

export default function SubNav() {
  return (
    <>
      <div className='containerSubNav'>
        <p>Completed Task</p>
        <p>Show Tasks</p>
        <div className='subnavdrop'><Dropdown/></div>
      </div>
      <div className='underlinesubnav'></div>
    </>
  )
}
