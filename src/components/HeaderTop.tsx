import { Button, notification } from "antd";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLs, removeLs } from "../ultis/localstogare";
import "./HeaderTop.css";

type Props = {};

const HeaderTop = (props: Props) => {
    const isSignin = getLs("user")
    const navigate = useNavigate()
    const signOut = () => {
        removeLs('user')
        navigate("/")
        notification.success({
          message: "Đăng xuất thành công"
        })
    }

  return (
    <div className="header-top container-main">
      <div className="row header-logo">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226288/car/favicon_a63nys.png"
            alt=""
          />
        </div>
        <div>ElecCar</div>
      </div>
      <div className="menu-header">
        <ul>
          <li>
            {/* <a href="#pro-new">Home</a> */}
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Shop</Link>
          </li>
          <li>
            <a href="#carousel-cars">Populor</a>
          </li>
          <li>
            <a href="#more-future">About</a>
          </li>      
          <li>
            <a href="#featured-lux">Featured</a>
          </li>
        </ul>
      </div>
      <div className="btn-login">
        {isSignin ? (
          <Link to="/">
            <Button type="dashed" ghost onClick={signOut}>
              Log-out
            </Button>
          </Link>
        ) : (
          <Link to="/signin">
            <Button type="dashed" ghost>
              Sign-In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderTop;
