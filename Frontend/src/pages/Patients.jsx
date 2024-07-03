import React from 'react';
import styled from 'styled-components';

const initialPatients = [
  { 
    id: 1,
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    condition: 'Hypertension',
    DOB: '1979-03-15',
    Diabetice: 'Normal',
    TestReports: ['Blood Test', 'ECG'],
    fathername: 'Michael Doe',
    Mothername: 'Sarah Doe',
    Bpresult: 'Normal',
    maritalStatus: 'Married',
    Medications: ['Aspirin', 'Atenolol'],
    Xray: 'Submitted',
    address: '123 Main St, Anytown, USA',
    allergies: 'Pollen',
    use: 'Smoker'
  },
  { 
    id: 2,
    name: 'Jane Smith',
    age: 32,
    gender: 'Female',
    condition: 'Diabetes',
    DOB: '1992-06-28',
    Diabetice: 'High',
    TestReports: ['Blood Test', 'MRI'],
    fathername: 'John Smith',
    Mothername: 'Emily Smith',
    Bpresult: 'Normal',
    maritalStatus: 'Single',
    Medications: ['Insulin', 'Metformin'],
    Xray: 'Not Submitted',
    address: '456 Elm St, Springfield, USA',
    allergies: 'None',
    use: 'Non-smoker'
  },
  { 
    id: 3,
    name: 'Michael Johnson',
    age: 60,
    gender: 'Male',
    condition: 'Arthritis',
    DOB: '1964-10-10',
    Diabetice: 'Normal',
    TestReports: ['X-ray'],
    fathername: 'Robert Johnson',
    Mothername: 'Susan Johnson',
    Bpresult: 'High',
    maritalStatus: 'Married',
    Medications: ['Celebrex', 'Methotrexate'],
    Xray: 'Submitted',
    address: '789 Oak Ave, Metro City, USA',
    allergies: 'Shellfish',
    use: 'Non-smoker'
  },
  {
    id: 4,
    name: 'Alice Brown',
    age: 28,
    gender: 'Female',
    condition: 'Migraine',
    DOB: '1996-05-12',
    Diabetice: 'Normal',
    TestReports: ['Blood Test', 'MRI'],
    fathername: 'Michael Brown',
    Mothername: 'Sarah Brown',
    Bpresult: 'High',
    maritalStatus: 'Unmarried',
    Medications: ['Paracetamol', 'Ibuprofen'],
    Xray: 'Submitted',
    address: '321 Cedar Ln, Anytown, USA',
    allergies: 'Peanuts',
    use: 'Non-smoker'
  },
  {
    id: 5,
    name: 'Bob Green',
    age: 35,
    gender: 'Male',
    condition: 'High Blood Pressure',
    DOB: '1989-08-21',
    Diabetice: 'Normal',
    TestReports: ['ECG', 'Blood Test'],
    fathername: 'James Green',
    Mothername: 'Lucy Green',
    Bpresult: 'High',
    maritalStatus: 'Married',
    Medications: ['Metoprolol', 'Lisinopril'],
    Xray: 'Not Submitted',
    address: '567 Pine St, Metro City, USA',
    allergies: 'Dust',
    use: 'Non-smoker'
  }
];


const PatientsContainer = styled.div`
  padding: 20px;
`;

const PatientList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const PatientCard = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PatientName = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const PatientInfo = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #666;
`;

const Patients = () => {
  return (
    <PatientsContainer>
      <h2>Patients</h2>
      <PatientList>
        {initialPatients.map(patient => (
          <PatientCard key={patient.id}>
            <PatientName>{patient.name}</PatientName>
            <PatientInfo>Age: {patient.age}</PatientInfo>
            <PatientInfo>Gender: {patient.gender}</PatientInfo>
            <PatientInfo>Condition: {patient.condition}</PatientInfo>
            <PatientInfo>Date of Birth: {patient.DOB}</PatientInfo>
            <PatientInfo>Diabetic Result: {patient.Diabetice}</PatientInfo>
            <PatientInfo>Test Reports: {patient.TestReports.join(', ')}</PatientInfo>
            <PatientInfo>Father's Name: {patient.fathername}</PatientInfo>
            <PatientInfo>Mother's Name: {patient.Mothername}</PatientInfo>
            <PatientInfo>BP Result: {patient.Bpresult}</PatientInfo>
            <PatientInfo>Marital Status: {patient.maritalStatus}</PatientInfo>
            <PatientInfo>Medications: {patient.Medications.join(', ')}</PatientInfo>
            <PatientInfo>X-ray Report: {patient.Xray}</PatientInfo>
            <PatientInfo>Contact Information: {patient.address}</PatientInfo>
            <PatientInfo>Allergies: {patient.allergies}</PatientInfo>
            <PatientInfo>Smoking/Alcohol Use: {patient.use}</PatientInfo>
          </PatientCard>
        ))}
      </PatientList>
    </PatientsContainer>
  );
}

export default Patients;
