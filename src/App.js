import React from "react";
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import ApplicationTable from "./components/staff/ApplicationTable";
import StaffLogin from "./components/staff/StaffLogin";
import MainForm from "./components/users/applications/MainForm";
import './components/styles.scss'
import SponsorDashboard from "./components/sponsors/SponsorDashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path ="/" element={< StaffLogin/>} />
      <Route path ="/staff-dashboard" element={< ApplicationTable/>} />
      <Route path ="/sponsor-dashboard" element={< SponsorDashboard/>} />
      <Route path ="/sponsorship-application" element={<MainForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
