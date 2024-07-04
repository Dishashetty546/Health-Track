
import React from 'react';
import Hero from '../Components/Hero';
import Biography from '../Components/Biography';
import Department from '../Components/Department';
import MessageForm from '../Components/MessageForm';
import MainNavbar from '../Components/MainNavbar';
import Services from '../Components/Services';



const MainHome = () => {
  return (
    <>
    
      <Hero 
        title={"Welcome to HealthTrack! Your trusted partner in managing patient details with.."} 
        imageUrl={"/hero.png" }
      />
      <Biography imageUrl={"/about.png"}/>
      <Services imageUrl={"/services.png"}/>
      <Department />
      <MessageForm />
      <MainNavbar/>
      
      
    </>
  );
}

export default MainHome;
