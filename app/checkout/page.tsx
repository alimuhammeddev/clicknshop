"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <section>
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center mt-48">
          <h1 className="lg:text-2xl text-xl font-semibold">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground">
            Go to our store to add amazing and wonderful products to your cart
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-4 py-12 mt-12">
        <h1 className="lg:text-2xl text-xl font-medium mb-5 text-center text-[#134272]">
          🛒 Checkout
        </h1>

        <Card className="max-w-7xl mx-auto mb-8 shadow-xl rounded-2xl">
          <CardHeader className="border-b pb-4">
            <CardTitle className="lg:text-xl text-lg font-medium text-[#134272]">
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 border-b pb-4"
                >

                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-sm overflow-hidden shadow-sm">
                      <Image
                        src={item.imageUrl ?? "/placeholder.png"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium lg:text-lg text-[#134272]">{item.name}</span>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="bg-[#134272] text-white cursor-pointer"
                      >
                        –
                      </Button>
                      <span className="text-lg font-medium text-[#134272]">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addItem({ ...item, quantity: 1 })}
                        className="bg-[#134272] text-white cursor-pointer"
                      >
                        +
                      </Button>
                    </div>
                    <span className="font-medium text-[#134272]">
                      ${((item.price * item.quantity) / 100).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4 lg:text-xl font-medium flex justify-between">
              <span className="text-[#134272]">Total</span>
              <span className="text-[#134272]">
                ${(total / 100).toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>

        <form action={checkoutAction} className="max-w-7xl mx-auto">
          <input type="hidden" name="items" value={JSON.stringify(items)} />
          <Button
            type="submit"
            className="w-full py-6 lg:text-lg rounded-md shadow-lg bg-[#1f5a91] text-white cursor-pointer hover:opacity-90 transition"
          >
            Proceed to Payment
          </Button>
        </form>
      </div>
    </section>
  );
}