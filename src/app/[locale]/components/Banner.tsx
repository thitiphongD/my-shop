import { Carousel } from "antd";
import React from "react";
import "../css/home.css";

const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 className="banner">1</h3>
      </div>
      <div>
        <h3 className="banner">2</h3>
      </div>
      <div>
        <h3 className="banner">3</h3>
      </div>
      <div>
        <h3 className="banner">4</h3>
      </div>
    </Carousel>
  );
};

export default Banner;
