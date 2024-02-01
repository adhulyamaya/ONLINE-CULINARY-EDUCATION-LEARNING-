import React from 'react'
import { useState,useEffect } from 'react'
import axiosInstance from '../../axios/adminaxios'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Box from '@mui/material/Box';

const CourseManage = () => {
    const[classdata,setClassdata]=useState([])

    useEffect(()=>{
        axiosInstance.get('admin-class-list/')
        .then((res)=>{
            console.log(res.data)
            setClassdata(res.data.classdata)

        })

        
        .catch((error)=>{
            console.error(error);
        })
    },[])

  return (
    <>
    <Navbar/>
    {/* <div class='container'> */}
        

        <Box sx={30}/>
        <SideBar/>
        <h1>COURSES</h1>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}> 
        <thead>
        <tr>
        <th>course name</th>
        <th>instructor name</th>
        <th>price</th>
        </tr>
        {classdata.map((item)=>(
           <tr key={item.id}>
              <td>{item.class_name} </td>
              <td>{item.mentor.fullname} </td>
              <td>{item.price}</td>
              </tr>))}
        </thead>
        </table>
      
    {/* </div> */}
    </>
  )
}

export default CourseManage
