import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authen/Login";
import Signup from "./pages/authen/Signup";
// import { Signup } from "./pages/Signup/Signup";
import { Dashboard } from "./pages/BO/Dashboard/Dashboard";
import { HomeJan } from "./pages/Janitor/HomeJan";
import { HomeCol } from "./pages/Collector/HomeCol";
// import { Home } from './pages/home/Home';
import Cookies from "./pages/Cookies/Cookies";
import Tool from "./pages/Tool/Tool";
import Worker from "./pages/BO/Worker/Worker";
import TaskCol from "./pages/Collector/TaskCol/MCPs";
import TaskJan from "./pages/Janitor/TaskJan/TaskJan";
import TaskAssignment from "./pages/BO/TaskAssignment/TaskAssignment";
import Contact from "./pages/Contact/Contact";
import ChatApp from "./pages/BO/Message/chatpage";
import Messages from "./pages/BO/Message/Mess";
import MCP from "./pages/BO/MCP/MCP";
import Vehicle from "./pages/BO/Vehicle/Vehicle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/*  */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homejan" element={<HomeJan />} />
        <Route path="/homecol" element={<HomeCol />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/workers" element={<Worker />} />
        <Route path="/message" element={<ChatApp />} />
        <Route path="/taskJan" element={<TaskJan />} />
        <Route path="/taskCol" element={<TaskCol />} />
        <Route path="/task-assignment" element={<TaskAssignment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mcps" element={<MCP />} />
        <Route path="/vehicles" element={<Vehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
