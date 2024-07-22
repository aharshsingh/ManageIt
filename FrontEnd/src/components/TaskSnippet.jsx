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
            <Link to='/EditTask'><img className='img1' src={updateimg} alt="updatelogo"/></Link>
            <img className='img1' src={deleteimg} alt="trashlogo" />
        </div>
        </div>
      </div>
    </>
  )
}

// import React, { useState } from 'react';
// import completedimg from '../images/check-solid (1).svg';
// import updateimg from '../images/pen-solid.svg';
// import deleteimg from '../images/trash-solid.svg';
// import '../componentCSS/TaskSnippet.css';

// export default function TaskSnippet({ task }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTask, setEditedTask] = useState(task);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Add logic to save the edited task details, e.g., make an API call to update the task
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedTask((prevTask) => ({
//       ...prevTask,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <div className='outercon'>
//         <div className='conatinertask3'>
//           <div className='b'>
//             {isEditing ? (
//               <div className='conatinertask1'>
//                 <label>
//                   Task Name:
//                   <input
//                     type='text'
//                     name='taskName'
//                     value={editedTask.taskName}
//                     onChange={handleChange}
//                   />
//                 </label>
//                 <label>
//                   Description:
//                   <input
//                     type='text'
//                     name='description'
//                     value={editedTask.description}
//                     onChange={handleChange}
//                   />
//                 </label>
//                 <button onClick={handleSaveClick}>Save</button>
//               </div>
//             ) : (
//               <>
//                 <div className='conatinertask1'>
//                   <p>Task Name: {task.taskName}</p>
//                 </div>
//                 <p className='a'>Description: {task.description}</p>
//               </>
//             )}
//           </div>
//           <div className='conatinertask2'>
//             <img className='img1' src={completedimg} alt="ticklogo" />
//             <img className='img1' src={updateimg} alt="updatelogo" onClick={handleEditClick} />
//             <img className='img1' src={deleteimg} alt="trashlogo" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

