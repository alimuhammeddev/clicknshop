"use client";

import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border-t-4 border-[#134272]">
        <CheckCircle2 className="w-16 h-16 text-[#134272] mx-auto mb-4 animate-bounce" />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order is now being processed and
          you’ll receive an update soon.
        </p>
        <Link
          href="/product"
          className="inline-block bg-[#134272] text-white px-6 py-3 rounded-full font-semibold shadow transition-transform hover:scale-100"
        >
          Continue Shopping
        </Link>
      </div>
      <p className="mt-6 text-gray-500 text-base">
        Need help?{" "}
        <Link href="#" className="text-[#134272] hover:underline">
          Contact Support
        </Link>
      </p>
    </div>
  );
}