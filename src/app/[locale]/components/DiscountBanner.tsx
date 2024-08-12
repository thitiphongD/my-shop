import React from "react";
import "../css/home.css";
import { Button } from "antd";

const DiscountBanner = () => {
  return (
    <>
      <div className="discount-banner">
        <div>
          <p className="text-3xl text-sky-950 font-bold">
            Epic Product for every one
          </p>
          <p className="text-sm text-sky-950 mt-2">
            Grow your collection with these legendary finds.
          </p>
        </div>
        <Button className="rounded-xl text-sky-950 font-bold">Shop now</Button>
      </div>
    </>
  );
};

export default DiscountBanner;
