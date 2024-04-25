import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import About from './pages/About'
import Header from './components/Header'
import Footers from './components/Footer'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
    
      <Route path="/" element={ <Home/> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path="/sign-up" element={ <Signup/> }/>
      <Route path="/sign-in" element={ <Signin/> }/>

      <Route path="/dashboard" element={ <Dashboard/> }/>
    
    </Routes>
    <Footers/>
    </BrowserRouter>
  )
}
