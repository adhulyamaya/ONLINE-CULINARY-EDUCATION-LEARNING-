import React from 'react';
import { useState,useEffect } from 'react';
import axiosInstance from '../axios/axios';


const MyCourses = () => {

  const [mycourse, setMycourses] = useState([]);



  useEffect(()=>{
    axiosInstance.get('purchased-courses/')
    .then((res)=>{
        console.log(res.data)
        setMycourses(res.data)

    })

    
    .catch((error)=>{
        console.error(error);
    });
},[]);


  return (
    <div>
      <div style={rectangularBoxStyle}>
        
        <p>This is a rectangular box within MyCourses component.</p>
      </div>
    </div>
  );
};

const rectangularBoxStyle = {
  width: '500px',          
  height: '500px',         
  border: '2px solid #000', 
  padding: '20px',        
  margin: '20px',         
};

export default MyCourses;

































// const rectangularBoxStyle = {
//   width: '500px',          // Set the width of the box
//   height: '500px',         // Set the height of the box
//   border: '2px solid #000', // Set border with a color
//   padding: '20px',         // Set padding inside the box
//   margin: '20px',          // Set margin around the box
// };

// export default MyCourses;