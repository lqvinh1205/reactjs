import React from "react";
import "./MachineFuture.css";

type Props = {};

const MachineFuture = (props: Props) => {
  return (
    <div className="row machine-future container-main">
      <div className="machine-future-left">
        <div className="machine-future-image">
          <img
            src="https://res.cloudinary.com/dzroyn2i4/image/upload/v1648226297/car/about_hbanbz.png"
            alt=""
          />
        </div>
        <div className="machine-future-item">
          <h4>2.500+</h4>
          <p>Supercharges place along popular routes</p>
        </div>
      </div>
      <div className="machine-future-right">
        <h4>Machines With <br />Future Technology</h4>
        <p>
          See the future with high-perfomance electric cars<br/> produced by renowed
          brands. The feature<br/> futuristic builds and designs with new and<br/>
          innovative platforms that last a long time.
        </p>
        <button>Know more</button>
      </div>
    </div>
  );
};

export default MachineFuture;
