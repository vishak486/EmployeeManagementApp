import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployees, fetchEmployees } from '../redux/slices/EmployeeSlice';

const AddEmployee = () => {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()
  const [employeeDetails,setEmployeeDetails]=useState({
    name:"",email:"",designation:"",salary:""
  })
  
  const handleClose = () => {
    setEmployeeDetails({ name:"",email:"",designation:"",salary:""})
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleSubmit=()=>{
    const {name,email,designation,salary}=employeeDetails
    if(!name || !email || !designation || !salary)
    {
      alert("Please fill all the fields...")
    }
    else
    {
        dispatch(addEmployees(employeeDetails)).then(()=>{
          dispatch(fetchEmployees())
        })
        handleClose();
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
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

export default AddEmployee