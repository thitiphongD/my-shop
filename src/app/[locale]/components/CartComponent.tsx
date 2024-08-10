// app/components/CartComponent.tsx
"use client";

import React from "react";
import { useCart } from "../contexts/CartContext";

const CartComponent: React.FC = () => {
  const { cart, isLoading, error } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cart</div>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>Quantity: {item.quantity}</span>
          <span>Price: ${item.price * item.quantity}</span>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
