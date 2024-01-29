import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios/adminaxios';

const Adminlogin = () => {
  const navigate = useNavigate();
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState(null);

  const loginSubmit = (e) => {
    e.preventDefault();

    const datas = {
      username: adminUsername,
      password: adminPassword,
    };

    axiosInstance.post('adminlogin/', datas)
      .then((res) => {
        const tokens = {
          access: res.data.access,
          refresh: res.data.refresh,
        };
        localStorage.removeItem('userDetails');
        localStorage.setItem('adminDetails', JSON.stringify(res.data.userdataa));
        localStorage.setItem('accessToken', JSON.stringify(res.data.access));
        if (res.data.message === 'success') {
          navigate('/admin-home');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Invalid credentials. Please check your username and password.');
      });
  };

  return (
    <div className="wrapper">
      <form className="p-3 mt-3" onSubmit={loginSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
        </div>
        <button className="btn mt-3" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Adminlogin;










