import React from 'react';
import styled, { keyframes } from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Cover entire container */
  opacity: 0.6; /* Adjust opacity for transparency */
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Heading = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  animation: ${fadeIn} 5s ease-in-out;
`;

const ServicesContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
`;

const CarouselContainer = styled.div`
  margin-top: 40px;
`;

const CarouselItem = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  margin: 0 10px;
  text-align: center;
`;

const Services = ({ imageUrl }) => {
  // Sample data for carousel items
  const servicesData = [
    { title: 'Doctor Appointment Scheduling', description: 'Simplify the process of booking and managing doctor appointments with our intuitive scheduling system. Patients can easily schedule appointments online, check availability, and receive reminders, while healthcare providers can efficiently manage their schedules and update appointment statuses in real-time.' },
    { title: 'Health Analytics and Insights', description: 'Gain valuable insights into patient health trends and outcomes with our advanced analytics tools. By analyzing aggregated health data, healthcare providers can identify patterns, monitor chronic conditions, and make informed decisions to optimize treatment plans and improve patient outcomes.' },
    { title: 'Patient Engagement and Support', description: 'Foster meaningful patient-provider interactions with our engagement features. Patients can communicate securely with healthcare teams, access educational resources, and receive personalized health tips and reminders. This proactive engagement promotes patient empowerment and supports health management.' },
    { title: 'Electronic Health Records Management', description: 'Our platform provides robust electronic health records (EHR) management solutions, ensuring healthcare providers can efficiently store, retrieve, and update patient records securely. This streamlined approach enhances workflow efficiency and ensures accurate documentation for patient care.' },
    { title: 'Remote Patient Monitoring', description: 'Enhance care coordination and patient outcomes with our remote patient monitoring capabilities. Healthcare providers can remotely track patient vital signs, medication adherence, and health metrics using connected devices and wearables. Real-time data alerts and trend analysis enable early intervention.' },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // Number of slides to scroll at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <Container>
      <BannerImage src={imageUrl} alt="Services Image" />
      <Heading>
        <div>Hello!</div>
        <div>Empowering Health, One Click at a Time</div>
      </Heading>
      
      <ServicesContainer>
        <h2>Services</h2>
      </ServicesContainer>
      
      <CarouselContainer>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {servicesData.map((service, index) => (
            <CarouselItem key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
};

export default Services;
