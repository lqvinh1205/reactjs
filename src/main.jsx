import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ShowAge from './components/showAge'
const person = {
  name: "vinh",
  age: 20,
  status: false,
  children: [
    {id: 1, name: "Minh"},
    {id: 2, name: "hung"},
  ] 
}
function showAge(age) {
  return <p>Tuoi cua minh la: {age}</p>
}

ReactDOM.render(
  <div>
    <p>Tên {person.name}</p>
    <p>Age {person.age}</p>
    <p>{person.status ? "True" : ""}</p>
    <p>{person.children.map((item => 
      <span>{item.name}</span>  
    ))}</p>
    funtion: {showAge(person.age)}
    component: <ShowAge age={person.age}/>
  </div>,
  document.getElementById('root')
)
