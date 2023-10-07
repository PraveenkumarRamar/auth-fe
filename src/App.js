import React from 'react'
import{BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Siginin from './components/Siginin'
import Signup from './components/Signup'
import MainPage from './components/MainPage'
import ResetPass from './components/ResetPass'

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/sign-in' element={<Siginin/>} />
    <Route path='sign-up' element={<Signup/>} />
    <Route path='/home-page' element={<MainPage/>} />
    <Route path='/reset-pass' element={<ResetPass/>} />
    <Route path='*' element={<Navigate to='/home-page' />} />
  </Routes>
  </BrowserRouter>
  </>
}

export default App