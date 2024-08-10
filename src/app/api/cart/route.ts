// app/api/cart/route.ts
import { CartItem } from "@/app/[locale]/contexts/CartContext";
import { NextResponse } from "next/server";

// ในตัวอย่างนี้เราใช้ memory store แต่ในการใช้งานจริงควรใช้ database
let cart: CartItem[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const product = await request.json();
  const existingItemIndex = cart.findIndex((item) => item.id === product.id);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  return NextResponse.json(cart);
}
