import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authen/Login";
import Signup from "./pages/authen/Signup"
// import { Signup } from "./pages/Signup/Signup";
// import { Home } from "./pages/BO/Home"
import Home from './pages/BO/Home';
import { HomeJan } from "./pages/Janitor/HomeJan"
import { HomeCol } from "./pages/Collector/HomeCol"
// import { Home } from './pages/home/Home';
import Cookies from './pages/cookies/Cookies';
import Tool from './pages/tool/Tool'
import Staff from './pages/BO/Staff/Staff'
import TaskCol from './pages/Collector/TaskCol/MCPs';
import TaskJan from './pages/Janitor/TaskJan/TaskJan';
import TA from './pages/BO/TaskAssignment/TaskA';
import Contact from './pages/contact/contact';
import Route_Planning from './pages/BO/Route Planning/Rp';
import ChatApp from './pages/BO/Message/chatpage';
import Messages from './pages/BO/Message/Mess';
import StarterMap from './pages/BO/table';
// import Workers from './pages/BO/Staff/table';
import WORKERS from './pages/BO/Staff/WORKERS/App';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/*  */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/homejan' element={<HomeJan />} />
        <Route path='/homecol' element={<HomeCol />} />
        <Route path='/tool' element={<Tool />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/message' element={<ChatApp/>} />
        <Route path='/taskJan' element={<TaskJan />} />
        <Route path='/taskCol' element={<TaskCol />} />
        <Route path='/taskA'element={<TA/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/rp'element={<Route_Planning/>}/>
        <Route path='/tool'element={<Tool/>}/>
        <Route path='/map'element={<StarterMap/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


