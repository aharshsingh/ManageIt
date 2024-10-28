import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './page/Home';
import AddTask from './page/AddTask';
import Dashboard from './page/Dashboard';
import Signin from './page/Signin';
import Signup from './page/Signup';
import EditTask from './page/EditTask';
import CompletedTask from './page/CompletedTask';
import Floating from './components/Foalting'
import { UserProvider } from './context/UserContext'; 
import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Signup" replace />} />
          <Route path="/Home" Component={Home}></Route>
          <Route path="/Navbar" Component={Navbar}></Route>
          <Route path="/Signin" Component={Signin}></Route>
          <Route path="/Signup" Component={Signup}></Route>
          <Route path="/addtask" Component={AddTask}></Route>
          <Route path="/editTask/:taskId" Component={EditTask}></Route>
          <Route path="/Dashboard" Component={Dashboard}></Route>
          <Route path="/Floating" Component={Floating}></Route>
          <Route path="/Dashboard/completedTask" Component={CompletedTask}></Route>
          <Route path="*" element={<Navigate to="/Signup" replace />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
