"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#134272] text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold text-white">ClickNShop</h2>
          <p className="mt-2 text-sm">
            Your one-stop shop for fashion, shoes, and accessories. 
            We deliver quality at the best price.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/home" className="hover:text-white">Home</Link></li>
            <li><Link href="/product" className="hover:text-white">Product</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
          <p className="mt-2 text-sm">Subscribe to our newsletter for the latest offers.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-1 focus:outline-white border border-white text-gray-100 placeholder:text-gray-100"
            />
            <button
              type="submit"
              className="bg-gray-100 hover:bg-gray-50 cursor-pointer px-4 rounded-r-md text-black font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-sm">
        © 2025 ClickNShop. All rights reserved.
      </div>
    </footer>
  );
}