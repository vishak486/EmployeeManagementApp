import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import EmployeeList from './components/EmployeeList'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/employeelist' element={<EmployeeList/>} />
      </Routes>
    </>
  )
}

export default App
