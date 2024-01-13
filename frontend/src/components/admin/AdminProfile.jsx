import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios/axios';
import axiosIns from '../../axios/adminaxios'
import 'bootstrap/dist/css/bootstrap.min.css'



const AdminProfile = () => {
  const navigate = useNavigate()

  const editHandle=(id)=>{
    navigate(`../edit/${id}`)
  }
  const homeSubmit=()=>{
    navigate('../home')  
      
} 
  const deleteHandle=(id)=>{
    navigate(`../delete/${id}`)

  }
  

const [userdata,setUserdata]=useState([])
// const [searchData,setSearchData]=useState("")


useEffect(()=>{
  axiosIns.get('admin-user-profile/')
  .then((res)=>{
    console.log(res.data,"&&&&&&&&&&&&&");

    setUserdata(res.data.userdata)
  })

},[])

// const handleSearchSubmit=()=>{
//   const datas={
//     value:searchData
//   }
//   axiosInstance.post("searchuser/",datas).then((response)=>{
//     setUserdata(response.data.data)
//   }).catch((error)=>{
//     alert(error)
//   })
// }

console.log(userdata,"jiiii");
  return (
    <div className='container'>
      <h1>USERS</h1>
      <Link to="/create" className='btn btn-success my-3'>Create+</Link>
      {/* <input type="text" placeholder='Search'  onChange={(e)=>setSearchData(e.target.value)}/> */}
      {/* <button onClick={handleSearchSubmit}>Search</button> */}
      {/* <table className='table'> */}
      <table style={{ borderCollapse: 'collapse', width: '100%' }}> 
        <thead>
            <tr>
                <th>USERNAME</th> 
                <th>NAME</th> 
                <th>USER EMAIL</th>
                <th>image</th> 
                <th>USER PH</th> 
                <th>ACTIONS</th>                
            </tr>
           {userdata.map((item)=>(
           <tr key={item.id}>
              <td>{item.username} </td>
              <td>{item.name} </td>
              <td>{item.email}</td>
              <td>{item.image}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={()=>editHandle(item.id)} className='btn btn-sm btn-primary'>EDIT</button>
                <button onClick={()=>deleteHandle(item.id)} className='btn btn-sm btn-danger ms-2'>DELETE</button>
              </td>
            </tr>
            ))}
            </thead>
      </table>

      <button onClick={homeSubmit}>back to home</button>
    </div>
  )
}

export default AdminProfile
