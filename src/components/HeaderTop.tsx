import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { signOut } from "../features/auth/authSlice";
import "./HeaderTop.css";

type Props = {};

const HeaderTop = (props: Props) => {
  const isSignin = useAppSelector((data: any) => data.auth.isSignin);
  const dispath = useAppDispatch();

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Populor</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
        </ul>
      </div>
      <div className="btn-login">
        {isSignin ? (
          <Link to="/">
            <Button type="dashed" ghost onClick={() => dispath(signOut())}>
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
