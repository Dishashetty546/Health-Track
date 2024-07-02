
import React from 'react';
import Hero from '../Components/Hero';
import Biography from '../Components/Biography';
import Department from '../Components/Department';
import MessageForm from '../Components/MessageForm';
import Navbar from '../Components/Navbar';



const Home = () => {
  return (
    <>
    
      <Hero 
        title={"Welcome to HealthTrack! Your trusted partner in managing patient details with.."} 
        imageUrl={"/hero.png" }
      />
      <Biography imageUrl={"/about.png"}/>
      <Department />
      <MessageForm />
      <Navbar/>
      
    </>
  );
}

export default Home;
