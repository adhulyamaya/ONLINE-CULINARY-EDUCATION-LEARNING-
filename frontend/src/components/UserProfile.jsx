import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axios/axios';
import { storage } from "../../src/firebase/firebaseconfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from 'axios';
const UserProfile = () => {
    const [image,setImage]=useState('')
    const navigate = useNavigate()
    const [udata,setUdata] = useState("")
    const [imageUrl,setImageUrl] = useState("")
  
    useEffect(()=>{
      const userobj = localStorage.getItem("userDetails")
      setUdata(JSON.parse(userobj))  
    },[])
    console.log(udata,"udataaaa");  
    function handleImage(e){
      console.log(e.target.files)
      setImage(e.target.files[0])
    }
    const handleApi=()=>{
      const reference = ref(storage, `users/${image.name + v4()}`);
      uploadBytes(reference, image)
      .then((response)=>{
        getDownloadURL(reference).then((url)=>{
          console.log(url, "PRINTED");
       
        const datas={
          id:udata.id,
          imageurl:url
        }
        
        axiosInstance.post("image-upload/",datas).then((response)=>{
          console.log(response.data,"RESPONSE DATAS")
          setUdata(response.data.details)
        }).catch((error)=>{
          alert(error)
        })

        })                
      })
    }
    const homeSubmit=()=>{
        navigate('../')
    } 
  return (
    <div>
      <h1>userprofile</h1>
      <div>
        <h1>{udata.name} </h1>
        <h3>{udata.username} </h3>
        <p>{udata.email} </p>
        <p>{udata.phone} </p>
        <p>{udata.password} </p>
      </div>
      <div>
        <img src={udata.image} alt="image" />
      </div>
      <input type="file" name='file' onChange={handleImage} />
    <button onClick={handleApi}>Submit</button>
    <br />
    <br />
    <button onClick={homeSubmit}>back to home</button>
    </div>
  )
}
export default UserProfile
