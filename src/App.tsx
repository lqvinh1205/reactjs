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

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products">
          <Route index element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<EditProduct />} />
        </Route>
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
