import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainNavbar from './Components/MainNavbar';
import MainHome from './pages/MainHome';
import Appointment from './pages/Appointment';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Patients from './pages/Patients';
import Register from './pages/Register';

import Services from './Components/Services';
import Home from './patientpages/Home';
import Dashboard from './patientpages/Dashboard'; 


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/mainhome" element={<MainHome />} />
          <Route path="/mainnavbar" element={<MainNavbar/>}/>
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patients" element={<Patients />} />
         
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
