import React from 'react'
import "./HeaderTop.css"

type Props = {}

const HeaderTop = (props: Props) => {
  return (
    <div className='header-top container'>
        <div className='row header-logo'>
            <div className="logo">
                <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226288/car/favicon_a63nys.png" alt="" />
            </div>
            <div>ElecCar</div>
        </div>
        <div className="menu-header">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Populor</a></li>
                <li><a href="">Featured</a></li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderTop