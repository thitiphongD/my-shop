// app/contexts/CartContext.tsx
"use client";

import React, { createContext, useContext, ReactNode } from "react";
import useSWR from "swr";

interface Product {
  id: string;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  isLoading: boolean;
  error: any;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    data: cart,
    error,
    isLoading,
    mutate,
  } = useSWR<CartItem[]>("/api/cart", fetcher);

  const addToCart = async (product: Product) => {
    await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    mutate(); // Trigger revalidation
  };

  return (
    <CartContext.Provider
      value={{ cart: cart || [], addToCart, isLoading, error }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
