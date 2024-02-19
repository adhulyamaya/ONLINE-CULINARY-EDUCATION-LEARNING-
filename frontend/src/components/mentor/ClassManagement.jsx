import React, { useEffect, useState } from 'react';
import MentorHeaders from "./MentorHeader";
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../../axios/mentoraxios';
import MentorSidebar from "./MentorSidebar";

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
      <div style={{ display: "flex" }}>
      <MentorSidebar />
      <div style={{ flex: 1, padding: "20px", margin: 0 }}>
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
      </div>

    </div>
  );
}

export default ClassManagement;
