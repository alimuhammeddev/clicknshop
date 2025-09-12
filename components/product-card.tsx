"use client";

import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product?: Stripe.Product;
  loading?: boolean;
}

export const ProductCard = ({ product, loading }: Props) => {
  if (loading || !product) {
    return (
      <Card className="animate-pulse h-full flex flex-col border border-gray-200">
        <div className="relative h-60 w-full bg-gray-200 rounded-t-lg" />
        <CardHeader className="p-4">
          <div className="h-4 w-3/4 bg-gray-300 rounded mb-2" />
          <div className="h-4 w-1/2 bg-gray-300 rounded" />
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col justify-between -mt-5">
          <div className="h-3 w-full bg-gray-300 rounded mb-2" />
          <div className="h-3 w-2/3 bg-gray-300 rounded mb-2" />
          <div className="h-8 w-24 bg-gray-300 rounded mt-4" />
        </CardContent>
      </Card>
    );
  }

  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/product/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300">
        {product.images && product.images[0] && (
          <div className="relative h-60 w-full">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              className="object-cover group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}

        <CardHeader className="p-4">
          <CardTitle className="lg:text-xl text-lg font-bold text-gray-800">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 flex-grow flex flex-col justify-between -mt-5">
          {product.description && (
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          )}
          {price && price.unit_amount && (
            <p className="lg:text-lg font-semibold text-gray-900">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className="mt-4 bg-[#134272] text-white cursor-pointer">
            Product Details
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};