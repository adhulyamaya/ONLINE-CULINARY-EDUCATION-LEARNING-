import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mentoraxios from '../../axios/mentoraxios'
import axiosIns from '../../axios/adminaxios'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap'

const Mentorsmanage = () => {
   const navigate = useNavigate()
   const homeSubmit=()=>{
    navigate('../home')  
      
} 
const [userdata,setUserdata]=useState([])

useEffect(()=>{
  axiosIns.get('admin-mentor-list/')
  .then((res)=>{
    console.log(res.data);
    setUserdata(res.data.userdata)
  })
  .catch((error) => {
    console.error(error);
});

},[])

const handleApproval = (mentorId, isApproved) => {
  axiosIns.post('mentor-approval/', { mentor_id: mentorId, is_approved: isApproved })
      .then((res) => {
        if (res.data.message === "success") {
          console.log(res.data.message)
            
        }
          // button change avunna means approved,rejected ezhuthanam
          console.log(res.data.message);
          // Reloadnulla enthelum ezhuthanam 
          axiosIns.get('admin-mentor-list/')
              .then((res) => {
                  setUserdata(res.data.userdata);
              })
              .catch((error) => {
                  console.error(error);
              });
      })
      // .catch((error) => {
      //     // Handle error
      //     console.error(error);
      // });
};

  return (
    <div className='container'>
      <h1>MENTORS</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}> 
        <thead>
            <tr>
                <th>FULLNAME</th> 
                <th>EMAIL</th> 
                <th>EXPERIENCE</th>
                <th>EXPERTISE</th> 
                <th>ADDRESS</th> 
                <th>IMAGE</th>
                <th>CERTIFICATE</th> 
                <th>Approval status</th>                
            </tr>
           {userdata.map((item)=>(
           <tr key={item.id}>
              <td>{item.name} </td>
              <td>{item.fullname} </td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.image}</td>
              <td>{item.image}</td>
              <td>{item.certificate}</td>
              <td>
                   <button onClick={() => handleApproval(item.id, true)}>Approve</button>
                   <button onClick={() => handleApproval(item.id, false)}>Reject</button>
              </td>
            </tr>
            ))}
            </thead>
      </table>

      <button onClick={homeSubmit}>back to home</button>
    </div>
  )
}

export default Mentorsmanage