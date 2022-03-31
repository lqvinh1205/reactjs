import './App.css'
import { Routes, Route} from "react-router-dom"
import 'antd/dist/antd.css';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import HomePage from './pages/HomePage';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ListProducts from './features/products/pages/ListProducts';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

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
        <Route path='/signin' element={<Signin />}/>
    </Routes>
  )
}

export default App
