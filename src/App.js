import React from 'react'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Sigin from './components/Sigin'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  // console.log(process.env.REACT_APP_API_URL)
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='sign-in' element={<Sigin />} />
        <Route path='sign-up' element={<Signup/>} />
        <Route path='*' element={<Navigate to='/sign-in' />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App