"use client";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { GoHeartFill } from "react-icons/go";
import "../css/home.css";

const productNames = [
  "Sneakers",
  "Backpack",
  "Smartwatch",
  "Laptop",
  "Headphones",
  "Camera",
  "Sunglasses",
  "Jacket",
  "Smartphone",
  "Tablet",
];

// const prices = productNames.map(() =>
//   (Math.random() * (500 - 20) + 20).toFixed(2)
// );

const RecommendProduct = () => {
  const [liked, setLiked] = useState(Array(10).fill(false));

  const handleLikeClick = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <>
      <p className="title-section">Recommend</p>
      <div className="flex space-x-4 overflow-x-auto py-6">
        {productNames.map((name, index) => (
          <div key={index} className="relative w-[200px] flex-shrink-0">
            <Card className="relative p-4">
              <GoHeartFill
                className={`absolute top-2 right-2 text-xl cursor-pointer ${
                  liked[index] ? "text-pink-500" : "text-gray-300"
                }`}
                onClick={() => handleLikeClick(index)}
              />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-600">$400</p>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecommendProduct;
