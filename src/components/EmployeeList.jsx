import React, { useEffect, useState } from 'react'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployees, removeEmployees } from '../redux/slices/EmployeeSlice'
import { Spinner } from 'react-bootstrap'

const EmployeeList = () => {
    const{employeeList,loading}=useSelector((state)=>state.employees)
    const[search,setSearch]=useState("")
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchEmployees(search))
    },[search])
   // console.log(search);
    

   // console.log(employeeList);
    
  return (
    <>
    <div className='min-vh-100' style={{ background: "linear-gradient(135deg, #e3f2fd, #ffffff)"}}>
        <div className="container py-5">

        <div  className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Employee List</h2>

            <AddEmployee/>
        </div>

        <div className="row mb-4">
            <div className="col-md-4">
            <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Search employee..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            </div>
        </div>

        <div className="table-responsive shadow rounded">
            {
               loading?(
                    <div className="text-center my-5">
                            <Spinner animation="border" variant="primary" />
                     </div>
               ):
               (
                 <table className="table table-hover align-middle text-center mb-0">

                <thead className="table-dark">
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employeeList.map((employees,index)=>(       
                        <tr key={employees._id}>
                            <td>{index+1}</td>
                            <td>{employees.name}</td>
                            <td>{employees.email}</td>
                            <td>{employees.designation}</td>
                            <td>₹{employees.salary}</td>
                            <td>
                                <EditEmployee employees={employees}/>
                                <button onClick={()=>dispatch(removeEmployees(employees._id))} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                        ))
                    }
                   
                </tbody>

                </table>
               )
            }
           
        </div>

        </div>
     </div>
    </>
  )
}

export default EmployeeList