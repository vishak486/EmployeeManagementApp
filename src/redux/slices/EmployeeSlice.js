import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL="http://localhost:3000"

export const fetchEmployees=createAsyncThunk("employees/fetchEmployees",async()=>{
    const response=await axios.get(`${SERVER_URL}/getEmployee`)
    return response.data
})

export const addEmployees=createAsyncThunk("employees/addEmployees",async(newEmployee)=>{
    const response= await axios.post(`${SERVER_URL}/addEmployee`,newEmployee)
    return response.data
})

const EmployeeSlice=createSlice({
    name:'employees',
    initialState:{
        employeeList:[],
        loading:false,
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchEmployees.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchEmployees.fulfilled,(state,action)=>{
            state.loading=false,
            state.employeeList=action.payload
        })
        .addCase(fetchEmployees.rejected,(state)=>{
            state.loading=true
        })

        // Add Employee 
        .addCase(addEmployees.pending,(state)=>{
            state.loading=true
        })
        .addCase(addEmployees.fulfilled,(state,action)=>{
            state.loading=false,
            state.employeeList.push(action.payload)
        })
        .addCase(addEmployees.rejected,(state)=>{
            state.loading=true
        })
    }
})

export default EmployeeSlice.reducer