import React from 'react'
import Hero from '../Components/Hero'
import Biography from '../Components/Biography'
import P_Navbar from '../patientpages/P_Navbar'

const AboutUs = () => {
  return (
    <>
    <Hero title={"Learn more About Us ! HeathTrack"}  imageUrl={"/new.png"}></Hero>
    <Biography imageUrl={"/about.png"}></Biography>
    <P_Navbar/>
    </>
  )
}

export default AboutUs