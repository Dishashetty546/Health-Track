import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Login = () => {
  return (
    
    <div className="container form-component login-form">
      <h2>Sign In</h2>
      <p>Please Login To Continue</p>
      <form>
        <input
          type="text"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link to="/register" style={{ textDecoration: 'none', alignItems: 'center' }}>
            Register Now
          </Link>
        </div>

        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '10px' }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    
  );
};

export default Login;
