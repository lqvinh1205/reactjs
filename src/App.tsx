import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route} from "react-router-dom"
import WebsiteLayout from './pages/layouts/WebsiteLayout'
function App() {

  return (
    <Routes>
        <Route path='/' element={<WebsiteLayout />} />
    </Routes>
  )
}

export default App
