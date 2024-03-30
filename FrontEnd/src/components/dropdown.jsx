import React from 'react'

export default function dropdown() {
  return (
    <div>
        <select className='dropdown'>
        <option className='dropdown-ops' disabled selected hidden>Category</option>
        <option className='dropdown-ops'>None</option>
        <option className='dropdown-ops'>Category1</option>
        <option className='dropdown-ops'>Category2</option>
        </select>
    </div>
  )
}
