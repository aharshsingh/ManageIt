import { BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddTask from './components/AddTask'
import AddCategory from './components/AddCategory'
import Dashboard from './components/Dashboard'
function App() {
  return (
  <>
  <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/Navbar" Component={Navbar}></Route>
                    <Route path="/addtask" Component={AddTask}></Route>
                    <Route path="/addcategory" Component={AddCategory}></Route>
                    <Route path="/Dashboard" Component={Dashboard}></Route>
                    <Route path="*" element={<Navigate to="/Home" replace />} />
                </Routes>
            </BrowserRouter>
  </>
  );
}

export default App;
