import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/showInfo'

import type { Person } from './types/person'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { create, list, remove, update } from './api/products'
import axios from 'axios'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import HomePages from './pages/HomePages'
import ProductsPage from './pages/ProductsPage'
import AdminLayout from './pages/layouts/AdminLayout'
import DashboardPages from './pages/DashboardPages'
import ProductsManager from './pages/ProductsManager'
import ProductDetails from './pages/ProductDetails'
import ProductAdd from './pages/ProductAdd'
import { Product } from './types/products'
import ProductEdit from './pages/ProductEdit'
import PrivateRouter from './components/PrivateRouter'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
function App() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const getListProducts = async () => {
      const {data} = await list();
      setProducts(data)
    }
    getListProducts()
  },[]) 
  const onHandleAdd = async (product: any) => {
    console.log(product);
    const {data} = await create(product)
    setProducts([...products, data])
  }
  const handleRemove = async (id: any) => {
    //Call Api
    const { data } = await remove(id)
    // reRender
    setProducts(products.filter(item => item._id !== id))
  }

  const handleUpdate = async (product: any) => {
    //Call Api
    const { data } = await update(product)
    // reRender
    setProducts(products.map(item => item._id === data._id ? data : item))
  }
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
              <Route path='products' element={<ProductsPage />} />
              <Route path='products/add' element={<ProductAdd onAdd={onHandleAdd}/>} />
              <Route path='products/:id/edit' element={<ProductEdit onUpdate={handleUpdate}/>} />
          </Route>
          <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path='dashboard' element={<DashboardPages />} />
                <Route path='products' element={<ProductsManager products={products} onRemove={handleRemove} />} />
                <Route path='product/:id' element={<ProductDetails />} />
          </Route>
          <Route path='login' element={<Signup />}/>
          <Route path='signin' element={<Signin />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
