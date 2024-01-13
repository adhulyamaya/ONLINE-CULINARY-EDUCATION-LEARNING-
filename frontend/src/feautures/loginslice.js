import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={
    username:"",
    password:"",

  
}

const customerloginSlice = createSlice(
    {
        name:"customerlogin",
        initialState:{
            value:INITITALSTATE
        },
        reducers:{
            changeUsername:(state,action)=>{
                state.value.username=action.payload
            },
            changePassword:(state,action)=>{
                state.value.password=action.payload
            },
        
        }

        
    }


)

export const {changeUsername,changePassword} = customerloginSlice.actions

export default customerloginSlice.reducer