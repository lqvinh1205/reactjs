import { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProducList from "./pages/ProducList";
import AddProduct from "./pages/AddProduct";
import axios from "axios";
import { ProductType } from "./types/products";

import "bootstrap/dist/css/bootstrap.min.css";

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
      const {data} = await axios.post("http://localhost:3001/products", product)
      setProducts([...products, data])
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProducList products={products} />} />
            <Route path="add" element={<AddProduct onAdd={handleAdd}/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
