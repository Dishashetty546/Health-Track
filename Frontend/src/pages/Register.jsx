import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
  return (
    <Container>
      <Title>Sign Up</Title>
      <p>Please Sign Up To Continue</p>
      <p>Welcome to our Patient Record Management System! To access your account, please sign in.</p>
      <Form>
        <InputField type="text" placeholder="First Name" />
        <InputField type="text" placeholder="Last Name" />
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <InputField type="password" placeholder="Confirm Password" />
        <InputField type="tel" placeholder="Phone" />
        <InputField type="text" placeholder="Specialization" />
        <InputField type="text" placeholder="License Number" />
        <InputField type="number" placeholder="Experience" />
        <InputField type="text" placeholder="Clinic/Hospital Name" />
        <InputField type="text" placeholder="Clinic/Hospital Address" />
        <InputField type="tel" placeholder="Work Phone" />
        <InputField type="text" placeholder="Security Question" />
        <InputField type="text" placeholder="Security Answer" />
        <LoginLink to="/login">Already Registered? Login Now</LoginLink>
        <div style={{ textAlign: 'center' }}>
        <Link to="/p_home" style={{ textDecoration: 'none', alignItems: 'center' }}>
            Register Now
          </Link>
          
        </div>
      </Form>
    </Container>
  );
};

export default Register;
