import { Carousel } from "antd";
import React from "react";
import "../css/home.css";

// #febd11

// #43ccd4

const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 className="banner">1</h3>
      </div>
      <div>
        <h3 className="banner2">2</h3>
      </div>
      <div>
        <h3 className="banner3">3</h3>
      </div>
    </Carousel>
  );
};

export default Banner;
