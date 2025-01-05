import React, { useState } from 'react';
import './login.css';
import { IoClose } from 'react-icons/io5';
const Login = ({ openLogin, setOpenLogin }) => {
  return (
    <div className={`login-form-container ${openLogin ? ' active' : ' '}`}>
      <IoClose className="close" onClick={() => setOpenLogin(false)} />
      <form action="">
        <h3>login</h3>
        <input type="email" className="box" placeholder="enter your email" />
        <input
          type="password"
          className="box"
          placeholder="enter your password"
        />
        <input type="submit" value="login now" className="btn" />
        <input type="checkbox" id="remember" className="checkbox" />
        <label htmlFor="remember">remember me</label>
        <p>
          forget password? <a href="#">click here</a>
        </p>
        <p>
          don't have an account? <a href="#"> register now</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
