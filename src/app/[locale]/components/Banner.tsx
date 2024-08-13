import { Carousel } from "antd";
import React from "react";
import "../css/home.css";
import Image from "next/image";

const Banner = () => {
  return (
    <Carousel autoplay>
      <div className="banner-container">
        <Image
          src="/banner-one.png"
          alt="cover"
          fill
          objectFit="cover"
          //  objectFit="contain"
          className="rounded-xl"
          // objectPosition="top"
        />
      </div>
      <div className="banner-container">
        <Image
          src="/banner-two.png"
          alt="cover"
          fill
          objectFit="cover"
          className="rounded-xl"
          objectPosition="top"
        />
      </div>
      <div className="banner-container">
        <Image
          src="/banner-three.png"
          alt="cover"
          fill
          objectFit="cover"
          className="rounded-xl"
          objectPosition="top"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
