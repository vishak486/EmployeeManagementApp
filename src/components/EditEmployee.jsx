import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { fetchEmployees, updateEmployees } from '../redux/slices/EmployeeSlice';


const EditEmployee = ({employees}) => {
      const [show, setShow] = useState(false);
      const [employeeDetails,setEmployeeDetails]=useState({
        name:employees.name,email:employees.email,designation:employees.designation,salary:employees.salary
      })
      const dispatch=useDispatch()
      
      const handleClose = () => {
        setEmployeeDetails({name:"",email:"",designation:"",salary:""})
        setShow(false);
      }
      const handleShow = () => setShow(true);

      const handleSubmit=()=>{
        const{name,email,designation,salary}=employeeDetails
        if(!name || !email || !designation || !salary)
        {
            alert("Please fill the fields")
        }
        else
        {
            dispatch(updateEmployees({ updatedEmployee: employeeDetails, id: employees._id }))
            handleClose();
        }
      }
    
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Edit
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
    
                <div className="row">
                <div className="col-md-6 mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter employee name"
                    value={employeeDetails.name}
                    onChange={e=>setEmployeeDetails({...employeeDetails,name:e.target.value})}
                    />
                </div>
    
                <div className="col-md-6 mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={employeeDetails.email}
                    onChange={e=>setEmployeeDetails({...employeeDetails,email:e.target.value})}
                    />
                </div>
    
                <div className="col-md-6 mb-3">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter designation"
                    value={employeeDetails.designation}
                    onChange={e=>setEmployeeDetails({...employeeDetails,designation:e.target.value})}
                    />
                </div>
    
                <div className="col-md-6 mb-3">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                    type="number"
                    placeholder="Enter salary"
                    value={employeeDetails.salary}
                    onChange={e=>setEmployeeDetails({...employeeDetails,salary:e.target.value})}
                    />
                </div>
    
                </div>
    
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default EditEmployee