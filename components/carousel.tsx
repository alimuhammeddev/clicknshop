"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  products?: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">No products available</p>;
  }

  const firstThree = products.slice(4, 7);

  return (
    <section>
      <div>
        <h1 className="text-center lg:text-3xl text-2xl font-semibold mb-3">Our Products</h1>
      </div>
      <div className="max-w-7xl mx-auto lg:px-0 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {firstThree.map((product) => {
          const price = product.default_price as Stripe.Price;

          return (
            <Card
              key={product.id}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
            >
              {product.images && product.images[0] && (
                <div className="relative h-64 w-full">
                  <Image
                    alt={product.name}
                    src={product.images[0]}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <CardContent className="p-4 text-center">
                <CardTitle className="text-xl font-semibold mb-2">
                  {product.name}
                </CardTitle>
                {price && price.unit_amount && (
                  <p className="text-lg font-medium text-[#1c4880]">
                    ${(price.unit_amount / 100).toFixed(2)}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
