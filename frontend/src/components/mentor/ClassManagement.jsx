import React from 'react'
import MentorHeaders from "./MentorHeader";
import { useNavigate,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosInstance from '../../axios/mentoraxios';


function ClassManagement() {
  const navigate=useNavigate()

  const [userdata,setUserdata]=useState([])

  const editHandle = (id) => {
    navigate(`editclass/${id}`);
  };
  const deleteHandle=(id)=>{
    navigate(`deleteclass/${id}`);

  };

  useEffect(()=>{
    axiosInstance.get("classdetails/")
    .then((res)=>{
      console.log(res.data,"add class il ninn get cheyth edukunna datas")
      setUserdata(res.data.userdata)
    })
    .catch((error)=>{
      console.error("Error fetching data:", error);
    })

  },[]);

  return (
    <div>
      <MentorHeaders/>
      ClassManagement
      
        <>
        <div className='container'>
          <h1>CLASSES</h1>
        <Link to="/addclass" className='btn btn-success my-3'>Create+</Link>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}> 
          <thead>
            <tr>
              <th>Course name</th>
              <th>syllabus</th>
              <th>description</th>
              <th>Price</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
            {userdata.map((item)=>(
              <tr key={item.id}>
                <td>{item.class_name} </td>
                <td>{item.syllabus}</td>
                <td>{item.course_description}</td>
                <td>{item.price}</td>
              <td><button onClick={()=>editHandle(item.id)} className='btn btn-sm btn-primary'>EDIT</button></td>
              <td><button onClick={()=>deleteHandle(item.id)} className='btn btn-sm btn-danger ms-2'>DELETE</button></td>
              </tr>
            ))}
          </thead>
        </table>        
        </div>
    </>
    </div>
  )
}
export default ClassManagement