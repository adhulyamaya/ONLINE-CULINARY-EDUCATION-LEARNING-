// import React from 'react'
// import MentorHeaders from "./MentorHeader";
// import { useNavigate,Link } from 'react-router-dom';
// import { useState,useEffect } from 'react';
// import axiosInstance from '../../axios/mentoraxios';
// // import './mentormanage.css'

// function ClassManagement() {
//   const navigate=useNavigate()

//   const [userdata,setUserdata]=useState([])

//   const editHandle = (id) => {
//     navigate(`editclass/${id}`);
//   };
//   const deleteHandle=(id)=>{
//     navigate(`deleteclass/${id}`);

//   };


// const toggleEnableDisable = (id) => {
//   axiosInstance.patch(`classdetails/${id}/`, { enabled: !item.enabled })
//     .then((res) => {
//       setUserdata((prevUserData) => (
//         prevUserData.map(item => (
//           item.id === id ? { ...item, enabled: !item.enabled } : item
//         ))
//       ));
//     })
//     .catch((error) => {
//       console.error("Error toggling enable/disable:", error);
//     });
// };


//   useEffect(()=>{
//     axiosInstance.get("classdetails/")
//     .then((res)=>{
//       console.log(res.data,"add class il ninn get cheyth edukunna datas")
//       setUserdata(res.data.userdata)
//     })
//     .catch((error)=>{
//       console.error("Error fetching data:", error);
//     })

//   },[]);

//   return (
//     <div>
//   <MentorHeaders />
//   <div className='container'>
//     <h1>CLASSES</h1>
//     <Link to="/addclass" className='btn btn-success my-3'>Create+</Link>
//     <table className='table'>
//       <thead>
//         <tr>
//           <th>Course name</th>
//           <th>Syllabus</th>
//           <th>Description</th>
//           <th>Price</th>
//           <th>Enable/Disable</th>
//           <th>EDIT</th>
//           <th>DELETE</th>
//         </tr>
//       </thead>
//       <tbody>
//         {userdata.map((item) => (
//           <tr key={item.id}>
//             <td>{item.class_name}</td>
//             <td>{item.syllabus}</td>
//             <td>{item.course_description}</td>
//             <td>{item.price}</td>
//             <td>
//                   <button
//                     onClick={() => toggleEnableDisable(item.id, item.enabled)}
//                     className={`btn btn-sm ${item.enabled ? 'btn-success' : 'btn-danger'}`}
//                   >
//                     {item.enabled ? 'Disable' : 'Enable'}
//                   </button>
//                 </td>
//             <td><button onClick={() => editHandle(item.id)} className='btn btn-sm btn-primary'>EDIT</button></td>
//             <td><button onClick={() => deleteHandle(item.id)} className='btn btn-sm btn-danger ms-2'>DELETE</button></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>

//   )
// }
// export default ClassManagement


import React, { useEffect, useState } from 'react';
import MentorHeaders from "./MentorHeader";
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../../axios/mentoraxios';

function ClassManagement() {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState([]);

  const editHandle = (id) => {
    navigate(`editclass/${id}`);
  };

  const deleteHandle = (id) => {
    navigate(`deleteclass/${id}`);
  };

  const toggleEnableDisable = (id, currentStatus, item) => {
    console.log(id,"ddddddddd")
    axiosInstance.patch(`classdetails/${id}/`, { enabled: !currentStatus })

      .then((res) => {
        console.log(res.data)
        setUserdata((prevUserData) => (
          prevUserData.map(userDataItem => (
            userDataItem.id === id ? { ...userDataItem, enabled: !currentStatus } : userDataItem
          ))
        ));
      })
      
  };

  useEffect(() => {
    axiosInstance.get("classdetails/")
      .then((res) => {
        console.log(res.data, "add class il ninn get cheyth edukunna datas");
        setUserdata(res.data.userdata);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <MentorHeaders />
      <div className='container'>
        <h1>CLASSES</h1>
        <Link to="/addclass" className='btn btn-success my-3'>Create+</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Course name</th>
              <th>Syllabus</th>
              <th>Description</th>
              <th>Price</th>
              <th>Enable/Disable</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((item) => (
              <tr key={item.id}>
                <td>{item.class_name}</td>
                <td>{item.syllabus}</td>
                <td>{item.course_description}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => toggleEnableDisable(item.id, item.enabled, item)}
                    className={`btn btn-sm ${item.enabled ? 'btn-success' : 'btn-danger'}`}
                  >
                    {item.enabled ? 'Disable' : 'Enable'}
                  </button>
                </td>
                <td><button onClick={() => editHandle(item.id)} className='btn btn-sm btn-primary'>EDIT</button></td>
                <td><button onClick={() => deleteHandle(item.id)} className='btn btn-sm btn-danger ms-2'>DELETE</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassManagement;
