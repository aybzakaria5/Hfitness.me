import React from 'react';
import './SignInForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const SignInForm = () => {
  return (
    <div className='wrapper'>
      <form>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required /> 
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required /> 
          <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
          <label>
            <input type='checkbox' /> Remember me
            <a href='/forgot-password'>Forgot password?</a>
          </label>
        </div>
        <button type='submit'>SignIn</button>
        <div className="register-link">
          <p>Don't have an account? <a href='/register'>Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;