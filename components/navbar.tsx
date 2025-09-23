"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { ProfileDropdown } from "./profile-dropdown";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="w-full flex container mx-auto max-w-7xl items-center justify-between px-4 py-3">
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

        <div className="flex items-center space-x-4 relative">
          {/* Cart */}
          <Link href="/checkout" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="focus:outline-none"
              aria-label="Profile menu"
            >
              <User className="w-6 h-6 text-gray-800 mt-2 cursor-pointer" />
            </button>

            {isProfileOpen && <ProfileDropdown />}
          </div>

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