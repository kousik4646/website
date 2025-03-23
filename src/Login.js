import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <p>
        <strong>New members, please </strong>
        <Link to="/register">Click Here</Link>
      </p>
      <p>Existing members, please log in to your Krishna Training account.</p>
      <form>
        <label>Email* :</label>
        <input type="email" placeholder="Enter Email" required />
        <label>Password* :</label>
        <input type="password" placeholder="********" required />
        <p className="forgot-password">Forgot Password?</p>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  </div>

    
  );
}

export default Login;