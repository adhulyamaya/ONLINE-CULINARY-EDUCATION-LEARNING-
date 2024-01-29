import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RouterOutlet from "../RouterOutlet/RouterOutlet";


function AdminHome(){
    const navigate=useNavigate()

    const logoutSubmit=()=>{
        localStorage.removeItem("adminDetails")
        localStorage.removeItem("accessToken")
        navigate('../adminlogin')
    }
 
    return(
        <>
        <button onClick={logoutSubmit}>Logout </button>
        <br />
        <Link to="/admin-profile">ALL USERS</Link>
        <br />
        <Link to="/admin-home/mentors-manage">MENTORS</Link>
        <br />
        <Link to="/admin-home/course-manage">COURSES</Link>
        
        <RouterOutlet/>
        </>
        
    )
}
export default AdminHome