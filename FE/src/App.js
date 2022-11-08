import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authen/Login";
import Signup from "./pages/authen/Signup"
// import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/BO/Home"
import { HomeJan } from "./pages/Janitor/HomeJan"
import { HomeCol } from "./pages/Collector/HomeCol"
// import { Home } from './pages/home/Home';
import Cookies from './pages/cookies/Cookies';
import Tool from './pages/tool/Tool'
import Staff from './pages/BO/Staff'

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
