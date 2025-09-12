"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className= "w-full flex container mx-auto max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Image
          src="/clicknshop.png"
          alt="ClickNShop Logo"
          width={150}
          height={150}
          priority
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/home" className="hover:text-[#1c4880] cursor-pointer">Home</Link>
          <Link href="/product" className="hover:text-[#1c4880] cursor-pointer">Products</Link>
          <Link href="/about" className="hover:text-[#1c4880] cursor-pointer">About</Link>
        </div>

        {/* Cart + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link href="" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><Link href="/home" className="hover:text-[#1c4880] cursor-pointer">Home</Link></li>
          <li><Link href="/product" className="hover:text-[#1c4880] cursor-pointer">Products</Link></li>
          <li><Link href="/about" className="hover:text-[#1c4880] cursor-pointer">About</Link></li>
        </ul>
      )}
    </nav>
  );
};