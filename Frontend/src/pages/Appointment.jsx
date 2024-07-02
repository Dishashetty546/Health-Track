import React, { useState } from 'react';
import styled from 'styled-components';


const initialAppointments = [
  { id: 1, patientName: 'John Doe', doctor: 'Dr. Smith', date: '2024-07-05', time: '10:00 AM', status: 'Confirmed', image: 'https://tse1.mm.bing.net/th?id=OIP.8-EgD1Z_-VgharO8mV_ChQHaEq&pid=Api&P=0&h=180' },
  { id: 2, patientName: 'Jane Smith', doctor: 'Dr. Brown', date: '2024-07-06', time: '11:30 AM', status: 'Pending', image: 'http://images.huffingtonpost.com/2015-10-27-1445916079-7527424-Dollarphotoclub_67902901.jpg' },
  { id: 3, patientName: 'Michael Johnson', doctor: 'Dr. Lee', date: '2024-07-08', time: '02:00 PM', status: 'Confirmed', image: 'https://tse2.mm.bing.net/th?id=OIP.AZieRa0em5PwH1nju82vnQHaE8&pid=Api&P=0&h=180' },
  { id: 4, patientName: 'Alice Green', doctor: 'Dr. White', date: '2024-07-10', time: '09:30 AM', status: 'Pending', image: 'https://tse4.mm.bing.net/th?id=OIP.5o9KM8dJijrXnO7fTHLfOAHaE7&pid=Api&P=0&h=180' },
  { id: 5, patientName: 'Bob Brown', doctor: 'Dr. Black', date: '2024-07-12', time: '03:30 PM', status: 'Confirmed', image: 'https://tse1.mm.bing.net/th?id=OIP.SwRgsiaRUcQte2MrDaP4dQHaEo&pid=Api&P=0&h=180' }
];


const AppointmentsContainer = styled.div`
  padding: 20px;
`;

const AppointmentCard = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const AppointmentInfoContainer = styled.div`
  flex: 1;
`;

const AppointmentHeader = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const AppointmentInfo = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #666;
`;

const AppointmentStatus = styled.span`
  font-weight: bold;
  color: ${props => props.status === 'Confirmed' ? '#4caf50' : '#ff9800'};
`;

const DoctorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Appointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);


  const cancelAppointment = (id) => {
    const updatedAppointments = appointments.map(appointment => {
      if (appointment.id === id) {
        return { ...appointment, status: 'Cancelled' };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
  };

  return (
    <AppointmentsContainer>
      <h2>Appointments</h2>
      {appointments.map(appointment => (
        <AppointmentCard key={appointment.id}>
          <DoctorImage src={appointment.image} alt={`${appointment.doctor}'s image`} />
          <AppointmentInfoContainer>
            <AppointmentHeader>{appointment.patientName}</AppointmentHeader>
            <AppointmentInfo>Doctor: {appointment.doctor}</AppointmentInfo>
            <AppointmentInfo>Date: {appointment.date}</AppointmentInfo>
            <AppointmentInfo>Time: {appointment.time}</AppointmentInfo>
            <AppointmentInfo>Status: <AppointmentStatus status={appointment.status}>{appointment.status}</AppointmentStatus></AppointmentInfo>
            {appointment.status === 'Pending' && (
              <button onClick={() => cancelAppointment(appointment.id)}>Cancel Appointment</button>
            )}
          </AppointmentInfoContainer>
        </AppointmentCard>
      ))}
    </AppointmentsContainer>
  );
}

export default Appointments;
