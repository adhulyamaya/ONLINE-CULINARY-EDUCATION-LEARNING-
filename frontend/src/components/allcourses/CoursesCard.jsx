import React from "react"
import "./courses.css"
import { useState, useEffect } from "react";
import Heading from "../common/heading/Heading";
import axiosInstance from "../../axios/axios";
import { Link } from "react-router-dom";

const CoursesCard = () => {
  const[classdata,setClassdata]=useState([])
  

  useEffect(()=>{  
    axiosInstance.get('course-listing/')
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
      <section className='coursesCard'>
        <div className='container grid2'>
          {classdata.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    {/* <img src={val.cover} alt='' /> */}
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.class_name}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {/* {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'> 
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))} */}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.price} / {val.price}
                </h3>
              </div>
              <Link to='/checkout'>
                <button className='outline-btn'>ENROLL NOW !</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )

}

export default CoursesCard
