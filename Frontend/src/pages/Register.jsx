import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;
  font-size: 14px;
  align-self: flex-end;
`;

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/register', {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phone,
        specialization,
        licenseNumber,
        experience,
        clinicName,
        clinicAddress,
        workPhone,
        securityQuestion,
        securityAnswer
      });
      navigate('/login'); // Redirect to login page on successful registration
    } catch (error) {
      console.log('Error during registration:', error.response ? error.response.data : error.message);
    }
  }

  return (
    <Container>
      <Title>Sign Up</Title>
      <p>Please Sign Up To Continue</p>
      <p>Welcome to our Patient Record Management System! To access your account, please sign in.</p>
      <Form onSubmit={submit}>
        <InputField type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <InputField type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <InputField type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <InputField type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <InputField type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <InputField type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
        <InputField type="text" placeholder="Specialization" value={specialization} onChange={e => setSpecialization(e.target.value)} />
        <InputField type="text" placeholder="License Number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} />
        <InputField type="number" placeholder="Experience" value={experience} onChange={e => setExperience(e.target.value)} />
        <InputField type="text" placeholder="Clinic/Hospital Name" value={clinicName} onChange={e => setClinicName(e.target.value)} />
        <InputField type="text" placeholder="Clinic/Hospital Address" value={clinicAddress} onChange={e => setClinicAddress(e.target.value)} />
        <InputField type="tel" placeholder="Work Phone" value={workPhone} onChange={e => setWorkPhone(e.target.value)} />
        <InputField type="text" placeholder="Security Question" value={securityQuestion} onChange={e => setSecurityQuestion(e.target.value)} />
        <InputField type="text" placeholder="Security Answer" value={securityAnswer} onChange={e => setSecurityAnswer(e.target.value)} />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
      <LoginLink to="/login">Already have an account? Sign In</LoginLink>
    </Container>
  );
};

export default Register;
