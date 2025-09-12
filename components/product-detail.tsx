"use client";

import Image from "next/image";
import Stripe from "stripe";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";
import { Navbar } from "./navbar";
import Footer from "./footer";
import { ShoppingCart } from "lucide-react";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row gap-8 lg:items-center mt-28">
        {product.images && product.images[0] && (
          <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <div className="md:w-1/2">
          <h1 className="lg:text-3xl text-xl font-bold mb-4">{product.name}</h1>
          {product.description && (
            <p className="text-gray-700 mb-4">{product.description}</p>
          )}
          {price && price.unit_amount && (
            <p className="lg:text-lg font-semibold text-gray-900">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}

          {quantity === 0 ? (
            <Button
              className="bg-[#134272] text-white mt-4 w-full md:w-auto"
              onClick={onAddItem}
            >
              <ShoppingCart /> Add to Cart
            </Button>
          ) : (
            <div className="flex items-center space-x-4 mt-4">
              <Button
                variant="outline"
                className="bg-[#134272] text-white"
                onClick={() => removeItem(product.id)}
              >
                –
              </Button>
              <span className="text-lg font-semibold">{quantity}</span>
              <Button
                variant="outline"
                className="bg-[#134272] text-white"
                onClick={onAddItem}
              >
                +
              </Button>
            </div>
          )}
        </div>
      </div>

      <section className="mt-10">
        <Footer />
      </section>
    </section>
  );
};