import React from 'react';
import './SignInForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const SignInForm = () => {
  return (
    <div className="body-sf">
      <div className='wrapper'>
        <form>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='text' placeholder='Enter your username...' required /> 
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Enter your password...' required /> 
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label>
              <input type='checkbox' /> Remember me </label>
              <a href='/forgot-password'> Forgot password?</a>
            
          </div>
          <button type='submit' className='btn'>SignIn</button>
          <div className="register-link">
            <p>Don't have an account? <a href='/register'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;