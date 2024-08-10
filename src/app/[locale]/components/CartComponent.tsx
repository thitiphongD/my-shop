"use client";

import React from "react";
import { useCart } from "../contexts/CartContext";
import { Badge } from "antd";

const CartComponent: React.FC = () => {
  const { cart, isLoading, error } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cart</div>;

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <Badge count={item.quantity}></Badge>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
