import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

// Creating a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    _id: ''
  });

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email');
    const _id = localStorage.getItem('_id');
    if (userName && email && _id) {
      setUser({ userName, email, _id });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
