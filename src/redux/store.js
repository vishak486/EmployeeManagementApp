import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from './slices/EmployeeSlice'

export const store=configureStore({
    reducer:{
        employees:employeeReducer,
    },
})