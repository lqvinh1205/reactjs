import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/showInfo'

import type { Person } from './types/person'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { list } from './api/products'
import axios from 'axios'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import HomePages from './pages/HomePages'
import ProductsPage from './pages/ProductsPage'
import AdminLayout from './pages/layouts/AdminLayout'
import DashboardPages from './pages/DashboardPages'
import ProductsManager from './pages/ProductsManager'
import ProductDetails from './pages/ProductDetails'
function App() {
  const [products, setProducts] = useState<{_id: number, name: string}[]>([])
  useEffect(() => {
    const getListProducts = async () => {
      const {data} = await axios.get("http://localhost:3001/api/products")
      console.log(data);
      setProducts(data)
    }
    getListProducts()
  },[]) 
  
  return (
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/products">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
          <li><NavLink to="/admin/products">Dashboard</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
              <Route index element={<HomePages />} />
              <Route path='products' element={<ProductsPage />}>
              </Route>
          </Route>
          <Route path='admin' element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path='dashboard' element={<DashboardPages />} />
                <Route path='products' element={<ProductsManager />} />
                <Route path='product/:id' element={<ProductDetails />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
