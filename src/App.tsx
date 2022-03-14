import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/showInfo'

function App() {
  const name = "Vinh";
  const age = 18;
  const person = {
    name: "le quang vinh"
  }
  return (
    <div className="App">
      <ShowInfo person={person} name={name} age={age}/>
    </div>
  )
}

export default App
