import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #555;
`;

const CardContent = styled.p`
  color: #777;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Section>
        <SectionTitle>Patient Summary</SectionTitle>
        <CardContainer>
          <Card>
            <CardTitle>Active Patients</CardTitle>
            <CardContent>250</CardContent>
            <Button>View Details</Button>
          </Card>
          <Card>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardContent>30</CardContent>
            <Button>View Calendar</Button>
          </Card>
          <Card>
            <CardTitle>New Patients Today</CardTitle>
            <CardContent>15</CardContent>
            <Button>Register Patient</Button>
          </Card>
        </CardContainer>
      </Section>

      <Section>
        <SectionTitle>Medical Records</SectionTitle>
        <CardContainer>
          <Card>
            <CardTitle>Recent Diagnoses</CardTitle>
            <CardContent>View latest diagnoses and treatments.</CardContent>
            <Button>Explore Records</Button>
          </Card>
          <Card>
            <CardTitle>Test Results</CardTitle>
            <CardContent>Access recent test results and reports.</CardContent>
            <Button>View Tests</Button>
          </Card>
          <Card>
            <CardTitle>Prescriptions</CardTitle>
            <CardContent>Manage patient prescriptions.</CardContent>
            <Button>Manage Prescriptions</Button>
          </Card>
        </CardContainer>
      </Section>
    </DashboardContainer>
  );
};

export default Dashboard;
