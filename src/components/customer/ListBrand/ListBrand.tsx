import React from 'react'
import "./ListBrand.css"
type Props = {}

const ListBrand = (props: Props) => {
  return (
    <div className='row brand-logo container-main'>
        <div className="brand-logo-items">
            <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226340/car/logo1_qz80i5.png" alt="" />
        </div>
        <div className="brand-logo-items">
            <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226340/car/logo2_a8gk9p.png" alt="" />
        </div>
        <div className="brand-logo-items">
            <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226328/car/logo3_r9t3d9.png" alt="" />
        </div>
        <div className="brand-logo-items">
            <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226328/car/logo4_ydvwnt.png" alt="" />
        </div>
        <div className="brand-logo-items">
            <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226328/car/logo5_huqr6z.png" alt="" />
        </div>
        <div className="brand-logo-items">
            <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226328/car/logo6_kcwjaf.png" alt="" />
        </div>
    </div>
  )
}

export default ListBrand