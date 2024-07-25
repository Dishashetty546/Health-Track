import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/login', {
        email,
        password,
      });

      // Check if the response is successful
      if (res.status === 200 && res.data) {
        console.log('Login successful');
        navigate('/p_home'); // Navigate to /p_home on successful login
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log('Error during login:', error);
      alert("Wrong details");
    }
  }

  return (
    <div className="container form-component login-form">
      <h2>Sign In</h2>
      <p>Please Login To Continue</p>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link to="/register" style={{ textDecoration: 'none', alignItems: 'center' }}>
            Register Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
