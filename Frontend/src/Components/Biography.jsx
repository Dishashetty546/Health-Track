import React from 'react'

//appropt imageurl
const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl}alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who are we</h3>
        <p>Welcome to HealthTrack! We are dedicated to revolutionizing the way individuals approach their wellness journey. Founded on the belief that everyone deserves access to personalized health insights and tools, HealthTrack empowers individuals to take control of their well-being with ease and confidence. Our team of passionate experts combines cutting-edge technology with a deep understanding of health and wellness to deliver a seamless experience. Whether you're looking to achieve fitness goals, monitor your health metrics, or simply improve your lifestyle, HealthTrack is here to support you every step of the way.


        </p>
        <p></p>
      </div>
    

    </div>
  )
}

export default Biography