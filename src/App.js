import React from "react";
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import ApplicationTable from "./components/staff/ApplicationTable";
import StaffLogin from "./components/staff/StaffLogin";
import MainForm from "./components/users/applications/MainForm";
import './components/styles.scss'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path ="/" element={< StaffLogin/>} />
      <Route path ="/staff-dashboard" element={< ApplicationTable/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
