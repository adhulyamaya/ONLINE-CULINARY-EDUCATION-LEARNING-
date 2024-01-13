import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {changeAdminname,changeAdminPassword}from "../../feautures/adminSlice"
import axiosInstance from '../../axios/adminaxios'
import "./login.css"
import logo from '../../assets/sk logo.png';

const Adminlogin = () => {
    const dispatch =useDispatch()
    const adminlogin=useSelector((state)=>state.adminlogin)
    const navigate =useNavigate()
    const loginSubmit=()=>{
        const datas ={
            username:adminlogin.value.username,
            password:adminlogin.value.password,
        }
        axiosInstance.post('adminlogin/',datas)
        .then((res)=>{
            console.log(res.data,"whyyyyyyyyyyyyyyyyyyyyyyyy")
            const tokens={
                access:res.data.access,
                refresh:res.data.refresh
            }
            localStorage.setItem("adminDetails",JSON.stringify(res.data.userdata))
            localStorage.setItem("accessToken",JSON.stringify(res.data.access))
            if(res.data.message === "success"){
              console.log(res.data.message,"..........")
                navigate('../adminhome')
            }
           
        })
    } 
  
    return (
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="SK COOKS" />
          </div>
          <div className="text-center mt-4 name">
            Sk Cooks
          </div>
          <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
                onChange={(e) => dispatch(changeAdminname(e.target.value))}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
                onChange={(e) => dispatch(changeAdminPassword(e.target.value))}
              />
            </div>
            <button className="btn mt-3" onClick={loginSubmit}>
              Login
            </button>
          </form>
          
        </div>
      );
}

export default Adminlogin
