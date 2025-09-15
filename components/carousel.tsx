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
        <h1 className="text-center lg:text-xl text-lg font-semibold mb-3 text-[#134272]">Our Featured Products</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              )}

              <CardContent className="p-4 text-center">
                <CardTitle className="lg:text-lg font-semibold mb-2">
                  {product.name}
                </CardTitle>
                {price && price.unit_amount && (
                  <p className="lg:text-lg font-medium text-[#134272]">
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
