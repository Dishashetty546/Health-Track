import React from 'react'
import Hero from '../Components/Hero'
import Biography from '../Components/Biography'

const AboutUs = () => {
  return (
    <>
    <Hero title={"Learn more About Us ! HeathTrack"}  imageUrl={"/new.png"}></Hero>
    <Biography imageUrl={"/about.png"}></Biography>
    </>
  )
}

export default AboutUs