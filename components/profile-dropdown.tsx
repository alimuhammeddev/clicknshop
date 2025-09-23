"use client";

import { User } from "lucide-react";
import Link from "next/link";

export const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-[#1c4880] rounded-2xl shadow-lg py-3 z-50 p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 rounded-full bg-[#1c4880] flex items-center justify-center text-white font-semibold">
          <User />
        </div>
        <div>
          <h1 className="text-sm font-medium text-[#1c4880]">Good day, User</h1>
          <span className="flex items-center gap-1 text-xs text-green-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Active
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-2 text-[#1c4880]" />

      {/* Logout */}
      <Link
        href="/"
        className="block w-full text-center px-3 py-2 text-sm text-red-600 rounded-lg bg-gray-100 transition"
      >
        Logout
      </Link>
    </div>
  );
};