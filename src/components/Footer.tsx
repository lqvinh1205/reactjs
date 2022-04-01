import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Footer.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer row container-main">
      <div className="footer-logo">
        <div className="row footer-logo-main">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226288/car/favicon_a63nys.png"
              alt=""
            />
          </div>
          <div>ElecCar</div>
        </div>
        <div className="row footer-text-brand">
          We offer the best electric cars of
          <br /> the most recognized brands in
          <br /> the word.
        </div>
      </div>

      <div className="company">
        <h4 className="default-title-footer">Company</h4>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Cars</a>
          </li>
          <li>
            <a href="">History</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
        </ul>
      </div>

      <div className="infomation">
        <h4 className="default-title-footer">Infomation</h4>
        <ul>
          <li>
            <a href="">Request a quote</a>
          </li>
          <li>
            <a href="">Find a dealer</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
        </ul>
      </div>

      <div className="social-share">
        <h4 className="default-title-footer">Follow us</h4>
        <div className="row social-group-icon">
          <div className="social-icon">
            <FacebookOutlined />
          </div>
          <div className="social-icon">
            <InstagramOutlined />
          </div>
          <div className="social-icon">
            <TwitterOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
