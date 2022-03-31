import React from "react";
import "./BannerBottom.css";
type Props = {};

const BannerBottom = (props: Props) => {
  return (
    <div className="banner-bottom">
      <div className="banner-bottom-main container-main">
        <div className="banner-bottom-left">
          <h4>
            Do You Want To Receive <br />
            Special Offers
          </h4>
          <p>
            See the future with high-perfomance electric cars
            <br /> produced by renowed brands. The feature
            <br /> futuristic builds and designs with new and
            <br />
            innovative platforms that last a long time.
          </p>
          <button>Subcribe Now</button>
        </div>
        <div className="banner-bottom-right">
            <img src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226340/car/offer_x3wv8n.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
