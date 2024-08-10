"use client";

import React from "react";
import { useCart } from "../contexts/CartContext";

const CartComponent: React.FC = () => {
  const { cart, isLoading, error } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cart</div>;

  return (
    <div>
      {cart.map((item) => (
        <div
          key={item.id}
          className="absolute w-5 h-5 right-[80px] top-[6px] rounded-full bg-blue-900 flex items-center justify-center"
        >
          <span className="text-xs text-white">{item.quantity}</span>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
