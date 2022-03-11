import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from '../components/Box';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [myStatus, setMyStatus] = useState(false);
  const [products, setProducts] = useState([{id: 1, name: "A"}, {id:2, name: "B"}])
  const [show, setShow] = useState(true);

  const removeItem = (id) => {
    const newProducts = products.filter(item => item.id !== id)
    setProducts(newProducts) 
  }
  return (
    <div>
        {show && <div>
            Number: {count} <br />
            <Box color={color} /> <br />
            Boolean: {myStatus ? "Da ket hon" : "Chua ket hon"} <br />
            Arr: {products.map(item => <div key={item.id}>{item.name} <button onClick={() => removeItem(item.id)}>Delete</button></div>)}
        </div>}
        <button onClick={() => setCount(prev => prev - 1)}>Desc count</button>    
        <button onClick={() => setCount(count + 1)}>Inc count</button>  <br/>
        <button onClick={() => setColor("red")}>Change Color</button>  <br/>
        <button onClick={() => setShow(!show)}>Hidden</button>    
    </div>
  )
}

export default App
