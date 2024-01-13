import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../axios/mentoraxios'



const DeleteClass = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const yesHandle=()=>{
        axiosInstance.post(`deleteclass/${id}`)
        .then((res)=>{
          console.log(res.data);

          navigate('../classmanagement/')
        })    

    }
    const noHandle=()=>{
      navigate('../classmanagement/')
    }

  

  return (
    <div>
      <p>Are you sure to delete the data</p>
      <button onClick={yesHandle}>yes</button>
      <button onClick={noHandle}>No</button>
    </div>
  )
}

export default DeleteClass
