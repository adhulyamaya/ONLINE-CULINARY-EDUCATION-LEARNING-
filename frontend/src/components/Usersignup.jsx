
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  changeUsername,
  changeName,
  changeEmail,
  changePhone,
  changePassword,
} from '../feautures/signupSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axiosInstance from '../axios/axios';
import { useNavigate } from 'react-router-dom';
import './Usersignup.css';
import logo from '../assets/sk logo.png';

const Usersignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = useSelector((state) => state.signup);

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    // Basic phone number validation (10 digits)
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const validateNoSpaces = (value, fieldName) => {
    if (/\s/.test(value)) {
      setErrors({ ...errors, [fieldName]: `${fieldName} cannot contain spaces` });
      return false;
    }
    return true;
  };

  const signupSubmit = () => {
    const { username, name, email, phone, password } = signup.value;
    const errors = {};

    if (!validateNoSpaces(username, 'Username')) {
      return;
    }

    if (!validateNoSpaces(name, 'Name')) {
      return;
    }

    if (!validateNoSpaces(password, 'Password')) {
      return;
    }

    if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if (!validatePhone(phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (Object.keys(errors).length === 0) {
      // No validation errors, proceed with the signup
      const data = { username, name, email, phone, password };

      axiosInstance.post('signup/', data).then((res) => {
        console.log(res);
        if (res.data.message === 'success') {
          navigate('../login');
        }
      });
    } else {
      // Update the state with validation errors
      setErrors(errors);
    }
  };
  return (
    <div className="background-container">
      <div className="signup-container">
        <img src={logo} alt="Logo" className="signup-logo" />
        <div className="signup-form">
          <p>
            Are you a mentor {'>>>'}
            <Link to="/mentorlogin"> Login here</Link>
          </p>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => dispatch(changeUsername(e.target.value))}
          />
          <br />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => dispatch(changeName(e.target.value))}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              dispatch(changeEmail(e.target.value));
              setErrors({ ...errors, email: '' }); // Clear previous email error
            }}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
          <br />
          <input
            type="number"
            placeholder="Phone"
            onChange={(e) => {
              dispatch(changePhone(e.target.value));
              setErrors({ ...errors, phone: '' }); // Clear previous phone error
            }}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => dispatch(changePassword(e.target.value))}
          />
          <br />
          <button className="signup-button" onClick={signupSubmit}>
            Signup
          </button>
          <br />
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usersignup;
