import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";


function AdminHome(){
    const navigate=useNavigate()

    const logoutSubmit=()=>{
        localStorage.removeItem("adminDetails")
        localStorage.removeItem("accessToken")
        navigate('../adminlogin')
    }
    const usersSubmit=()=>{
        navigate('../admin-profile')

    }
    const mentorsSubmit=()=>{
        navigate('../mentorsmanage')
        console.log(navigate)
    }

    const courselistSubmit=()=>{
        navigate('../coursemanage')
        console.log(navigate)
    }
 
    return(
        <>
        <button onClick={logoutSubmit}>Logout </button>
        <br />
        <button onClick={usersSubmit}>USERS</button>
        <br />
        <button onClick={mentorsSubmit}>MENTORS</button>
        <br />
        <button onClick={courselistSubmit}>courselisted</button>
        </>
        
    )
}
export default AdminHome