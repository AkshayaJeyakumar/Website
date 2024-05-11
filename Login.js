import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <h1> LOGIN FORM</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="email" id="username" name="username" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
