// app/components/ProductComponent.tsx
"use client";

import React from "react";
import { useCart } from "../contexts/CartContext";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
  };
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    await addToCart(product);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductComponent;
