import React from 'react'
import Navbar from './Navbar'
import '../componentCSS/Addcategory.css'
export default function AddCategory() {
  return (
    <>
    <Navbar/>
    <form className='formcategory'>
      <fieldset>
        <legend>Add Category</legend>
        
        <label className='inputaddtask' for="categoryname">Category Name:</label>
        <input type='text' className='categorytext'/>

        <input  type="submit" value="Create"/>
      </fieldset>
    </form>
    </>
  )
}
