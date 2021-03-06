import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ProductNew.css";

type Props = {};

const ProductNew = (props: Props) => {
  return (
    <div className="container-main pro-new-main" id="pro-new">
      <div className="row pro-new-img">
        <img
          src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226340/car/home_wdkudp.png"
          alt=""
        />
      </div>
      <div className="row pro-new">
        <div className="pro-new-box">
          <div className="pro-new-box-icon">
            <i className="ri-temp-hot-line"></i>
          </div>
          <div className="pro-new-box-detail">
            24<i className="ri-celsius-fill"></i>
          </div>
          <div className="pro-new-box-des">temperature</div>
        </div>
        <div className="pro-new-box">
          <div className="pro-new-box-icon">
            <i className="ri-safari-line"></i>
          </div>
          <div className="pro-new-box-detail">873</div>
          <div className="pro-new-box-des">mileage</div>
        </div>
        <div className="pro-new-box">
          <div className="pro-new-box-icon">
            <i className="ri-flashlight-line"></i>
          </div>
          <div className="pro-new-box-detail">94%</div>
          <div className="pro-new-box-des">battery</div>
        </div>
      </div>
      <div className="row start">
        <a href="#machine-feature">
          <div className="btn-start">Start</div>
        </a>
      </div>
    </div>
  );
};

export default ProductNew;
