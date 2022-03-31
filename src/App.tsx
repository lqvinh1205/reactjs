import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route} from "react-router-dom"
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import 'antd/dist/antd.variable.min.css';
import ListProducts from './pages/admin/products/ListProducts'
import Signup from './pages/Signup'

function App() {

  return (
    <Routes>
        <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage />}/>
        </Route>
        <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path='products' element={<ListProducts />}/>
        </Route>
        <Route path='/signup' element={<Signup />}/>
    </Routes>
  )
}

export default App
