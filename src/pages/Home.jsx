import React from 'react'
import { Link } from 'react-router-dom'
import empGif from '../assets/emgGif.gif'

const Home = () => {
  return (
    <>
<div className="container-fluid min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)"
      }}
    >
      <div className="row w-100 justify-content-center px-4">

        <div className="col-lg-10">
          <div className="row align-items-center bg-white rounded-4 shadow-lg p-5">

            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={empGif}
                alt="Employee"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </div>

            <div className="col-md-6">

              <span className="badge bg-primary mb-3 px-3 py-2">
                Employee Dashboard
              </span>

              <h1 className="fw-bold mb-3">
                Welcome To <span className="text-primary">Employee Management</span>
              </h1>

              <p className="text-muted fs-5 mb-4">
                A modern platform to manage employees efficiently.  
                Perform CRUD operations, track records, and keep everything organized
                with a fast and secure system.
              </p>

              <div className="d-flex gap-3">
                <Link to={'/employeelist'} className="btn btn-outline-primary btn-lg px-5 rounded-pill shadow">
                  Get Started
                </Link>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home