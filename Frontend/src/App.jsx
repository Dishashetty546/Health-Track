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
import P_Home from './patientpages/P_Home';
import P_Dashboard from './patientpages/P_Dashboard';
import P_Notifications from './patientpages/P_Notifications';
import P_Navbar from './patientpages/P_Navbar';



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
          <Route path="/p_home" element={<P_Home/>}/>
          <Route path="/p_dashboard" element={<P_Dashboard/>}/>
          <Route path="/p_notifications" element={<P_Notifications/>}/>
          <Route path="/p_navbar" element={<P_Navbar/>}/>
          
          
       
        </Routes>

      </div>
    </Router>
  );
}

export default App;
