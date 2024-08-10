import React from "react";
import { CartProvider } from "../contexts/CartContext";
import ProductComponent from "../components/ProductComponent";
import CartComponent from "../components/CartComponent";

type Props = {};

const AllProductsPage = (props: Props) => {
  return (
    <CartProvider>
      <main>
        <h1>My Store</h1>
        <ProductComponent
          product={{ id: "1", name: "Example Product", price: 9.99 }}
        />
      </main>
    </CartProvider>
  );
};

export default AllProductsPage;
