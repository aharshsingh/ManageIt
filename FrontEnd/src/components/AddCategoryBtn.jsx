import React from 'react'
import {Link} from 'react-router-dom'
export default function AddTaskBtn() {
  return (
    <div>
      <Link className='link' to='/Products'><button className='HomeButton'><p className='para3'>Add Category</p></button></Link>
    </div>
  )
}
