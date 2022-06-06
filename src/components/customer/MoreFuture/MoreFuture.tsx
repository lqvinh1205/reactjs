import React from "react";
import "./MoreFuture.css";

type Props = {};

const MoreFuture = (props: Props) => {
  return (
    <div className="more-future container-main" id="more-future">
      <div className="more-future-title">
        <h4>More Features</h4>
      </div>
      <div className="more-future-main">
        <div className="more-future-image">
          <img
            src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226329/car/features_yapcsv.png"
            alt=""
          />
          <div className="more-future-items more-future-item-1">
            <h4>800v</h4>
            <p>Turbor Chargin</p>
          </div>
          <div className="more-future-items more-future-item-2">
            <h4>800v</h4>
            <p>Turbor Chargin</p>
          </div>
          <div className="more-future-items more-future-item-3">
            <h4>800v</h4>
            <p>Turbor Chargin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFuture;
