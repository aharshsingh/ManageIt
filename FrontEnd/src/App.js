import { BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './page/Home'
import AddTask from './page/AddTask'
import AddCategory from './components/AddCategory'
import Dashboard from './page/Dashboard'
import Signin from './page/Signin';
import Signup from './page/Signup'
function App() {
  return (
  <>
  <BrowserRouter>
                <Routes>
                    <Route path="/Home" Component={Home}></Route>
                    <Route path="/Navbar" Component={Navbar}></Route>
                    <Route path="/Signin" Component={Signin}></Route>
                    <Route path="/Signup" Component={Signup}></Route>
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
