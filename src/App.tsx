import "./App.css";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import ListProducts from "./features/products/pages/ListProducts";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AddProduct from "./features/products/pages/AddProduct";
import EditProduct from "./features/products/pages/EditProduct";
import PrivateRouter from "./components/PrivateRouter";
import ListCategory from "./features/category/pages/ListCategory";
import AddCategory from "./features/category/pages/AddCategory";
import EditCategory from "./features/category/pages/EditCategory";
import Products from "./pages/Products";
import ListUser from "./features/users/pages/ListProducts";
import AddUser from "./features/users/pages/AddUser";
import EditUser from "./features/users/pages/EditUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<Products />} />
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
          <Route index element={<ListUser />} />
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
