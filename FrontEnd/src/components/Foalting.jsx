import React, { useState } from 'react';
import '../componentCSS/Floting.css'; // Import the CSS for styling

const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Welcome to the Website</h1>
        <p>This is some content on the page.</p>
        <button onClick={openForm}>Open Form</button>
      </div>

      {isFormVisible && (
        <>
          <div className="overlay" onClick={closeForm}></div>
          <div className="floating-form">
            <div className="form-content">
              <h2>Edit Information</h2>
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                
                <button type="submit">Save</button>
                <button type="button" onClick={closeForm}>Cancel</button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
