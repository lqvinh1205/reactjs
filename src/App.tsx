import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProducList from './pages/ProducList'
import AddProduct from './pages/AddProduct'
import axios from 'axios'

// import "boostrap/dist/css/boostrap.min.css"

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProducts =async () => {
      const {data} = await axios.get("http://localhost:3001/products")
      setProducts(data)
    }
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'>
              <Route index element={<ProducList products={products} />}/>
              <Route path='add' element={<AddProduct />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
