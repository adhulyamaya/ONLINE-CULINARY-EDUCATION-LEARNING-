import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={
    username:"",
    name:"",
    email:"",
    phone:"",
    image:"",
    password:"",  
}
const customersignupSlice = createSlice(
    {
        name:"customersignup",
        initialState:{
            value:INITITALSTATE
        },
        reducers:{
            changeUsername:(state,action)=>{
                state.value.username=action.payload
            },
            changeName:(state,action)=>{
                state.value.name=action.payload
            },
            changeEmail:(state,action)=>{
                state.value.email=action.payload
            },
            changePhone:(state,action)=>{
                state.value.phone=action.payload
            },
            changeImage:(state,action)=>{
                state.value.image=action.payload
            },
            changePassword:(state,action)=>{
                state.value.password=action.payload
            },        
        }        
    }
)

export const {changeUsername,changeName,changeEmail,changePhone,changeImage,changePassword} = customersignupSlice.actions
export default customersignupSlice.reducer

