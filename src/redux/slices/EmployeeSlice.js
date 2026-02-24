import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL="http://localhost:3000"

export const fetchEmployees=createAsyncThunk("employees/fetchEmployees",async(search='')=>{
    const response=await axios.get(`${SERVER_URL}/getEmployee?search=${search}`)
    return response.data
})

export const addEmployees=createAsyncThunk("employees/addEmployees",async(newEmployee)=>{
    const response= await axios.post(`${SERVER_URL}/addEmployee`,newEmployee)
    return response.data
})

export const updateEmployees=createAsyncThunk('employees/updateEmployees',async({updatedEmployee,id})=>{
    const response= await axios.put(`${SERVER_URL}/updateEmployee/${id}`,updatedEmployee)
    return response.data
})

export const removeEmployees=createAsyncThunk('employees/removeEmployees',async(id)=>{
    const response= await axios.delete(`${SERVER_URL}/deleteEmployee/${id}`)
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

       //UpdateEmployees
       .addCase(updateEmployees.pending,(state)=>{
        state.loading=true
       })
       .addCase(updateEmployees.fulfilled,(state,action)=>{
        state.loading=false
        const index=state.employeeList.findIndex(emp=>emp._id===action.payload._id)
        if(index!=-1)
        {
            state.employeeList[index]=action.payload
        }
       })
       .addCase(updateEmployees.rejected,(state)=>{
        state.loading=false
       })

    //    DeleteEMployees
      .addCase(removeEmployees.pending,(state)=>{
        state.loading=true
      })
      .addCase(removeEmployees.fulfilled,(state,action)=>{
        state.loading=false,
        state.employeeList=state.employeeList.filter(emp=>emp._id!==action.payload._id)
      })
      .addCase(removeEmployees.rejected,(state)=>{
        state.loading=false
      })
    }
})

export default EmployeeSlice.reducer