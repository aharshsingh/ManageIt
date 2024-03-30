import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import '../componentCSS/Addcategory.css'
export default function AddCategory() {
  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would handle your form submission (e.g., sending data to a server).
    // After handling the submission, redirect to the '/dashboard' route:
    navigate('/addtask');
  };
  return (
    <>
    <Navbar/>
    <form className='formcategory' onSubmit={handleSubmit}>
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
