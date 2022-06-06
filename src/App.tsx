import "./App.css";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import WebsiteLayout from "./layouts/WebsiteLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./pages/customer/HomePage/HomePage";
import Products from "./pages/customer/Products/Products";
import DetailProduct from "./components/customer/DetailProduct/DetailProduct";
import Carts from "./pages/customer/Cart/Carts";
import PrivateRouter from "./components/admin/PrivateRouter/PrivateRouter";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import ListProducts from "./components/admin/Product/ListProducts";
import AddProduct from "./components/admin/Product/AddProduct";
import EditProduct from "./components/admin/Product/EditProduct";
import ListCategory from "./components/admin/Category/ListCategory";
import AddCategory from "./components/admin/Category/AddCategory";
import EditCategory from "./components/admin/Category/EditCategory";
import ListUsers from "./components/admin/User/ListUsers";
import AddUser from "./components/admin/User/AddUser";
import EditUser from "./components/admin/User/EditUser";
import Signup from "./pages/auth/Signup/Signup";
import Signin from "./pages/auth/Signin/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" >
          <Route index element={<Products />} />
          <Route path=":id" element={<DetailProduct />} />
        </Route>
        <Route path="carts/:userId" >
          <Route index element={<Carts />} />
        </Route>
      </Route>
      <Route
        path="admin"
        element={
          <PrivateRouter>
            <AdminLayout />
          </PrivateRouter>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products">
          <Route index element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<EditProduct />} />
        </Route>
        <Route path="category">
          <Route index element={<ListCategory />} />
          <Route path="add" element={<AddCategory />} />
          <Route path=":id/edit" element={<EditCategory />} />
        </Route>
        <Route path="users">
          <Route index element={<ListUsers />} />
          <Route path="add" element={<AddUser />} />
          <Route path=":id/edit" element={<EditUser />} />
        </Route>
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
