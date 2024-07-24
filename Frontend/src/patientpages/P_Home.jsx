
import {useLocation, useNavigate} from 'react-router-dom';
import React from 'react';

import P_Hero from '../patientsComponents/P_Hero';
import P_Navbar from './P_Navbar';



const P_Home = () => {

  const location= useLocation()
  
  return (
    <>
    <h1>Hello {location.state.id}</h1>
      <P_Hero
        title={"Welcome to HealthTrack! Your trusted partner in managing patient details with.."} 
        imageUrl={"/phero.png" }
      />
      <P_Navbar/>

    
      
    </>
  );
}

export default P_Home;
