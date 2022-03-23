import { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProducList from "./pages/ProducList";
import AddProduct from "./pages/AddProduct";
import axios from "axios";
import { ProductType } from "./types/products";

import "bootstrap/dist/css/bootstrap.min.css";
import EditProduct from "./pages/EditProduct";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:3001/products");
      setProducts(data);
    };
    getProducts();
  }, []);
  const handleAdd = async (product: ProductType) => {
    const { data } = await axios.post(
      "http://localhost:3001/products",
      product
    );
    setProducts([...products, data]);
  };
  const handleRemove = (id: number) => {
    axios.delete(`http://localhost:3001/products/${id}`);
    setProducts(products.filter((item) => item.id !== id));
  };
  const handleUpdate = async (product: ProductType) => {
    try {
      const {data} = await axios.put(`http://localhost:3001/products/${product.id}`, product);
      setProducts(products.map(item => item.id === data.id ? product : item));
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route
              index
              element={
                <ProducList products={products} onRemove={handleRemove} />
              }
            />
            <Route path="add" element={<AddProduct onAdd={handleAdd} />} />
            <Route path="edit/:id" element={<EditProduct onUpdate={handleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
